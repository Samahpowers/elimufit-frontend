// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';
import Header from './Header';

const JSSFullSetExaminations = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'JUNIOR SCHOOL EXAMINATIONS 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "fullset/examinations" },
        { name: 'JUNIOR SCHOOL EXAMINATIONS 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "fullset/examinations" },
        { name: 'JUNIOR SCHOOL EXAMINATIONS 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "fullset/examinations" },
        { name: 'JUNIOR SCHOOL EXAMINATIONS 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "fullset/examinations" }//value creates part of backend url
    ];

    return (
        <>
        <Header
         isLoggedIn={isLoggedIn}
         clearToken={clearToken}/>
        <ExamsList           
            heading="JUNIOR SCHOOL FULL SET EXAMINATIONS"
            items={items}
            navigateTo="/jss/fullset/examinations/download"
        />
        </>
    );
};

export default JSSFullSetExaminations;
