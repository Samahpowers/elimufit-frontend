// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';


const SecondarySchemes = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'SECONDARY SCHEMES 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "schemes" },
        { name: 'SECONDARY SCHEMES 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "schemes" },
        { name: 'SECONDARY SCHEMES 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "schemes" },
        { name: 'SECONDARY SCHEMES 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "schemes" }
    ];

    return (
        <>
        
        <ExamsList           
            heading="SECONDARY SCHEMES"
            items={items}
            navigateTo="/secondary/schemes/downloads"
        />
        </>
    );
};

export default SecondarySchemes;
