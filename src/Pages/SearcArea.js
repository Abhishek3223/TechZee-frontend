import React, { useState } from "react";
import EachClass from "./EachClass.jsx";
import { useEffect } from "react";
import "./searcharea.css";
const SearcArea = () => {
  const [classList, setClassList] = useState([]);
  const [search, setSearch] = useState("");
  const getAllClasses = async () => {
    const responseAllclasses = await fetch(
      "http://localhost:5000/api/fetchAllClasses"
    );
    const json = await responseAllclasses.json();
    setClassList(json.classData);
    console.log(json.classData);
  };
  useEffect(() => {
    getAllClasses();
  }, []);

  return (
   <>
   {
    localStorage.getItem('role').toLowerCase()==="student"? <div className="searchareaouter">
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
    <div className="searchAreaContainer">
      {classList.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())&& item;
      }).map((i) => {
        return (<EachClass data={i} />)
      })}
    </div>
  </div>:""
   }
   </>
  );
};

export default SearcArea;

{
  /* {classList !== []
                  ? classList.filter(
                        (item) =>( (item.name.toLowerCase().includes(search.toLowerCase()))
                      ).map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="oncardhover-container">
                            <EachClass data={filterItems} />
                          </div>
                        );
                      }))
                  : ""} */
}
{
  /* {classList.map((i) => {
    return (<EachClass data={i} />)
  })} */
}
