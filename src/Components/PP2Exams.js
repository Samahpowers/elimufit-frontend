// src/components/PP2Exams.js
import React from 'react';
import Header from './Header';
import ExamsList from './ExamsListPerYear';

const PP2Exams = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'PP2 EXAMS 2024 EXAMS', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "pp2/exams" },
        { name: 'PP2 EXAMS 2023 EXAMS', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "pp2/exams" },
        { name: 'PP2 EXAMS 2022 EXAMS', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "pp2/exams" },
        { name: 'PP2 EXAMS 2021 EXAMS', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "pp2/exams" }
    ];

    return (
       <>
       <Header
        isLoggedIn={isLoggedIn}
        clearToken={clearToken}/>
        <ExamsList
           
            heading="PP2 EXAMS"
            items={items}
            navigateTo="/pp2/exams/download"
        />
       </>
    );
};

export default PP2Exams;
