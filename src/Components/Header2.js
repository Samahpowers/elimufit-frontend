import React, { useState } from "react";
import VerticalNav from "./VerticalNav"; // Import the VerticalNav component
import logo from "../images/logo.PNG"
import "../assets/header2.css";


const Header2 = ({onClick}) => {
  const [verticalNavVisible, setVerticalNavVisible] = useState(false)
  const toggleClick = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('active');
    // Toggle verticalNavVisible between true and false
    setVerticalNavVisible(prevState => !prevState);
    
    if (onClick) {
        onClick(e);
    }
}

  return (
    <div className="container-fluid bg-#004170 text-white p-2 d-flex justify-content-between header2-container">
      
      <nav className="d-flex flex-start">
        <ul className="nav">
        <img src={logo} alt="Logo" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />

          <li className="nav-item dropdown d-none d-md-block">
            <a className="nav-link text-white" href="#howitworks" >
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
          <li className="nav-item  d-none d-md-block">
            <a className="nav-link  text-white" href="#contact"   aria-expanded="false">
              Contact
            </a>
            
          </li>
          <li className="nav-item  d-none d-md-block">
            <a className="nav-link  text-white" href="/signup" >
              Sign In
            </a>
           
          </li>
        </ul>
      </nav>
      <li className="nav-item dropdown d-none d-md-block">
            <a className="nav-link dropdown-toggle text-white" href="#about" id="dropdownMenuButton4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              For Job Seekers
            </a>
            <ul className="dropdown-menu mt-4" >
              <li><a className="dropdown-item" href="#team">Home</a></li>
              <li><a className="dropdown-item" href="#mission">Search Jobs</a></li>
              <li><a className="dropdown-item" href="#values">Join Now</a></li>
              <li><a className="dropdown-item" href="/signup">Sign In</a></li>
            </ul>
          </li>
          <a href="#toggle" className="toggle-Box d-block d-sm-none "onClick={toggleClick} >
            <span className="icon-container">
                <span className="middle"></span>
            </span>
        </a>
        {verticalNavVisible && <VerticalNav />}
    </div>
  );
};

export default Header2;
