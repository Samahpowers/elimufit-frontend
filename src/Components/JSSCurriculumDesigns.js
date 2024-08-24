// src/components/PP2Exams.js
import React from 'react';
import ExamsList from './ExamsListPerYear';


const JSSCurriculumDesigns = ({ isLoggedIn, clearToken }) => {
    const items = [
        { name: 'JUNIOR SCHOOL CURRICULUM DESIGN 2024 ', year: 2024, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "curriculum/designs" },
        { name: 'JUNIOR SCHOOL CURRICULUM DESIGN 2023 ', year: 2023, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "curriculum/designs" },
        { name: 'JUNIOR SCHOOL CURRICULUM DESIGN 2022 ', year: 2022, bgColor: 'rgba(0, 0, 0, 0.2)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "curriculum/designs" },
        { name: 'JUNIOR SCHOOL CURRICULUM DESIGN 2021 ', year: 2021, bgColor: 'rgba(0, 0, 0, 0.1)', textColor: 'rgb(0, 0, 0)', path: "jss", value: "curriculum/designs" }
    ];

    return (
        <>
     
        <ExamsList           
            heading="JUNIOR SCHOOL CURRICULUM DESIGN"
            items={items}
            navigateTo="/jss/curriculum/designs/download"
        />
        </>
    );
};

export default JSSCurriculumDesigns;
