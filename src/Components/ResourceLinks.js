import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { prePrimaryItems, primaryItems, schoolTittles, secondaryItems, jssItems } from "./schoolItems.js";
import config from "../config.js";
import Modal from "./Modal";
import Header from "./Header.js";

const ResourceLinks = ({ isAdmin, userId, isLoggedIn, clearToken }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isListHidden, setIsListHidden] = useState(false);
    const [titleVisible, setTitleVisible] = useState(true);

    console.log(data)
    const fetchData = async (path, value) => {
        try {
            const apiUrl = config.API_BASE_URL;
            const res = await axios.get(`${apiUrl}/${path}/${value}`);
            setData(res.data);
        } catch (err) {
            setError("Could not fetch data");
        }
    };

    useEffect(() => {
        if (selectedItem) {
            fetchData(selectedItem.path, selectedItem.value);
        }
    }, [selectedItem]);

    const handleClick = (items, value) => {
        switch (value) {
            case "/primary/schemes":          
            case "/primary/revision/notes":          
            case "/primary/curriculum/designs":          
            case "/primary/assessment/tools":          
            case "/grade1/examinations":          
            case "/grade2/examinations":          
            case "/grade3/examinations":          
            case "/grade4/examinations":          
            case "/grade5/examinations":          
            case "/grade6/examinations":                      
            case "/grade7/examinations":           
            case "/grade8/examinations":           
            case "/play/group/exams":
            case "/pp1/exams":            
            case "/pp2/exams":                          
            case "/secondary/schemes":            
            case "/secondary/fullset/examinations":            
            case "/secondary/notes":            
            case "/kcse/trial/examinations":            
            case "/kcse/past/papers":            
            case "/secondary/holiday/revision":            
            case "/jss/assessment/tools":            
            case "/jss/curriculum/designs":            
            case "/jss/fullset/examinations":            
            case "/jss/holiday/assignments":            
            case "/jss/revision/notes":            
            case "/jss/schemes":            
            case "/pre/primary/schemes":            
            case "/pre/primary/curriculum/designs":            
            case "/pre/primary/holiday/assignments":            
            case "/primary/holiday/assignments":            
                window.location.href = value;
                return;
            default:
                const selectedItem = items.find(item => item.value === value);
                if (selectedItem) {
                    setSelectedItem(selectedItem);
                    
                }
                break;
        }
    };   

  

    const renderListItems = (items, isDark) => (
        items.map((item, index) => (
            <li key={index} className={`list-group-item border-0 cursor-pointer ${isDark ? 'text-white' : 'text-black'}`} style={{ backgroundColor: 'transparent' }}>
                <a href="#" className={isDark ? 'text-white' : 'text-black'} onClick={() => handleClick(items, item.value)} style={{ width: 'fit-content' }}>
                    {item.label}
                </a>
                <div className='pt-2 d-none' style={{ cursor: 'pointer' }} >
                    <i className="fas fa-trash height-auto"></i>
                </div>
            </li>
        ))
    );

    return (
        <>
       <header className="container-fluid d-flex p-3 bg-success" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
              
                
              <div className="flex-grow-1 d-flex justify-content-center">
                  {!isLoggedIn && (
                      <Link to="/login" className="text-white border px-4 py-2 text-decoration-none rounded d-inline-block">Login / Renew Access</Link>
                  )}
              </div>
              
              <div>
                  {/* {userId} {/*To set user profile later */ }
              </div>
              
              <div>
                  {isLoggedIn && (
                      <button className="btn btn-outline-primary bg-dark btn-sm ml-3" onClick={clearToken} style={{ whiteSpace: 'nowrap' }}>Log Out</button>
                  )}
              </div>
             
          </header>
        
        
        <div className="container-fluid bg-dark text-white">
            <section className="py-4">
                

                { (
                    <>
                        <header className="h4 text-white">{schoolTittles.prePrimary}</header>
                        <ul className={`list-group pt-4 pb-4 bg-transparent border-0 ${isListHidden ? 'd-none' : ''}`}>
                            {renderListItems(prePrimaryItems, true)}
                        </ul>

                        <div className="bg-custom text-black">
                            <header className="h4 text-black">{schoolTittles.primary}</header>
                            <ul className={`list-group pt-4 pb-4 px-0 mx-0 border-0 ${isListHidden ? 'd-none' : ''}`}>
                                {renderListItems(primaryItems, false)}
                            </ul>
                        </div>


                        <header className="h4 text-white">{schoolTittles.jss}</header>
                        <ul className={`list-group pt-4 pb-4 px-0 mx-0 bg-dark border-0 ${isListHidden ? 'd-none' : ''}`}>
                            {renderListItems(jssItems, true)}
                        </ul>

                        <div className="bg-custom text-black">
                            <header className="h4 text-black">{schoolTittles.secondary}</header>
                            <ul className={`list-group pt-4 pb-4 bg-transparent border-0 ${isListHidden ? 'd-none' : ''}`}>
                                {renderListItems(secondaryItems, false)}
                            </ul>
                        </div>
                    </>
                )}

                
            </section>

            
        </div>
        </>
    );
};

export default ResourceLinks;
