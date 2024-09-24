import React, { useState } from "react";
import VerticalNav from "./VerticalNav"; // Import the VerticalNav component
import logo from "../images/logo.PNG";
import "../assets/header2.css";

const Header2 = ({ onClick, isAdmin , userId, isLoggedIn, clearToken, isSubscribed }) => {
  console.log("isLogged in in Header2 updated to:", isLoggedIn);
  console.log("isAdmin in in Header2 updated to:", isAdmin);
  console.log("isSubscribed in in Header2 updated to:", isSubscribed);
  
  const [verticalNavVisible, setVerticalNavVisible] = useState(false);

  const toggleClick = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('active');
    setVerticalNavVisible(prevState => !prevState);
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div className="header2-container container-fluid text-white p-2 d-flex justify-content-between">
      <nav className="d-flex flex-start">
        <ul className="nav">
          <img src={logo} alt="Logo" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
          <li className="nav-item dropdown d-none d-md-block">
            <a className="nav-link text-white" href="#howitworks">
              How it works
            </a>
          </li>
          <li className="nav-item dropdown d-none d-md-block">
            <a className="nav-link dropdown-toggle text-white" href="#solutions" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Solutions
            </a>
            <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton2">
              <li><a className="dropdown-item" href="#solution1">Solution 1</a></li>
              <li><a className="dropdown-item" href="#solution2">Solution 2</a></li>
              <li><a className="dropdown-item" href="#solution3">Solution 3</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown d-none d-md-block">
            <a className="nav-link dropdown-toggle text-white" href="#resources" id="dropdownMenuButton3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
            </a>
            <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton3">
              <li><a className="dropdown-item" href="/school/resources">School Resources</a></li>
              <li><a className="dropdown-item" href="#resource2">Job Opportunities</a></li>
              <li> <a className="dropdown-item" href={isAdmin ?  "/support": "/"}>Support</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown d-none d-md-block">
            <a className="nav-link dropdown-toggle text-white" href="#about" id="dropdownMenuButton4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
            <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton4">
              <li><a className="dropdown-item" href="#team">Our Team</a></li>
              <li><a className="dropdown-item" href="#mission">Our Mission</a></li>
              <li><a className="dropdown-item" href="#values">Our Values</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown d-none d-md-block">
            <a className="nav-link dropdown-toggle text-white" href="#about" id="dropdownMenuButton4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact us
            </a>
            <ul className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton4">
              <li><a className="dropdown-item" href="#team">Tell: 0716880637</a></li>
              <li><a className="dropdown-item" href="#team">email : info@elimufiti.co.ke</a></li>
              
            </ul>
          </li>
          
          <li className="nav-item d-none d-md-block">
            {!isLoggedIn && (
            <a className="nav-link text-white" href="/signup">
            Sign In
          </a>
            )}
            
          </li>
        </ul>
      </nav>
      <li className="nav-item d-none d-md-block">
        <li className="d-flex align-items-center">
          {isLoggedIn ? (
            <div className="justify-center">
              <span 
                className="btn btn-outline-light btn-sm" 
                onClick={() => clearToken()} 
                style={{ whiteSpace: 'nowrap' }}
              >
               <li className="logout">
                <a href="">Logout</a>
               </li>
              </span>
            </div>
          ) : (
            <p className="qwitcher-grypen-bold">
              elimufiti learning solutions
            </p>
          )}
        </li>
      </li>
      <a href="#toggle" className="toggle-Box d-block d-sm-none" onClick={toggleClick}>
        <span className="icon-container">
          <span className="middle"></span>
        </span>
      </a>
      {verticalNavVisible && (
        <VerticalNav
          isSubscribed={isSubscribed}
          isLoggedIn={isLoggedIn}
          userId={userId}
          clearToken={clearToken}
        />
      )}
    </div>
  );
};

export default Header2;
