import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container-fluid p-3">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-center">
                        <Link to="/signup" className="text-white">Register / Renew Access</Link>
                        <p><strong>Contact us:</strong></p>
                        <ul className="list-unstyled">
                            <li>Email: info@elimufiti.co.ke</li>
                            <li>Phone: 0710 00 00</li>
                            <li><a href="#" className="text-white">Whatsapp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
