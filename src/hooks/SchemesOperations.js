import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Modal from "../Components/Modal";
import DeleteModal from '../Components/DeleteModal';
import { useDownloadHandler, useDeleteHandler } from './useResourceOperations';

export const SchemesDownload = ({ isAdmin, isLoggedIn, clearToken, heading, isSubscribed }) => {
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

    // Determine the key to use for grouping
    const groupingKey = data.length > 0 && data[0].form ? 'form' : 'grade';

    // Ensure data is an array before using reduce
    const groupedData = Array.isArray(data) ? data.reduce((acc, item) => {
        acc[item[groupingKey]] = acc[item[groupingKey]] || [];
        acc[item[groupingKey]].push(item);
        return acc;
    }, {}) : {};

    // Log the value of isSubscribed
    console.log('isSubscribed:', isSubscribed);
    console.log('Admin or Not:', isAdmin);

    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1030 }}>
              {/*  <Header isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed} /> */}
            </div>
            <div className="flex-grow-1" style={{ paddingTop: '60px' }}>
                
                <div className="container-fluid" style={{ paddingRight: '10px' }}>
                    <div className="row">
                        <div className="col-12 col-lg-10  pl-0 pl-lg-5">
                            <h1 className="text-center my-4 py-4">{heading}</h1>
                            <h2 className="text-center my-4" style={{ textDecoration: 'underline' }}>{selectedItem.year}</h2>
                            <div className="list-group mt-4">
                                {Object.keys(groupedData).length > 0 ? (
                                    Object.keys(groupedData).map((key) => (
                                        <div key={key}>
                                            <h3 className="my-4">{groupingKey.toUpperCase()} {key}</h3>
                                            {groupedData[key].map((item) => (
                                                <div key={item.id} style={{ margin: '0px 0' }}>
                                                    <div
                                                        
                                                        className="my-2 custom-font t"
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
                                                        style={{ fontFamily: 'Copperplate, Copperplate Gothic Light, serif' }}
                                                    >
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
                                                            style={{ marginLeft: '10px' }}  // Adjust the margin-left value as needed
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

export default SchemesDownload;
