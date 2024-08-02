// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/ExamsDownload';

const KCSEtrialExaminationsDownload = ({ isAdmin, isLoggedIn, clearToken , isSubscribed}) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="KCSE TRIAL EXAMINATIONS"
        />
        
    );
};

export default KCSEtrialExaminationsDownload;
