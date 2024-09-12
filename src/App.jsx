import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import {jwtDecode} from 'jwt-decode'; // Correct import
import { clearToken } from './utils';
import config from './config';

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    // Check authentication and decode JWT token
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const [userId, isSubscribedRaw, isAdminRaw] = decodedToken.payload;
                
                setUserId(userId);
                setIsAdmin(Boolean(isAdminRaw)); // Convert to true/false
                setIsSubscribed(Boolean(Number(isSubscribedRaw))); // Convert to true/false
                setIsLoggedIn(true);
            } catch (error) {
                console.error('Error decoding token:', error);
                clearToken(setIsLoggedIn, setUserId, setIsSubscribed);
            }
        } else {
            // No token, user is not logged in
            setIsLoggedIn(false);
        }
    }, []);

    // Fetch subscription status when userId is set (if not included in the token)
    useEffect(() => {
        const fetchSubscriptionStatus = async () => {
            if (userId) { // Only fetch if userId is available
                try {
                    const apiUrl = config.API_BASE_URL;
                    const url = `${apiUrl}/api/subscriptions/status/${userId}`;
                    console.log('Fetching subscription status from URL:', url);

                    const response = await fetch(url);
                    const data = await response.json();

                    if (response.ok) {
                        const subscriptionStatus = data.Amount > 0; // Assuming Amount indicates subscription
                        setIsSubscribed(subscriptionStatus);
                        localStorage.setItem('isSubscribed', subscriptionStatus.toString());
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

    // Sync `isSubscribed` with localStorage on initial load
    useEffect(() => {
        const storedSubscriptionStatus = localStorage.getItem('isSubscribed');
        if (storedSubscriptionStatus !== null) {
            setIsSubscribed(storedSubscriptionStatus === 'true');
        }
    }, []);

    // Log when `isSubscribed` or `isAdmin` changes
    useEffect(() => {
        console.log("isSubscribed updated to:", isSubscribed);
        console.log("isAdmin updated to:", isAdmin);
    }, [isSubscribed, isAdmin]);

    return (
        <BrowserRouter>
            <AppRoutes
                isSubscribed={isSubscribed}
                isLoggedIn={isLoggedIn}
                userId={userId}
                clearToken={() => clearToken(setIsLoggedIn, setUserId, setIsSubscribed)}
            />
        </BrowserRouter>
    );
};

export default App;
