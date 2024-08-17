import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDownloadHandler = () => {
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleDownloadExam = async (path, id, category, fileName) => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        try {
            const token = localStorage.getItem('accessToken');
            const isSubscribed = localStorage.getItem('isSubscribed');
            if (!token) throw new Error('No token found');
            console.log("Generated toke is:", token)
            console.log('isSubscribed:', isSubscribed); // Log the value
    
            if (!isSubscribed) throw new Error('You must subscribe to download');
    
            const modifiedCategory = category.slice(0, -1);
            const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";
            const url = `${apiUrl}/${path}/${modifiedCategory}/file/${id}`;
            console.log('Request URL IS:', url);
            
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${token}` },
                responseType: 'blob',
                signal
            });
    
            if (response.status !== 200) {
                throw new Error(`Unexpected response status: ${response.status}`);
            }
    
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const downloadUrl = window.URL.createObjectURL(blob);
    
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(downloadUrl);
            link.remove();
        } catch (error) {
            if (signal.aborted) {
                console.log('Download aborted');
            } else {
                setErrorMessage(error.message);
                console.error('Error downloading exam:', error);
            }
        }
    };
    
    
    const closeModal = () => {
        setShowModal(false);
        setErrorMessage('');
    };
//Try to setShowmodal if isSubscribed or isLoggedin
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
            console.log('Request URL IS:', url);
            
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
