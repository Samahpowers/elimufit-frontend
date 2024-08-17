import { Link } from "react-router-dom";
import axios from "axios";
import { validationSignup } from "../middlewares/signupValdidations";
import { useState } from "react";
import config from "../config";

const Signup = ({ isAdmin }) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        isAdmin: false
    });

    const [errors, setErrors] = useState({});
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setValues(prev => ({ ...prev, [name]: inputValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validationSignup(values);
        setErrors(formErrors);

        if (Object.values(formErrors).every(error => error === "")) {
            const apiUrl = config.API_BASE_URL;
            axios.post(`${apiUrl}/api/signup`, values)
                .then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                        setRedirectToLogin(true);
                    } else {
                        console.error("Signup failed:", res.statusText);
                    }
                })
                .catch((err) => {
                    console.error("Signup failed:", err.message);
                });
        }
    };

    if (redirectToLogin) {
        window.location.href = "/login";
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white p-3 rounded">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input 
                            onChange={handleInput} 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            placeholder="Enter Email" 
                            value={values.email}
                        />  
                        {errors.email && <span className="text-danger">{errors.email}</span>}                      
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label"><strong>User Name</strong></label>
                        <input 
                            onChange={handleInput} 
                            type="text" 
                            className="form-control"                          
                            name="name" 
                            placeholder="Enter Username" 
                            value={values.name}
                        />    
                        {errors.name && <span className="text-danger">{errors.name}</span>}   
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label"><strong>Phone</strong></label>
                        <input 
                            placeholder="Enter Phone Number"
                            onChange={handleInput} 
                            type="number" 
                            className="form-control" 
                            name="phone" 
                            value={values.phone}
                        />                           
                        {errors.phone && <span className="text-danger">{errors.phone}</span>}                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input 
                            placeholder="Enter Password"
                            onChange={handleInput} 
                            type="password" 
                            className="form-control" 
                            name="password" 
                            value={values.password}
                        />                           
                        {errors.password && <span className="text-danger">{errors.password}</span>}                        
                    </div>

                    {isAdmin && 
                        <div className="mb-3">
                            <label htmlFor="isAdmin" className="form-label"><strong>Are you an admin?</strong></label>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="isAdmin"
                                onChange={handleInput}
                                checked={values.isAdmin}
                            />
                        </div>
                    }

                    <button type="submit" className="btn btn-success w-100">Sign Up</button>
                    
                    <radio>You agree on our terms and conditions</radio>
                    <Link to="/login" className="btn btn-default border w-100">Login</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
