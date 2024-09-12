// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/NotesDownloadAndDelete';

const JSSNotesDownload = ({ isAdmin, isLoggedIn, clearToken, isSubscribed }) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="JUNIOR SCHOOL NOTES"
        />
        
    );
};

export default JSSNotesDownload;
