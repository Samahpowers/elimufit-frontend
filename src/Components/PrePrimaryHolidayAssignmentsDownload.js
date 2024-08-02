// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/ExamsDownload';

const PrePrimaryHolidayAssignmentsDownload = ({ isAdmin, isLoggedIn, clearToken, isSubscribed }) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="PRE PRIMARY HOLIDAY ASSIGNMENTS"
        />
        
    );
};

export default PrePrimaryHolidayAssignmentsDownload
