// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/NotesDownloadAndDelete';

const  SecondaryNotesDownload= ({ isAdmin, isLoggedIn, clearToken , isSubscribed}) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="SECONDARY REVISION NOTES"
        />
        
    );
};

export default SecondaryNotesDownload;
