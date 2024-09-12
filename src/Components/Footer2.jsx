import React from "react";
import "../assets/Footer2.css";

const Footer2 = () => {
  
  return (
    <footer className="container-fluid bg-custom-dark text-light">
      <div className="px-4 py-5">
        <div className="row justify-content-between">
          {/* Column 1 */}
          <div className="col-12 col-md-2 mb-4">
            <a className="footer-link-bold text-light mb-3" href="#">TEACHERS</a>
            <ul className="list-unstyled custom-footer-text py-2">
              <li><a className="custom-footer-text" href="#">Teaching Staff</a></li>
              <li><a className="custom-footer-text" href="#">Parents</a></li>
              <li><a className="custom-footer-text" href="#">Students</a></li>
              <li><a className="custom-footer-text" href="#">Schools</a></li>
              <li><a className="custom-footer-text" href="#">Teachers' Networks</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-12 col-md-2 mb-4">
            <a className="footer-link-bold text-light mb-3" href="#">JOB SEEKERS</a>
            <ul className="list-unstyled custom-footer-text py-2">
              <li><a className="custom-footer-text" href="#">Explore Company Profiles</a></li>
              <li><a className="custom-footer-text" href="#">Apply for Jobs</a></li>
              <li><a className="custom-footer-text" href="#">Access Skill Training Programs</a></li>
              <li><a className="custom-footer-text" href="#">Get Resume Writing Services</a></li>
              <li><a className="custom-footer-text" href="#">Sign Up for Job Seeker Account</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-12 col-md-2 mb-4">
            <a className="footer-link-bold text-light mb-3" href="#">HIRING</a>
            <ul className="list-unstyled custom-footer-text py-2">
              <li><a className="custom-footer-text" href="#">Sign Up for Employer Account</a></li>
              <li><a className="custom-footer-text" href="#">Search Candidates by Skillset</a></li>
              <li><a className="custom-footer-text" href="#">Create Company Profile</a></li>
              <li><a className="custom-footer-text" href="#">Browse Candidate Database</a></li>
              <li><a className="custom-footer-text" href="#">Employer Branding Resources</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-12 col-md-2 mb-4">
            <a className="footer-link-bold text-light mb-3" href="#">ABOUT</a>
            <ul className="list-unstyled custom-footer-text py-2">
              <li><a className="custom-footer-text" href="#">Meet the Team</a></li>
              <li><a className="custom-footer-text" href="/careers">Careers at Our Company</a></li>
              <li><a className="custom-footer-text" href="#">Customer Testimonials</a></li>
              <li><a className="custom-footer-text" href="#">Our Partners</a></li>
              <li><a className="custom-footer-text" href="#">Our Offices & Locations</a></li>
              <li><a className="custom-footer-text" href="#">Contact Us</a></li>
            </ul>
          </div>
          {/* Column 5 */}
          <div className="col-12 col-md-2 mb-4">
            <a className="footer-link-bold text-light mb-3" href="#">CONNECT WITH E.L.S</a>
            <ul className="list-unstyled custom-footer-text py-2">
              <li><a className="custom-footer-text" href="#">Follow Us on Facebook</a></li>
              <li><a className="custom-footer-text" href="#">Follow Us on Instagram</a></li>
              <li><a className="custom-footer-text" href="#">Contact Our Support Team</a></li>
              <li><a className="custom-footer-text" href="#">Connect with Us on WhatsApp</a></li>
              <li><a className="custom-footer-text" href="#">Schedule a Consultation</a></li>
              <li><a className="custom-footer-text" href="#">Connect via Phone or SMS</a></li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className=" py-3 border-top mt-4">
          <ul className="d-flex  flex-md-row  list-unstyled custom-footer-text fs-7 fw-light">
            <li className="mx-2"><a className="custom-footer-text" href="#">Privacy Policy</a></li>
            <li className="mx-2"><a className="custom-footer-text" href="#">Terms & Conditions</a></li>
            <li className="mx-2">
              <a className="custom-footer-text position-relative" href="#" title="0716880637">Contact Us</a>
            </li>

            <li className="mx-2"><a className="custom-footer-text" href="/support/upload/resources">Support</a></li>
          </ul>
          <ul className="list-unstyled fs-7 fw-light custom-footer-text d-flex">
            <li>&copy; 2023 Eliminufiti. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
