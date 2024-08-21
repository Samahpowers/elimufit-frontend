import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Modal from "../Components/Modal";
import DeleteModal from '../Components/DeleteModal';
import VerticalnavMenu from "../Components/Vertical_nav._menu";
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

    // Ensure data is an array before using reduce
    const groupedData = Array.isArray(data) ? data.reduce((acc, item) => {
        acc[item.grade] = acc[item.grade] || [];
        acc[item.grade].push(item);
        return acc;
    }, {}) : {};

    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1030 }}>
                <Header isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed} />
            </div>
            <div className="flex-grow-1" style={{ paddingTop: '60px' }}>
                <div className="d-none d-lg-block" style={{ position: 'fixed', top: '60px', bottom: 0, left: 0, width: '200px', overflowY: 'auto' }}>
                 
                </div>
                <div className="container-fluid" style={{ paddingRight: '10px' }}>
                    <div className="row">
                        <div className="col-12 col-lg-10 offset-lg-2 pl-0 pl-lg-5">
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
                                                    >
                                                        {item.examMS} - 
                                                        {item.subject} - 
                                                        {item.year} .
                                                        {item.fileExtension}
                                                    </a>
                                                    {isAdmin && (
                                                        <i
                                                            onClick={() => handleDeleteClick(item)}
                                                            className="bi bi-trash"
                                                            style={{ marginLeft: '10px', cursor: 'pointer' }}
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
