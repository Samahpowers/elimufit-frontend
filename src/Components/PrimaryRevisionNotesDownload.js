// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/NotesDownloadAndDelete';

const PrimaryRevisionNotesDownload = ({ isAdmin, isLoggedIn, clearToken, isSubscribed }) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="PRIMARY REVISIONS SECTION NOTES"
        />
        
    );
};

export default PrimaryRevisionNotesDownload;
