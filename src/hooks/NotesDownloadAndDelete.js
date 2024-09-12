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

    // Handle delete button click
    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    // Confirm delete action
    const confirmDeleteExam = () => {
        handleDeleteExam(selectedItem.path, itemToDelete.id, selectedItem.value);
    };

    // Group data by grade
    const groupedData = Array.isArray(data)
        ? data.reduce((acc, item) => {
            acc[item.grade] = acc[item.grade] || [];
            acc[item.grade].push(item);
            return acc;
        }, {})
        : {};

    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1030 }}>
                {/* Optional Header */}
            </div>
            <div className="flex-grow-1" style={{ paddingTop: '60px' }}>
                <div className="container-fluid" style={{ paddingRight: '10px' }}>
                    <div className="row">
                        <div className="col-12 col-lg-10 pl-0 pl-lg-5">
                            <h1 className="text-center my-4 py-4">{heading}</h1>
                            <h2 className="text-center my-4" style={{ textDecoration: 'underline' }}>{selectedItem.year}</h2>
                            <div className="list-group mt-4">
                                {Object.keys(groupedData).length > 0 ? (
                                    Object.keys(groupedData).map((grade) => (
                                        <div key={grade}>
                                            <h3 className="my-4">GRADE {grade}</h3>
                                            {groupedData[grade].map((item) => (
                                                <div key={item.id} className="mb-2">
                                                    <a
                                                        href="#"
                                                        className="my-4 custom-font text-decoration-none"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleDownloadExam(selectedItem.path, item.id, selectedItem.value, item.fileName);
                                                        }}
                                                        style={{ fontFamily: 'Copperplate, Copperplate Gothic Light, serif' }}
                                                        title={`Download ${item.fileName}`}
                                                        aria-label={`Download ${item.fileName}`}
                                                    >
                                                       {item.examMS} - {item.year} - {item.subject} - {item.fileExtension}
                                                    </a>
                                                    {isAdmin && (
                                                        <i
                                                            onClick={() => handleDeleteClick(item)}
                                                            className="bi bi-trash text-danger"
                                                            style={{ marginLeft: '10px', cursor: 'pointer' }}
                                                            title="Delete this item"
                                                            aria-label="Delete this item"
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

            {/* Download Error Modal */}
            <Modal 
                show={showModal} 
                handleClose={closeModal} 
                isLoggedIn={isLoggedIn} 
                isSubscribed={isSubscribed}
            >
                {errorMessage}
            </Modal>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <DeleteModal
                    show={showDeleteModal}
                    onClose={closeDeleteModal}
                    handleDeleteExam={confirmDeleteExam}
                    errorMessage={deleteErrorMessage}
                />
            )}
        </div>
    );
};

export default ExamsDownload;
