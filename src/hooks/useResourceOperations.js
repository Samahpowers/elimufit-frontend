import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDownloadHandler = () => {
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    


    const handleDownloadExam = async (path, id, category, fileName) => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        try {
            // Retrieve the access token
            const token = localStorage.getItem('accessToken');
            if (!token) throw new Error('Log In To Proceed');
    
            const userId = localStorage.getItem('userId');
            if (!userId) throw new Error('User ID is missing');
    
            // Fetch subscription status from the database
            const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";
            const subscriptionUrl = `${apiUrl}/api/subscriptions/status/${userId}`;
    
            // Check subscription status
            const subscriptionResponse = await axios.get(subscriptionUrl, {
                headers: { Authorization: `Bearer ${token}` },
                signal,
            });
    
            const { data: subscriptionData } = subscriptionResponse;
            const amount = subscriptionData.Amount || 0;
            if (amount <= 0) throw new Error('Subscribe to download');
    
            // Proceed with file download
            const modifiedCategory = category.slice(0, -1);
            const fileDownloadUrl = `${apiUrl}/${path}/${modifiedCategory}/file/${id}`;
            
            const downloadResponse = await axios.get(fileDownloadUrl, {
                headers: { Authorization: `Bearer ${token}` },
                responseType: 'blob', 
                signal,
            });
    
            if (downloadResponse.status !== 200) {
                throw new Error(`Unexpected response status: ${downloadResponse.status}`);
            }
    
            const { data, headers } = downloadResponse;
    
            if (!data || !(data instanceof Blob)) {
                throw new Error('Invalid file data received');
            }
    
            const contentType = headers['content-type'] || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            const blob = new Blob([data], { type: contentType });
            const downloadUrl = window.URL.createObjectURL(blob);
    
            // Trigger download
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = fileName || 'downloaded-file.docx';
            document.body.appendChild(link);
            link.click();
    
            // Clean up
            window.URL.revokeObjectURL(downloadUrl);
            link.remove();
    
            console.log("Download successful");
        } catch (error) {
            if (signal.aborted) {
                console.log('Download aborted by user');
            } else {
                setErrorMessage(error.message);
                console.error("Download error:", error.message);
            }
        }
    };
    



    const closeModal = () => {
        setShowModal(false);
        setErrorMessage('');
    };

    useEffect(() => {
        if (errorMessage) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [errorMessage]);

    return {
        handleDownloadExam,
        showModal,
        errorMessage,
        closeModal
    };
};

export const useDeleteHandler = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleDeleteExam = async (path, id, category) => {
        try {
            const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";
            const url = `${apiUrl}/${path}/${category}/${id}`;
           


            const response = await axios.delete(url);
            if (response.status !== 200) {
                throw new Error(`Unexpected response status: ${response.status}`);
            }

            setShowDeleteModal(false);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error.message);
            console.error('Error deleting scheme:', error);
        }
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
        setErrorMessage('');
    };

    return {
        handleDeleteExam,
        showDeleteModal,
        setShowDeleteModal,
        errorMessage,
        closeDeleteModal
    };
};
