import React from 'react';

const Modal = ({ show, handleClose, isSubscribed, children, isLoggedIn }) => {
    const handleLoginSignupClick = () => {
        const targetUrl = isLoggedIn ? "/subscription" : "/login"; 
        window.location.href = targetUrl;
    };

    return (
        <div className={`modal ${show ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-black">
                            {isLoggedIn 
                                ? isSubscribed 
                                    ? "Action Required" 
                                    : "Subscription Required" 
                                : "Login Required"}
                        </h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-black">
                        {children}
                        
                        {/*Redirectionto either subscribe or login*/}
                        <div className="text-decoration-underline text-primary mt-3" style={{ cursor: 'pointer' }} onClick={handleLoginSignupClick}>
                            {isLoggedIn 
                                ? isSubscribed 
                                    ? null 
                                    : <p>Subscribe</p> 
                                : <p>Login</p>}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
