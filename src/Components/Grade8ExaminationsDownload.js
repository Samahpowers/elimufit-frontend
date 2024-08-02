// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/ExamsDownload';

const Grade8ExaminationsDownload = ({ isAdmin, isLoggedIn, clearToken, isSubscribed }) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="GRADE 8 EXAMINATIONS"
        />
        
    );
};

export default Grade8ExaminationsDownload;
