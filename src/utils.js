
export const clearToken = (setIsLoggedIn, setUserId, setIsSubscribed) => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setUserId(null);
    setIsSubscribed(false); // Reset the subscription status on logout
    window.location.href = "/";
};
