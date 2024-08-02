// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/ExamsDownload';

const PrePrimaryCurriculumDesignDownload = ({ isAdmin, isLoggedIn, clearToken, isSubscribed }) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="PRE PRIMARY CURRICULUM DESIGN SECTION"
        />
        
    );
};

export default PrePrimaryCurriculumDesignDownload;
