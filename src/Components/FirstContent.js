import React from "react";
import { Link } from "react-router-dom";
import "../assets/first-content.css"

const FirstContent = () => {
  return (
    <div className="custom-background d-flex flex-column ">

      {/* Large Screen Section */}
      <div className="first-left-lg d-none d-lg-flex flex-column min-vh-100">
        <h1 className="mt-5 ms-5 ps-2 pt-5">
          <span className="font-weight-light large-font">Welcome to</span><br />
          <span className="font-weight-bold">Your hub for school resources &</span><br />
          <span className="font-weight-bold">job connections™</span><br />
        </h1>
        <div className="ms-5 ps-2 pt-5">
          <h4>we provide the tools for academic success and</h4>
          <h4>connect you with exciting job opportunities.</h4>
          <div className="d-flex">
            <Link to="/school/resources">
              <button className="btn btn-primary px-5 mx-2">School Resources</button>
            </Link>
            <button className="btn btn-primary px-5 mx-2">Get Started</button>
          </div>
        </div>
      </div>

      {/* Small Screen Section */}
      <div className="first-left-sm d-flex d-lg-none flex-column min-vh-100">
      <h1 className="mt-4 ms-2 ps-2 pt-3 text-charcoal text-center">
        <span className="font-weight-light-lg large-font-sm text-charcoal">Welcome to</span><br /><br/>
        <span className="font-weight-bold-sm text-charcoal">Your hub for school resources &</span><br />
        <span className="font-weight-bold-sm text-charcoal">job connections™</span><br />
      </h1>

        <div className="ms-2 ps-2 pt-2 accursed-black font-weight-medium-sm">
        <div className="text-center mt-4 mb-4">
          <h4>We provide the tools for academic success and</h4>
          <h4>connect you with exciting job opportunities.</h4>
        </div>

        <div className="d-flex mt-5 pt-2">
          <Link to="/school/resources">
            <button className="btn btn-primary px-2 mx-2 small-width-btn">School Resources</button>
          </Link>
          <button className="btn btn-primary px-2 mx-2 small-width-btn">Get Started</button>
        </div>

        </div>
      </div>

    </div>
  );
};

export default FirstContent;
