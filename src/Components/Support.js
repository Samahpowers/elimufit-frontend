import React, { useState } from 'react';
import axios from 'axios';
import { prePrimaryItems, primaryItems, jssItems, secondaryItems } from './schoolItems.js';
import config from '../config.js';
const categoryTableMap = {
    "create/schemes": "schemes",
    "create/notes": "notes",
    "create/curriculum/designs": "curriculum_designs",
    "create/grade7/examinations": "grade7_examinations",
    "create/grade8/examinations": "grade8_examinations",
    "create/fullset/examinations": "fullset_examinations",
    "create/kcse/past/papers": "ksce_past_papers",
    "create/kcse/trial/examinations": "kcse_trial_examinations",
    "create/revision/notes": "revision_notes",            
    "create/play/group/exams": "playgroup_exams",
    "create/pp1/exams": "pp1_exams",
    "create/pp2/exams": "pp2_exams",
    "create/grade1/exam": "grade1_exams",
    "create/grade2/exam": "grade2_exams",
    "create/grade3/exam": "grade3_exams",
    "create/grade4/exam": "grade4_exams",
    "create/grade5/exam": "grade5_exams",
    "create/grade6/exam": "grade6_exams",
    "create/holiday/revision": "holiday_revisions",
    "create/assessment/tools": "assessment_tools",
    "create/holiday/assignments": "holiday_assignments"
};

const Support = () => {
    const [values, setValues] = useState({
        form: "",
        examMS: "",
        term: "",
        subject: "",
        year: "",
        set: "",
        grade: "",
        file: null
    });
    const [path, setPath] = useState("");
    const [schema, setSchema] = useState("");
    const [table, setTable] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [items, setItems] = useState(null);
    const allowedExtensions = ['.docx', '.pdf', '.txt'];

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const fileName = file.name;
        const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            console.error("Invalid file extension.");
            return;
        }
        setValues(prev => ({ ...prev, file }));
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        const tableName = categoryTableMap[selectedCategory] || "";
        setTable(tableName);
    };

    const handleClick = (e) => {
        const path = e.target.getAttribute("name");
        const schemaPath = e.target.getAttribute("schema");
        setSchema(schemaPath);
        setPath(path);
        setShowForm(true);

        const itemsMap = {
            "pre/primary": prePrimaryItems,
            "primary": primaryItems,
            "jss": jssItems,
            "secondary": secondaryItems
        };
        setItems(itemsMap[path] || null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]));
        formData.append('schema', schema);
        formData.append('table', table);
        formData.append('category', category);

        try {
            const apiUrl = config.API_BASE_URL;
            console.log(`Submitting to: ${apiUrl}/${path}/${category}`);
            const response = await axios.post(`${apiUrl}/${path}/${category}`, formData);
            setSuccessMessage(response.data.message);
            setValues({
                form: "",
                examMS: "",
                term: "",
                subject: "",
                year: "",
                set: "",
                grade: "",
                file: null
            });
            setTimeout(() => setSuccessMessage(""), 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage("An error occurred while submitting the form. Please try again later.");
            setTimeout(() => setErrorMessage(""), 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="row bgs " >
               {/* Second ul with p tag "CREATE RESOURCES" */}
               <ul className="row list-group-flush py-3 bg-success text-white">
    <li className="col-12 col-md-auto list-group-item text-center">
        <p className="text-info m-0">CREATE RESOURCES</p>
    </li>
    <li 
        name="pre/primary" 
        schema="preprimary" 
        className="col-6 col-md list-group-item text-center" 
        style={{ cursor: 'pointer' }} 
        onClick={handleClick}
    >
        Pre Primary
    </li>
    <li 
        name="primary" 
        schema="primaryschool" 
        className="col-6 col-md list-group-item text-center" 
        style={{ cursor: 'pointer' }} 
        onClick={handleClick}
    >
        Primary
    </li>
    <li 
        name="jss" 
        schema="jss" 
        className="col-6 col-md list-group-item text-center" 
        style={{ cursor: 'pointer' }} 
        onClick={handleClick}
    >
        JSS
    </li>
    <li 
        name="secondary" 
        schema="secondary" 
        className="col-6 col-md list-group-item text-center" 
        style={{ cursor: 'pointer' }} 
        onClick={handleClick}
    >
        Secondary
    </li>
</ul>

            <div className="d-flex justify-content-center">
                <h4>{path && <h4>{path}</h4>}</h4>
            </div>
            <div className='row'>
                <div>
                    {loading && <div className='loader'></div>}
                </div>
                <div className={`${showForm ? "d-flex justify-content-center" : "d-none"} `}>
                    <select
                        className='custom-select width-fit-content px-5 rounded bg-primary text-white'
                        id="categoryDropdown"
                        name="category"
                        onChange={handleCategoryChange}
                        value={category}
                    >
                        <option  value=""> Select Category</option>
                        {Object.keys(categoryTableMap).map(key => (
    <option key={key} value={key}>
        {categoryTableMap[key]
            .replace(/_/g, ' ') // Replace underscores with spaces
            .toLowerCase() // Convert the entire string to lowercase
            .replace(/\b\w/g, char => char.toUpperCase()) // Capitalize the first letter of each word
        }
    </option>
))}


                    </select>
                </div>
                <div className={`d-flex justify-content-center vh-100 position-relative ${showForm ? "" : "d-none"}`}>
                    <form onSubmit={handleSubmit} className='bg-white'>
                        {["examMS", "set", "grade", "form", "term", "year", "subject"].map((field, index) => (
                            <div key={index}>
                                <label htmlFor={field} className="form-label ms-1"><strong>{field.charAt(0).toUpperCase() + field.slice(1)}</strong></label>
                                {field === "examMS" ? (
                                    <select
                                        className="form-select py-0"
                                        name={field}
                                        value={values[field]}
                                        onChange={handleInput}
                                    >
                                        <option value="">Select Option</option>
                                        <option value="Exam">Exam</option>
                                        <option value="Marking Scheme">Marking Scheme</option>
                                    </select>
                                ) : (
                                    <input
                                        type="text"
                                        className="form-control py-0"
                                        name={field}
                                        placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                        value={values[field]}
                                        onChange={handleInput}
                                    />
                                )}
                            </div>
                        ))}
                        <div>
                            <label htmlFor="file" className="form-label ms-1"><strong>File</strong></label>
                            <input type="file" className="form-control py-0" name="file" onChange={handleFileChange} />
                        </div>
                        <button type="submit" className="btn btn-primary form-control py-0 mt-3" disabled={loading}>Submit</button>
                    </form>
                    <div className="position-absolute top-0 start-50 translate-middle-x">
                        {errorMessage && <p className="alert alert-danger p-2">{errorMessage}</p>}
                        {successMessage && <p className="alert alert-success p-2">{successMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
