import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validationLogins } from "../middlewares/loginValidation";
import axios from "axios";
import config from "../config";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Perform form validation
        const validationErrors = validationLogins(formData);
    
        // Update errors state
        setErrors(validationErrors);
    
        // Check if there are validation errors
        const hasValidationErrors = Object.values(validationErrors).some(error => error !== '');
    
        if (hasValidationErrors) {
            setLoading(false);
            return; // Exit function if there are validation errors
        }
    
        try {
            // Send login request to the server
            const apiUrl = config.API_BASE_URL;
            const response = await axios.post(`${apiUrl}/api/login`, formData);
            
            // Extract token and userId from response data
            const { token, userId, isSubscribed} = response.data;
            
            // Store token and userId in local storage
            localStorage.setItem('accessToken', token);
          
    
            // Redirect or perform any action upon successful login
            console.log("Login successful. Token and UserId received:", token, userId, isSubscribed);
           window.location.href = "/"; 
            
            // Send userId from local storage to another backend endpoint
            sendUserIdToServer(userId);
        } catch (error) {
            console.error("Error occurred during login:", error.response ? error.response.data.errorMessage : error.message);
            // Handle error here, e.g., set error state or display a message to the user
        } finally {
            setLoading(false);
        }
    };

    // Function to send userId to the server
    const sendUserIdToServer = (userId) => {
        const apiUrl = config.API_BASE_URL;
        fetch(`${apiUrl}/user/data/id`, { // Replace with your actual endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: userId })
        })
        .then(response => response.json())
        .then(data => {
            console.log('UserId sent to server successfully:', data);
        })
        .catch((error) => {
            console.error('Error sending userId to server:', error);
        });
    };

    return (
        <div className="d-flex justify-content-center align-items-center custom-background vh-100">
  <div className="first-left-accounts d-inline-block p-3 rounded" style={{ maxWidth: '400px', width: '100%' }}>
    <h1>Sign In</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          name="email" 
          placeholder="Enter email" 
          value={formData.email}
          onChange={handleInputChange} 
        />
        {errors.email && <span className="text-danger">{errors.email}</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="password" 
          placeholder="Enter password" 
          value={formData.password}
          onChange={handleInputChange} 
        />
        {errors.password && <span className="text-danger">{errors.password}</span>}
      </div>
      <button type="submit" className="btn btn-success w-100" disabled={loading}>
        {loading ? "Logging in..." : "Log in"}
      </button>
      
      <p>You agree on our terms and conditions</p>
      <Link to="/signup" className="btn btn-default border w-100">Create an Account</Link>
    </form>
  </div>
</div>

    );
};

export default Login;
