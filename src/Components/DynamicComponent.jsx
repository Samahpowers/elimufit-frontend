import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
const DynamicComponent = ({ selectedItem, data, error, handleDownloadExam, handleDelete, isAdmin, isLoggedIn, isSubscribed }) => {
    
    return (
        <div>
            
                <div className="mb-5 bg-rgba(255, 255, 255, 0.5)">
                    <h4 className="text-black mt-0">{selectedItem.label}</h4>
                    {error && <p>{error}</p>}
                    <ul className="list-group bg-light mb-6">
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="list-group-item bg-transparent text-decoration-none fw-bold border-0 font-size-12">
                                    {item.category}
                                </div>
                                <li className="d-flex list-group-item bg-transparent border-0 cursor-pointer text-primary" style={{ cursor: 'pointer', width: 'fit-content' }}>
                                <a 
                                href="#" 
                                className="text-decoration-underline" 
                                onClick={() => handleDownloadExam(selectedItem.path, item.id, selectedItem.value, item.fileName)}
                            >
                                <div className="d-flex">
                                    <p className="width-14px py-2 custom-capitalization" style={{ paddingRight: '20px' }}>
                                        {item.year && ` ${item.year} `}
                                        {item.examMS && `[${item.examMS}] `}
                                        {item.term && `Term ${item.term} `}
                                        {item.grade && `Grade ${item.grade} `}
                                        {item.subject && `${item.subject}`}
                                        {item.fileExtension && `.${item.fileExtension} `}
                                    </p>
                                </div>
                                </a>

                                    {isAdmin &&
                                        <div className='pt-2'>
                                            <i className="fas fa-trash height-auto" onClick={() => handleDelete(selectedItem.path, item.id, selectedItem.value)}></i>
                                        </div>
                                    }
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>       
            
        </div>
    );
};

export default DynamicComponent;
