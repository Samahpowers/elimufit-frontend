import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ResourceLinks from './ResourceLinks';

const SchoolResources = ({ isAdmin, userId, isLoggedIn, clearToken }) => {

    return (
        <div>
            <header className="container-fluid d-flex p-3 bg-success" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
              
                
                <div className="flex-grow-1 d-flex justify-content-center">
                    {!isLoggedIn && (
                        <Link to="/login" className="text-white border px-4 py-2 text-decoration-none rounded d-inline-block">Login / Renew Access</Link>
                    )}
                </div>
                
                <div>
                    {/* {userId} {/*To set user profile later */ }
                </div>
                
                <div>
                    {isLoggedIn && (
                        <button className="btn btn-outline-primary bg-dark btn-sm ml-3" onClick={clearToken} style={{ whiteSpace: 'nowrap' }}>Log Out</button>
                    )}
                </div>
               
            </header>

            <div className="container-fluid p-0" style={{ padding: '0', margin: '0' }}>
                <div className="row g-0">
                    <div className="col-12 overflow-auto" style={{ maxHeight: '100vh' }}>
                        <ResourceLinks 
                            isAdmin={isAdmin}
                            isLoggedIn={isLoggedIn}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SchoolResources;
