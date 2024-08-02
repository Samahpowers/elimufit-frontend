// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';
import Header from './Header';

const PrimaryAssessmentTools = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'PRIMARY ASSESSMENT TOOLS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgba(0, 0, 0)', path: "primary", value: "assessment/tools" },
        { name: 'PRIMARY ASSESSMENT TOOLS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgba(0, 0, 0)', path: "primary", value: "assessment/tools" },
        { name: 'PRIMARY ASSESSMENT TOOLS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgba(0, 0, 0)', path: "primary", value: "assessment/tools" },
        { name: 'PRIMARY ASSESSMENT TOOLS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgba(0, 0, 0)', path: "primary", value: "assessment/tools" }
    ];

    return (
        <>
        <Header
         isLoggedIn={isLoggedIn}
         clearToken={clearToken}/>
        <ExamsList           
            heading="PRIMARY ASSESSMENT TOOLS"
            items={items}
            navigateTo="/primary/assessment/tools/download"
        />
        </>
    );
};

export default PrimaryAssessmentTools;
