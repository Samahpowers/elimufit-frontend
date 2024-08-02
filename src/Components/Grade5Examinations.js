// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';
import Header from './Header';

const Grade5Examinations = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'GRADE 5 EXAMINATIONS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade5/examinations" },
        { name: 'GRADE 5 EXAMINATIONS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade5/examinations" },
        { name: 'GRADE 5 EXAMINATIONS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade5/examinations" },
        { name: 'GRADE 5 EXAMINATIONS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade5/examinations" }
    ];

    return (
        <>
        <Header
         isLoggedIn={isLoggedIn}
         clearToken={clearToken}/>
        <ExamsList           
            heading="GRADE 5 EXAMINATIONS"
            items={items}
            navigateTo="/grade5/examinations/downloads"
        />
        </>
    );
};

export default Grade5Examinations;
