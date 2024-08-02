// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';
import Header from './Header';

const Grade1Examinations = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'GRADE 1 EXAMINATIONS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: '#FFFFFF', path: "primary", value: "grade1/examinations" },
        { name: 'GRADE 1 EXAMINATIONS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade1/examinations" },
        { name: 'GRADE 1 EXAMINATIONS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: '#FFFFFF', path: "primary", value: "grade1/examinations" },
        { name: 'GRADE 1 EXAMINATIONS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade1/examinations" }
    ];

    return (
        <>
        <Header
         isLoggedIn={isLoggedIn}
         clearToken={clearToken}/>
        <ExamsList           
            heading="GRADE 1 EXAMINATIONS"
            items={items}
            navigateTo="/grade1/examinations/downloads"
        />
        </>
    );
};

export default Grade1Examinations;
