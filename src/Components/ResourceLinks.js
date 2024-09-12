import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  prePrimaryItems,
  primaryItems,
  schoolTittles,
  secondaryItems,
  jssItems,
} from "./schoolItems.js";
import config from "../config.js";
import "../assets/resourceLinks.css"

const ResourceLinks = ({ isAdmin, userId, isLoggedIn, clearToken }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  

  const fetchData = async (path, value) => {
    try {
      const apiUrl = config.API_BASE_URL;
      const URL = `${apiUrl}/${path}/${value}`;
      const res = await axios.get(URL);
      setData(res.data);
    } catch (err) {
      setError("Could not fetch data");
    }
  };

  useEffect(() => {
    if (selectedItem) {
      fetchData(selectedItem.path, selectedItem.value);
    }
  }, [selectedItem]);

  const handleClick = (items, value) => {
    // Direct navigation paths can be customized here
    switch (value) {
      case "/primary/schemes":
      case "/primary/revision/notes":
      case "/primary/curriculum/designs":
      case "/primary/assessment/tools":
      case "/grade1/examinations":
      case "/grade2/examinations":
      case "/grade3/examinations":
      case "/grade4/examinations":
      case "/grade5/examinations":
      case "/grade6/examinations":
      case "/grade7/examinations":
      case "/grade8/examinations":
      case "/play/group/exams":
      case "/pp1/exams":
      case "/pp2/exams":
      case "/secondary/schemes":
      case "/secondary/fullset/examinations":
      case "/secondary/notes":
      case "/kcse/trial/examinations":
      case "/kcse/past/papers":
      case "/secondary/holiday/revision":
      case "/jss/assessment/tools":
      case "/jss/curriculum/designs":
      case "/jss/fullset/examinations":
      case "/jss/holiday/assignments":
      case "/jss/notes":
      case "/jss/schemes":
      case "/pre/primary/schemes":
      case "/pre/primary/curriculum/designs":
      case "/pre/primary/holiday/assignments":
      case "/primary/holiday/assignments":
        window.location.href = value;
        return;
      default:
        const selectedItem = items.find((item) => item.value === value);
        if (selectedItem) {
          setSelectedItem(selectedItem);
        }
        break;
    }
  };

  const renderListItems = (items) =>
    items.map((item, index) => (
      <li
        key={index}
        className={`list-group-item border-0 cursor-pointer `}
        style={{ backgroundColor: "transparent" }}
      >
        <a
  href="#"
  className="text-black fw-bold text-decoration-none px-2 py-2 d-inline-block rounded bg-light hover-bg-dark"
  onClick={() => handleClick(items, item.value)}
>
  {item.label}
</a>

      </li>
    ));

  return (
    <div className="container-fluid p-0 d-flex flex-column align-items-center ">
      <div className="w-100 d-flex flex-column align-items-center custom-background-pri">
        <header className="w-100 schoolTittle">{schoolTittles.prePrimary}</header>
        <ul className={`  list-group pt-4 pb-4  border-0 `}
        >
          {renderListItems(prePrimaryItems)}
        </ul>
      </div>

      <div className="w-100 d-flex flex-column align-items-center custom-background-primary">
        <header className=" schoolTittle">{schoolTittles.primary}</header>
        <ul
          className={`list-group pt-4 pb-4 bg-transparent border-0 `}
        >
          {renderListItems(primaryItems)}
        </ul>
      </div>

      <div className="w-100 d-flex flex-column align-items-center custom-background-jss">
        <header className=" schoolTittle">{schoolTittles.jss}</header>
        <ul className={`list-group pt-4 pb-4 border-0`}    >
          {renderListItems(jssItems)}
        </ul>
      </div>

      <div className=" w-100 d-flex flex-column align-items-center custom-background-sec">
        <header className=" schoolTittle">{schoolTittles.secondary}</header>
        <ul
          className={`list-group pt-4 pb-4 border-0`}
        >
          {renderListItems(secondaryItems)}
        </ul>
      </div>
    </div>
  );
};

export default ResourceLinks;
