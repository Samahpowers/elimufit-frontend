import React, { useState, useEffect, useCallback } from 'react';
import VerticalnavMenu from './Vertical_nav._menu';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlayGroup = ({ isLoggedIn, clearToken }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();

    const fetchData = useCallback(async (path, value, year) => {
        try {
            const url = `http://localhost:8000/${path}/${value}/${year}`;
            const res = await axios.get(url);
            navigate("/play/group/exams/download", { state: { data: res.data, selectedItem: { path, value, year } } });
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error, display message to user, etc.
        }
    }, [navigate]);

    useEffect(() => {
        if (selectedItem) {
            fetchData(selectedItem.path, selectedItem.value, selectedItem.year);
        }
    }, [selectedItem, fetchData]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1030 }}>
                <Header isLoggedIn={isLoggedIn} clearToken={clearToken} />
            </div>
            <div style={{ paddingTop: '60px' }}>
                <div className="d-none d-lg-block" style={{ position: 'fixed', top: '60px', bottom: 0, left: 0, width: '200px', overflowY: 'auto' }}>
                    <VerticalnavMenu />
                </div>
                <div className="container-fluid" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-2">
                            <h1 className="text-center my-4 py-4">PLAY GROUP</h1>
                            <div className="list-group">
                                <ListItems handleItemClick={handleItemClick} />
                            </div>
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

const ListItems = ({ handleItemClick }) => {
    const items = [
        { name: 'PLAY GROUP 2024 EXAMS', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "play/group/exams" },
        { name: 'PLAY GROUP 2023 EXAMS', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "play/group/exams" },
        { name: 'PLAY GROUP 2022 EXAMS', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "play/group/exams" },
        { name: 'PLAY GROUP 2021 EXAMS', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "play/group/exams" }
    ];

    return items.map((item, index) => (
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
    ));
};

export default PlayGroup;
