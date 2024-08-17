import React from "react";
import { Link } from "react-router-dom";
import "../assets/first-content.css"
import "../assets/header2.css"
const FirstContent = () => {
  return (
    <div className="custom-background d-flex flex-column">

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
        <h1 className="mt-4 ms-2 ps-2 pt-3">
          <span className="font-weight-light-sm large-font-sm text-warm">Welcome to</span><br />
          <span className="font-weight-bold-sm text-silver">Your hub for school resources &</span><br />
          <span className="font-weight-bold-sm text-silver">job connections™</span><br />
        </h1>
        <div className="ms-2 ps-2 pt-5 text-platinum">
          <h4>We provide the tools for academic success and</h4>
          <h4>connect you with exciting job opportunities.</h4>
        <div className="d-flex mt-5 pt-2">
          <Link to="/school/resources">
            <button className="btn btn-primary px-3 mx-2 small-width-btn">School Resources</button>
          </Link>
          <button className="btn btn-primary px-3 mx-2 small-width-btn">Get Started</button>
        </div>

        </div>
      </div>

    </div>
  );
};

export default FirstContent;
