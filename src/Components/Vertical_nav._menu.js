import React from 'react';
import { Link } from 'react-router-dom';

const VerticalnavMenu = () => {
    return (
        <nav className="navbar navbar-light vh-100 d-flex align-items-start text-white height-fit-content" style={{ backgroundColor: ' #393939', margin: '0', padding: '0', overflowY: 'auto' }}>
            
            <ul className="navbar-nav d-flex flex-column align-items-start" style={{ padding: '10px', margin: '0' }}>
            <h3 className="text-white mt-5" style={{ opacity: 0.8 }}>Elimufiti</h3>
                <li className="nav-item" style={{ marginBottom: '10px' }}>
                    <Link className="nav-link text-white d-flex align-items-center" to="/">
                        <i className="bi bi-house"></i>
                        <span className="ms-2"><strong className="text-white" style={{ opacity: 0.8 }}>Home</strong></span>
                    </Link>
                </li>
                <li className="nav-item" style={{ marginBottom: '10px' }}>
                    <Link className="nav-link text-white d-flex align-items-center" to="/signup">
                        <i className="bi bi-person-plus"></i>
                        <span className="ms-2"><strong className="text-white" style={{ opacity: 0.8 }}>Get Access</strong></span>
                    </Link>
                </li>
                <li className="nav-item" style={{ marginBottom: '10px' }}>
                    <Link className="nav-link text-white d-flex align-items-center" to="/support/upload/resources">
                        <i className="bi bi-life-preserver"></i>
                        <span className="ms-2"><strong className="text-white" style={{ opacity: 0.8 }}>Support</strong></span>
                    </Link>
                </li>
                <li className="nav-item" style={{ marginBottom: '10px' }}>
                    <Link className="nav-link text-white d-flex align-items-center" to="/job/opportunities">
                        <i className="bi bi-briefcase"></i>
                        <span className="ms-2"><strong className="text-white" style={{ opacity: 0.8 }}>Job Opportunities</strong></span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default VerticalnavMenu;
