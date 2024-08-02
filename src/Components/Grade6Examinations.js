// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';
import Header from './Header';

const Grade6Examinations = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'GRADE 6 EXAMINATIONS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade6/examinations" },
        { name: 'GRADE 6 EXAMINATIONS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade6/examinations" },
        { name: 'GRADE 6 EXAMINATIONS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade6/examinations" },
        { name: 'GRADE 6 EXAMINATIONS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "primary", value: "grade6/examinations" }
    ];

    return (
        <>
        <Header
         isLoggedIn={isLoggedIn}
         clearToken={clearToken}/>
        <ExamsList           
            heading="GRADE 6 EXAMINATIONS"
            items={items}
            navigateTo="/grade6/examinations/downloads"
        />
        </>
    );
};

export default Grade6Examinations;
