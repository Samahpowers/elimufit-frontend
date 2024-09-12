import React from 'react';
import Card from './Card';


const SecondContent = () => {
    return (
        <div className="container-fluid " style={{ backgroundColor: 'white' }}>
            <div className="mx-auto py-2 d-none d-md-block" style={{ maxWidth: '1200px', width: '90%' }}>
                <div>
                    <h1 className="text-center">ElimuFiti Learning Solutions</h1>
                    <p className="text-center">Empowering education and career growth, together, for a brighter future and limitless possibilities</p>
                </div>

                <div className="animated-container">
                    <div className="animated-content">
                        {/* Original content */}
                        <div className="card-wrapper">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col d-flex justify-content-center align-items-center">
                                    <Card 
                                        title="School Resources" 
                                        text="We update resources continuously" 
                                       
                                    />
                                </div>
                                <div className="col d-flex justify-content-center align-items-center">
                                    <Card 
                                        title="Job Opportunities" 
                                        text="Meet with wide range of employers." 
                                       
                                    />
                                </div>
                                <div className="col d-flex justify-content-center align-items-center">
                                    <Card 
                                        title="Hiring" 
                                        text="We provide a dynamic human resource" 
                                      
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Duplicate content */}
                        <div className="card-wrapper">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col d-flex justify-content-center align-items-center">
                                    <Card 
                                        title="School Resources" 
                                        text="We update resources continuously" 
                                       
                                    />
                                </div>
                                <div className="col d-flex justify-content-center align-items-center">
                                    <Card 
                                        title="Job Opportunities" 
                                        text="Explore Exciting Job Opportunities." 
                                       
                                    />
                                </div>
                                <div className="col d-flex justify-content-center align-items-center">
                                    <Card 
                                        title="Hiring" 
                                        text="We provide a dynamic human resource" 
                                      
                                    />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondContent;
