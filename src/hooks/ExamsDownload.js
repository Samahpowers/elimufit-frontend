import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from "../Components/Modal";
import DeleteModal from '../Components/DeleteModal';
import { useDownloadHandler, useDeleteHandler } from './useResourceOperations';

const ExamsDownload = ({ isAdmin, isLoggedIn, clearToken, heading, isSubscribed }) => {
    const location = useLocation();
    const data = location.state?.data || [];
    const selectedItem = location.state?.selectedItem || {};

    const { handleDownloadExam, showModal, errorMessage, closeModal } = useDownloadHandler();
    const { handleDeleteExam, showDeleteModal, setShowDeleteModal, errorMessage: deleteErrorMessage, closeDeleteModal } = useDeleteHandler();

    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    const confirmDeleteExam = () => {
        handleDeleteExam(selectedItem.path, itemToDelete.id, selectedItem.value);
    };

    const groupedData = Array.isArray(data) ? data.reduce((acc, item) => {
        acc[item.set] = acc[item.set] || [];
        acc[item.set].push(item);
        return acc;
    }, {}) : {};

    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1030 }}>
                {/* Top content if needed */}
            </div>
            <div className="flex-grow-1" style={{ paddingTop: '60px' }}>
                <div className="container-fluid" style={{ paddingRight: '10px' }}>
                    <div className="row">
                        <div className="col-12 col-lg-10 pl-0 pl-lg-5">
                            <h1 className="text-center my-4 py-4">{heading}</h1>
                            <h2 className="text-center my-4" style={{ textDecoration: 'underline' }}>{selectedItem.year}</h2>
                            <div className="list-group mt-4">
                                {Object.keys(groupedData).length > 0 ? (
                                    Object.keys(groupedData).map((set) => (
                                        <div key={set}>
                                            {set && (<h3 className="my-4">SET {set}</h3>)}
                                            {groupedData[set].map((item) => (
                                                <div key={item.id} className="mb-2">
                                                    <div                                                       
                                                        
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            // Pass the actual fileName parameter to handleDownloadExam
                                                            handleDownloadExam(
                                                                selectedItem.path, 
                                                                item.id, 
                                                                selectedItem.value, 
                                                                item.fileName
                                                            );
                                                        }}
                                                        
                                                    >
                                                       {item.examMS && (
                                                        <p className='fw-bold mb-2' style={{ margin: 0,  }}>
                                                            {item.examMS}
                                                        </p>
                                                    )}
                                                    {item.fileName && (
                                                        <p 
                                                            className="cursor-pointer text-primary custom-font" 
                                                            style={{ 
                                                                cursor: 'pointer', 
                                                                textDecoration: "underline", 
                                                                margin: 0, // Remove margin to eliminate the gap
                                                                fontFamily: 'Copperplate, Copperplate Gothic Light, serif'
                                                            }}
                                                        >
                                                            {item.fileName}
                                                        </p>
                                                    )}

                                                       
                                                    </div>
                                                    {isAdmin && (
                                                        <i
                                                            onClick={() => handleDeleteClick(item)}
                                                            className="bi bi-trash"
                                                            style={{ marginLeft: '10px', cursor: 'pointer' }}
                                                            aria-label="Delete item"
                                                        ></i>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                ) : (
                                    <pre>No data received</pre>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} handleClose={closeModal} isLoggedIn={isLoggedIn} isSubscribed={isSubscribed}>
                {errorMessage}
            </Modal>

            {showDeleteModal && (
                <DeleteModal
                    show={showDeleteModal}
                    onClose={closeDeleteModal}
                    handleDeleteExam={confirmDeleteExam}
                />
            )}
        </div>
    );
};

export default ExamsDownload;
