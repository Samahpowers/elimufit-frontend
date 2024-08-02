// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';
import Header from './Header';

const SecondaryNotes = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'SECONDARY NOTES 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "notes" },
        { name: 'SECONDARY NOTES 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "notes" },
        { name: 'SECONDARY NOTES 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "notes" },
        { name: 'SECONDARY NOTES 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "notes" }
    ];

    return (
        <>
        <Header
         isLoggedIn={isLoggedIn}
         clearToken={clearToken}/>
        <ExamsList           
            heading="SECONDARY SECTION"
            items={items}
            navigateTo="/secondary/notes/downloads"
        />
        </>
    );
};

export default SecondaryNotes;
