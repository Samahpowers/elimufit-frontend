// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';


const PP2Exams = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'PP1 EXAMS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "pp1/exams" },
        { name: 'PP1 EXAMS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "pp1/exams" },
        { name: 'PP1 EXAMS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "pp1/exams" },
        { name: 'PP1 EXAMS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "pp1/exams" }
    ];

    return (
        <>
       
        <ExamsList           
            heading="PP1 SECTION"
            items={items}
            navigateTo="/pp1/exams/download"
        />
        </>
    );
};

export default PP2Exams;
