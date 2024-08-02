// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/ExamsDownload';

const SecondaryFullSetExaminationsDownloads = ({ isAdmin, isLoggedIn, clearToken, isSubscribed }) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="SECONDARY SCHOOL FULL SET EXAMINATIONS SECTION"
        />
        
    );
};

export default SecondaryFullSetExaminationsDownloads;
