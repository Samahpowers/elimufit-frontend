// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';


const JSSSchemes = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'JUNIOR SCHOOL SCHEMES 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "schemes" },
        { name: 'JUNIOR SCHOOL SCHEMES 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "schemes" },
        { name: 'JUNIOR SCHOOL SCHEMES 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "schemes" },
        { name: 'JUNIOR SCHOOL SCHEMES 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "schemes" }
    ];

    return (
        <>

        <ExamsList           
            heading="JUNIOR SCHOOL SCHEMES"
            items={items}
            navigateTo="/jss/schemes/downloads"
        />
        </>
    );
};

export default JSSSchemes;
