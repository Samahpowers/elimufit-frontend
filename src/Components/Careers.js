import React, { useState } from "react";
import axios from "axios";
import config from "../config";
import jobapp from "../files/job application.pdf";
import graphics from "../images/Graphiced Final 2  Deeee.png"
const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    applicationType: "",
    startDate: "",
    employmentStatus: "",
    resumeSubmission: "",
    resumeFile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    if (type === "radio") {
      setFormData((prevData) => ({ ...prevData, [e.target.name]: value }));
    } else if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [id]: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitData = new FormData();
    Object.keys(formData).forEach((key) => {
      submitData.append(key, formData[key]);
    });

    const apiUrl = config.API_BASE_URL;

    axios
      .post(`${apiUrl}/applicants/create/data`, submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
        alert("Your application has been submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          applicationType: "",
          startDate: "",
          employmentStatus: "",
          resumeSubmission: "",
          resumeFile: null,
        });
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
        alert("There was an error submitting your application. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
    <div className="container my-4 rounded justify-" style={{ backgroundColor: '#343a40', color: '#f8f9fa' }}>
      <div className="row">
        <div className="col-md-6 mb-4 d-flex flex-column pb-lg-10 text-center">
          <p className="mt-5" style={{ fontSize: '24px', fontWeight: '500', letterSpacing: '1px' }}>ELIMUFITI LEARNING SOLUTIONS</p>
          <p className="text-justify" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Elimufiti Learning Solutions is a dynamic and innovative organization
            dedicated to enhancing education through quality resources, exceptional
            service, and cutting-edge solutions.
          </p>
          <p className="text-justify" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            As we continue to expand our reach and impact, we are seeking passionate and
            skilled professionals to join our team across various roles.
          </p>
          <p className="text-justify" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            We invite applications from individuals who are eager to contribute to our
            mission of transforming learning experiences and making a meaningful
            difference in education.
          </p>
          <p className="text-justify" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Explore the exciting opportunities available and become a part of our
            growing family. If you are driven, creative, and ready to be a part of
            something impactful, we would love to hear from you!
          </p>
          <a
            href={jobapp}
            download={jobapp}
            className="text-primary"
            style={{ fontSize: '18px', cursor: 'pointer', textDecoration: 'underline', marginTop: '20px' }}
            aria-label="Download the list of available jobs"
          >
            Click the link to download the list of available jobs
          </a>
        </div>

        <div className="col-md-6 mb-4">
        <div className="card p-4 shadow" style={{ backgroundColor: '#495057', color: '#f8f9fa' }}>
  <h6 className="text-center mb-4">Job Application Form</h6>
  <form onSubmit={handleSubmit}>
    {/* Personal Information */}
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        className="form-control form-control-custom"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="lastName" className="form-label">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        className="form-control form-control-custom"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="form-control form-control-custom"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        className="form-control form-control-custom"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>

    {/* Application Details */}
    <div className="mb-3">
      <label htmlFor="applicationType" className="form-label">
        What are you applying for?
      </label>
      <select
        id="applicationType"
        className="form-select form-select-custom"
        value={formData.applicationType}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="job">Job</option>
        <option value="internship">Internship</option>
        <option value="scholarship">Scholarship</option>
        <option value="volunteer">Volunteer</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="startDate" className="form-label">
        Available start date
      </label>
      <input
        type="date"
        id="startDate"
        className="form-control form-control-custom"
        value={formData.startDate}
        onChange={handleChange}
        required
      />
    </div>

    {/* Employment Status */}
    <div className="mb-3">
      <p>What is your current employment status?</p>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="employmentStatus"
          id="employed"
          value="employed"
          checked={formData.employmentStatus === "employed"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="employed">
          Employed
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="employmentStatus"
          id="unemployed"
          value="unemployed"
          checked={formData.employmentStatus === "unemployed"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="unemployed">
          Unemployed
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="employmentStatus"
          id="selfEmployed"
          value="self-employed"
          checked={formData.employmentStatus === "self-employed"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="selfEmployed">
          Self Employed
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="employmentStatus"
          id="student"
          value="student"
          checked={formData.employmentStatus === "student"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="student">
          Student
        </label>
      </div>
    </div>

    {/* Resume Submission */}
    <div className="mb-3">
      <p>How do you prefer to submit your resume?</p>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="resumeSubmission"
          id="uploadFile"
          value="upload"
          checked={formData.resumeSubmission === "upload"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="uploadFile">
          Upload file
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="resumeSubmission"
          id="provideUrl"
          value="url"
          checked={formData.resumeSubmission === "url"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="provideUrl">
          Provide URL
        </label>
      </div>
    </div>

    {/* File Upload */}
    {formData.resumeSubmission === "upload" && (
      <div className="mb-3">
        <label htmlFor="resumeFile" className="form-label">
          Upload Resume
        </label>
        <input
          type="file"
          id="resumeFile"
          className="form-control form-control-custom"
          onChange={handleChange}
        />
      </div>
    )}

    {/* Submit Button */}
    <div className="d-grid">
      <button
        type="submit"
        className="btn btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </div>
  </form>
</div>

        </div>
      </div>
   

    </div>
    <div className="d-flex justify-content-center">
    <img src={graphics} alt="graphics loading" className="img-fluid custom-image" />
</div>

    </>
  );
};

export default Careers;
