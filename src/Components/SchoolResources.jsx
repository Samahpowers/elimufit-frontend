import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Main from "./Main";
import VerticalnavMenu from "./Vertical_nav._menu";
import ToggleBox from "./ToggleBox";
const SchoolResources = ({ isAdmin, userId, isLoggedIn, clearToken }) => {
    // State to manage the visibility of the VerticalnavMenu
    const [menuVisible, setMenuVisible] = useState(false);

    // Toggle function to show/hide the VerticalnavMenu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

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
                <ToggleBox onClick={toggleMenu} /> {/* ToggleBox to handle menu visibility */}
            </header>

            <div className="container-fluid" style={{ padding: '0' }}>
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className={`col-lg-2 ${menuVisible ? '' : 'd-none'} d-lg-block overflow-auto`} style={{ maxHeight: '100vh' }}>
                            <VerticalnavMenu isAdmin={isAdmin} />
                        </div>
                        <div className="col-lg-10 overflow-auto" style={{ maxHeight: '100vh' }}>
                            <Main 
                                isAdmin={isAdmin}
                                isLoggedIn={isLoggedIn}
                            />
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    );
};

export default SchoolResources;
