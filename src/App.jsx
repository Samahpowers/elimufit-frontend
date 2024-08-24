import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import {jwtDecode} from 'jwt-decode'; // Correct import
import { clearToken } from './utils';
import config from './config';

const App = () => {
    const [isSubscribed, setIsSubscribed] = useState(false); // Initial state as false
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);

    // Check authentication and decode JWT token
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUserId(decodedToken.userId);
                setIsLoggedIn(true);
            } catch (error) {
                console.error('Error decoding token:', error);
                clearToken(setIsLoggedIn, setUserId, setIsSubscribed);
            }
        }
    }, []);

    // Fetch subscription status when userId is set
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
                        const subscriptionStatus = data.Amount > 0; // Assuming Amount indicates subscription
                        setIsSubscribed(subscriptionStatus);

                        // Update localStorage
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

    // Sync `isSubscribed` with localStorage (if needed)
    useEffect(() => {
        const storedSubscriptionStatus = localStorage.getItem('isSubscribed');
        if (storedSubscriptionStatus !== null) {
            setIsSubscribed(storedSubscriptionStatus === 'true');
        }
    }, []); // Runs on initial load to sync with localStorage

    // Log when `isSubscribed` changes
    useEffect(() => {
        console.log("isSubscribed updated to:", isSubscribed);
    }, [isSubscribed]);

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
