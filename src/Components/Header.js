import { Link } from "react-router-dom";
import logo from "../favicon.png"
const Header = ({ isAdmin, userId, isLoggedIn, clearToken, isSubscribed }) => {
   

    return (
        <header className="container-fluid d-flex p-3 bg-success" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
            <div>
                {/* Placeholder for the logo */}
                {<img src={logo} alt="logo" width="70px" height="40"/>}
            </div>
            <div className="flex-grow-1 d-flex justify-content-center">
                {!isLoggedIn && (
                    <Link to="/login" className="text-white border px-4 py-2 text-decoration-none rounded d-inline-block">
                        Login / Renew Access
                    </Link>
                )}
            </div>
            <div>
                {/* Placeholder for the user profile */}
                {/*userId*/}
            </div>
            <div>
                {isLoggedIn && (
                    <button 
                        className="btn btn-outline-primary bg-dark btn-sm ml-3" 
                        onClick={() => {
                            console.log('Log Out button clicked');
                            clearToken();
                        }} 
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        Log Out
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;