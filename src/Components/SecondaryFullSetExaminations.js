// src/components/PP2Exams.js
import React from 'react';
import Header from './Header';
import ExamsList from './ExamsListPerYear';

const SecondaryFullSetExaminations = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: '2024 SECONDARY FULL SET EXAMINATIONS', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor:'rgb(0, 0, 0)', path: "secondary", value: "fullset/examinations" },
        { name: '2023 SECONDARY FULL SET EXAMINATIONS', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "fullset/examinations" },
        { name: '2022 SECONDARY FULL SET EXAMINATIONS', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "fullset/examinations" },
        { name: '2021 SECONDARY FULL SET EXAMINATIONS', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "secondary", value: "fullset/examinations" }
    ];

    return (
       <>
       <Header
        isLoggedIn={isLoggedIn}
        clearToken={clearToken}/>
        <ExamsList
           
            heading="SECONDARY SCHOOL FULL SET EXAMINATIONS SECTION"
            items={items}
            navigateTo="/secondary/fullset/examinations/download"
        />
       </>
    );
};

export default SecondaryFullSetExaminations;
