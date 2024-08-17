import React from 'react';

const ToggleBox = ({ onClick }) => {
    const toggleClick = (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('active');
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <a href="#" className="toggle-Box d-block d-sm-none" onClick={toggleClick}>
            <span className="icon-container">
                <span className="middle"></span>
            </span>
        </a>
    );
};

export default ToggleBox;
