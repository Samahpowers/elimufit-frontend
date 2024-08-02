// src/components/PP2Exams.js
import React from 'react';
import Header from './Header';
import ExamsList from './ExamsListPerYear';

const PrimaryHolidayAssignments = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: '2024 PRIMARY HOLIDAY ASSIGNMENTS', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "holiday/assignments" },
        { name: '2023 PRIMARY HOLIDAY ASSIGNMENTS', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "holiday/assignments" },
        { name: '2022 PRIMARY HOLIDAY ASSIGNMENTS', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "holiday/assignments" },
        { name: '2021 PRIMARY HOLIDAY ASSIGNMENTS', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "holiday/assignments" }
    ];

    return (
       <>
       <Header
        isLoggedIn={isLoggedIn}
        clearToken={clearToken}/>
        <ExamsList
           
            heading="PRIMARY HOLIDAY ASSIGNMENTS"
            items={items}
            navigateTo="/primary/holiday/assignments/downloads"
        />
       </>
    );
};

export default PrimaryHolidayAssignments;
