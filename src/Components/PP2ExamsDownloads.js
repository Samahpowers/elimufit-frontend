// src/components/PP1ExamsDownload.js
import React from 'react';
import ExamsDownload from '../hooks/ExamsDownload';

const PP2ExamsDownload = ({ isAdmin, isLoggedIn, clearToken , isSubscribed}) => {
    return (
        <ExamsDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="PP2 SECTION"
        />
    );
};

export default PP2ExamsDownload;
