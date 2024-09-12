// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';


const JSSNotes= ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'PP1 EXAMS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "notes" },
        { name: 'PP1 EXAMS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "notes" },
        { name: 'PP1 EXAMS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "notes" },
        { name: 'PP1 EXAMS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "notes" }
    ];

    return (
        <>
     
        <ExamsList           
            heading="JUNIOR SCHOOL NOTES"
            items={items}
            navigateTo="/jss/notes/download"
        />
        </>
    );
};

export default JSSNotes
