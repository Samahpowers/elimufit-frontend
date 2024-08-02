// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';
import Header from './Header';

const KCSEpastPapers = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'KCSE PAST PAPERS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "kcse/past/papers" },
        { name: 'KCSE PAST PAPERS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "kcse/past/papers" },
        { name: 'KCSE PAST PAPERS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "kcse/past/papers" },
        { name: 'KCSE PAST PAPERS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "kcse/past/papers" }
    ];

    return (
        <>
        <Header
         isLoggedIn={isLoggedIn}
         clearToken={clearToken}/>
        <ExamsList           
            heading="KNEC/KCSE PAST PAPERS"
            items={items}
            navigateTo="/kcse/past/papers/downloads"
        />
        </>
    );
};

export default KCSEpastPapers;
