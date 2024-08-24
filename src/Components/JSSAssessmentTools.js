// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';


const JSSAssessmentTools = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'JUNIOR ASSESSMENT TOOLS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "assessment/tools" },//the value corresponds to the download navigations
        { name: 'JUNIOR ASSESSMENT TOOLS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "assessment/tools" },
        { name: 'JUNIOR ASSESSMENT TOOLS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "assessment/tools" },
        { name: 'JUNIOR ASSESSMENT TOOLS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "assessment/tools" }
    ];

    return (
        <>
       
        <ExamsList           
            heading="JUNIOR SCHOOL FULL SET EXAMINATIONS"
            items={items}
            navigateTo="/jss/assessment/tools/download"
        />
        </>
    );
};

export default JSSAssessmentTools;
