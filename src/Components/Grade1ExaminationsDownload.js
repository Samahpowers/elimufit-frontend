// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/ExamsDownload';

const Grade1ExaminationsDownload = ({ isAdmin, isLoggedIn, clearToken ,isSubscribed}) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="GRADE 1 EXAMINATIONS"
        />
        
    );
};

export default Grade1ExaminationsDownload ;
