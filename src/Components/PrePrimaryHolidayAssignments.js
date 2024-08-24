// src/components/PrePrimaryHolidayRevision.js
import React from 'react';
import ExamsList from './ExamsListPerYear';


const PrePrimaryHolidayAssignments = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'PRE PRIMARY HOLIDAY ASSIGNMENTS 2024', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "holiday/assignments" },
        { name: 'PRE PRIMARY HOLIDAY ASSIGNMENTS 2023', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "holiday/assignments" },
        { name: 'PRE PRIMARY HOLIDAY ASSIGNMENTS 2022', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "holiday/assignments" },
        { name: 'PRE PRIMARY HOLIDAY ASSIGNMENTS 2021', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "pre/primary", value: "holiday/assignments" }
    ];

    return (
        <>
            
            <ExamsList
                heading="PRE PRIMARY HOLIDAY ASSIGNMENTS SECTION"
                items={items}
                navigateTo="/pre/primary/holiday/assignments/download"
            />
        </>
    );
};

export default PrePrimaryHolidayAssignments;
