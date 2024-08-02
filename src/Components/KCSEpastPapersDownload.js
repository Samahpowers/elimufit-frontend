
import React from 'react';
import ExamsDownload from '../hooks/ExamsDownload';

const KCSEpastPapersDownload = ({ isAdmin, isLoggedIn, clearToken, isSubscribed }) => {
    return (
    
       
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="KCSE PAST PAPERS"
        />
        
    );
};

export default KCSEpastPapersDownload;
