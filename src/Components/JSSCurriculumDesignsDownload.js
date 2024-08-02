// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/ExamsDownload';

const JSSCurriculumDesignsDownload = ({ isAdmin, isLoggedIn, clearToken, isSubscribed}) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="JUNIOR SCHOOL CURRICULUM DESIGN"
        />
        
    );
};

export default JSSCurriculumDesignsDownload;
