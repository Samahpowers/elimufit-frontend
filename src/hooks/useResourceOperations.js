import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDownloadHandler = () => {
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleMetaData = async (path, id, category) => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
        // Retrieve the access token and subscription status from localStorage
        const token = localStorage.getItem('accessToken');
        const isSubscribedRaw = localStorage.getItem('isSubscribed');

        // Convert subscription status from string to boolean
        const isSubscribed = isSubscribedRaw === 'true';

        // Check if the user is logged in and subscribed
        if (!token) throw new Error('Log In To Proceed');
        if (!isSubscribed) throw new Error('Subscribe to access metadata');

        // Construct the modified category and URL
        const modifiedCategory = category.slice(0, -1);
        const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";
        const url = `${apiUrl}/${path}/${modifiedCategory}/${id}`;

      

        // Make the API request to get metadata
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
            signal
        });

        // Check the response status and handle metadata
        if (response.status === 200) {
            const metadata = response.data;
            console.log('Received metadata:', metadata);
            // Handle the metadata here (e.g., store it in the state or display it)
            // Example: setMetadata(metadata);
        } else {
            throw new Error(`Unexpected response status: ${response.status}`);
        }

    } catch (error) {
        // Handle errors such as token issues or API request failures
        if (signal.aborted) {
            console.log('Metadata request aborted');
        } else {
            setErrorMessage(error.message);
            console.error('Error retrieving metadata:', error);
        }
    }
};



const handleDownloadExam = async (path, id, category, fileName) => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
        const token = localStorage.getItem('accessToken');
        const isSubscribedRaw = localStorage.getItem('isSubscribed');
        

        const isSubscribed = isSubscribedRaw === 'true';
      
        if (!token) throw new Error('Log In To Proceed');
       

        if (!isSubscribed) throw new Error('Subscribe to download');

        const modifiedCategory = category.slice(0, -1);
        const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";
        const url = `${apiUrl}/${path}/${modifiedCategory}/file/${id}`;
       

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
        link.download = fileName || 'downloaded-file'; // Default name if fileName is undefined
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(downloadUrl);
        link.remove();
    } catch (error) {
        if (signal.aborted) {
            console.log('Download aborted');
        } else {
            setErrorMessage(error.message);
            console.error(error.message);
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
