// src/components/PP1ExamsDownload.js
import React from 'react';
import {SchemesDownload} from '../hooks/SchemesOperations';

const JSSSchemesDownload = ({ isAdmin, isLoggedIn, clearToken , isSubscribed}) => {
    return (
    
       
        <SchemesDownload
            isAdmin={isAdmin}
            isSubscribed={isSubscribed}
            isLoggedIn={isLoggedIn}
            clearToken={clearToken}
            heading="JUNIOR SCHOOL SCHEMES"
        />
        
    );
};

export default JSSSchemesDownload;
