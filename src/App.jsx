import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import {jwtDecode} from 'jwt-decode'; // Correct import syntax
import { clearToken } from './utils';
import config from './config';
const App = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    console.log('Decoded token:', decodedToken);
                    
                    setUserId(decodedToken.userId);
                    setIsAdmin(decodedToken.isAdmin === "1");
                    setIsLoggedIn(true);

                    console.log('User ID:', decodedToken.userId);
                    console.log('User Is Admin or Not:', decodedToken.isAdmin === "1");
                    
                } catch (error) {
                    console.error('Error decoding token:', error);
                    clearToken(setIsLoggedIn, setUserId, setIsSubscribed, setIsAdmin);
                }
            }
        };

        checkAuthentication();
    }, []);

    useEffect(() => {
        const fetchSubscriptionStatus = async () => {
            if (userId) {
                try {
                    const apiUrl = config.API_BASE_URL;
                    const url = `${apiUrl}/api/subscriptions/status/${userId}`;
                    console.log('Fetching subscription status from URL:', url);
                    const response = await fetch(url);
                    const data = await response.json();
                    if (response.ok) {
                        const subscriptionStatus = data.Amount > 0; // Determine if subscribed based on Amount
                        setIsSubscribed(subscriptionStatus);
                    } else {
                        console.error('Subscription fetch error:', data.message);
                    }
                } catch (error) {
                    console.error('Error fetching subscription:', error);
                }
            }
        };

        fetchSubscriptionStatus();
    }, [userId]);

    useEffect(() => {
        console.log("isSubscribed updated to:", isSubscribed);
        console.log("isLoggedIn updated to:", isLoggedIn);
        console.log("isAdmin updated to:", isAdmin);
    }, [isSubscribed, isLoggedIn, isAdmin]);

    return (
        <BrowserRouter>
            <AppRoutes 
                isSubscribed={isSubscribed}
                isAdmin={isAdmin}
                isLoggedIn={isLoggedIn}
                userId={userId}
                clearToken={() => clearToken(setIsLoggedIn, setUserId, setIsSubscribed, setIsAdmin)}
                setIsLoggedIn={setIsLoggedIn}
                setUserId={setUserId}
            />
        </BrowserRouter>
    );
}

export default App;
