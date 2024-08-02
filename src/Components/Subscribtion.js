import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Subscribe = ({ userId }) => {
    const [formData, setFormData] = useState({
        amount: "",
        phone: "",
        userId: userId || "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });
    const navigate = useNavigate();

    useEffect(() => {
        setFormData((prevData) => ({ ...prevData, userId }));
    }, [userId]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: "", text: "" });

        try {
            const response = await axios.post("http://localhost:8000/api/mpesa/stk/push", formData);
            if (response.data.CustomerMessage) {
                setMessage({ type: "success", text: response.data.CustomerMessage });
                // Redirect to home after a short delay
                setTimeout(() => {
                    navigate("/");
                }, 3000); // Adjust the delay as needed
            } else {
                setMessage({ type: "error", text: "Unexpected response. Please try again." });
            }
        } catch (err) {
            if (err.response) {
                setMessage({
                    type: "error",
                    text: `Error: ${err.response.data.message || "Failed to process the subscription."}`,
                });
            } else {
                setMessage({ type: "error", text: `Request error: ${err.message}` });
            }
        } finally {
            setLoading(false);
            setFormData({ amount: "", phone: "", userId });
            setTimeout(() => setMessage({ type: "", text: "" }), 5000);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h5>Subscribe to access all resources</h5>
                        </div>
                        <div className="card-body">
                            {message.text && (
                                <div className={`alert alert-${message.type === "error" ? "danger" : "success"}`}>
                                    {message.text}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">Amount:</label>
                                    <input
                                        type="number"
                                        id="amount"
                                        className="form-control"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone:</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        pattern="^\d{10}$"
                                        required
                                    />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="userId" className="form-label">User ID:</label>
                                    <input
                                        type="text"
                                        id="userId"
                                        className="form-control"
                                        value={formData.userId}
                                        readOnly
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                    {loading ? "Processing..." : "Submit"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
