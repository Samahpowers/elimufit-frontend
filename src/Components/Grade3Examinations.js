// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';


const Grade3Examinations = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'GRADE 3 EXAMINATIONS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade3/examinations" },
        { name: 'GRADE 3 EXAMINATIONS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade3/examinations" },
        { name: 'GRADE 3 EXAMINATIONS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade3/examinations" },
        { name: 'GRADE 3 EXAMINATIONS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade3/examinations" }
    ];

    return (
        <>
       
        <ExamsList           
            heading="GRADE 3 EXAMINATIONS"
            items={items}
            navigateTo="/grade3/examinations/downloads"
        />
        </>
    );
};

export default Grade3Examinations;
