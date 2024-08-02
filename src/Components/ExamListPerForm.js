import React, { useState, useEffect, useCallback } from 'react';
import VerticalnavMenu from './Vertical_nav._menu';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExamsList = ({ heading, items, navigateTo }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchData = useCallback(async (path, value, form) => {
        try {
            setLoading(true);
            setError(null);
            const apiUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";
            const url = `${apiUrl}/${path}/${value}/form/${form}`;
            const res = await axios.get(url);
            navigate(navigateTo, { state: { data: res.data, selectedItem: { path, value, form } } });
        } catch (error) {
            setError("Error fetching data, please try again later.");
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, [navigate, navigateTo]);

    useEffect(() => {
        if (selectedItem) {
            fetchData(selectedItem.path, selectedItem.value, selectedItem.form);
        }
    }, [selectedItem, fetchData]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="bg-opacity p-4" style={{ position: 'relative' }}>
            <div style={{ paddingTop: '60px' }}>
                <div className="d-none d-lg-block" style={{ position: 'fixed', top: '60px', bottom: 0, left: 0, width: '200px', overflowY: 'auto' }}>
                    <VerticalnavMenu />
                </div>
                <div className="container-fluid" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-2">
                            <h1 className="text-center my-4 py-4">{heading}</h1>
                            {error && <div className="alert alert-danger">{error}</div>}
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <div className="list-group">
                                    {items.map((item, index) => (
                                        <div key={index} className="list-group-item" style={{
                                            marginBottom: '20px',
                                            backgroundColor: item.bgColor,
                                            border: 'none',
                                            fontSize: "24px",
                                            borderRadius: "none"
                                        }} onClick={() => handleItemClick(item)}>
                                            <div style={{
                                                display: 'inline-block',
                                                color: item.textColor || '#000000',
                                                textDecoration: 'underline',
                                                paddingTop: '20px',
                                                paddingBottom: '20px',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                                cursor: 'pointer',
                                                borderRadius: "none"
                                            }}>
                                                {item.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default ExamsList;
