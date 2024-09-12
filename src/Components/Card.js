import React from 'react';

const Card = ({ title, text, link, linkText }) => {
    return (
        <div>
        <div className="card border-0" style={{ backgroundColor: 'transparent' }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
      
    );
};

export default Card;
