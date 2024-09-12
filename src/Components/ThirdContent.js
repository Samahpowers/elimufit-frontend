import React from "react"
import logo from "../images/jobseeker1-removebg-preview.png"
import "../assets/third-content.css"
const ThirdContent = () => {
    return (
        <div className="container-fluid bg-primary text-white p-5 third-container d-none d-md-block">
  <div className="row h-100">
    <div className="col-md-3  text-left h-100">
      <img src={logo} alt="Image" className="img-fluid h-100 w-100 object-fit-cover custom-gradient-shadow animated-image" />
    </div>

    <div className="col-12 col-md-9 pt-2">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <p className="text-white fw-bold stats-number">10T+</p>
          <p className="stats-border">CANDIDATES</p>
          <p>
          Reach our growing audience through a mix of multi-channel solutions that optimize efforts and maximize return on investment
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <p className="text-white fw-bold stats-number">30T+</p>
          <p className="stats-border">RESUMES</p>
          <p>
          Easily discover the best talent in the diverse Nexxt database–an all in one, easy-to-use platform whether you're casting a wide net or hyper-focused
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <p className="text-white fw-bold stats-number">20T+</p>
          <p className="stats-border">SUBSCRIBERS</p>
          <p>
          Our subscribers relish ongoing support and exclusive resources even after employment, because their success is our delight
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      
    );
  };
  
export default ThirdContent  