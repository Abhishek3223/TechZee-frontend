import React, { createContext, useState, useRef, useEffect } from 'react';

const AllContext = createContext();



const ContextProvider = ({ children }) => {
  const host = 'http://localhost:5000'
  const SetALlstateFalse = () => {
    setCreate(false);
    setDasboardArea(false);
    SetSearcArea(false);
  };
  const [createCLass, setCreate] = useState(false);
  const [DasboardArea, setDasboardArea] = useState(true);
  const [SearcAreaa, SetSearcArea] = useState(false);
  const [FavArea, setFavArea] = useState(false);


  const GetRepel = async () => {

    const Response = await fetch(`${host}/api/fetchItems`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('authToken')
      }
    });
    const res = await Response.json();
    console.log(res);
    return res
  }
  return (
    <AllContext.Provider value={{
      createCLass, setCreate, SetALlstateFalse, DasboardArea, setDasboardArea, SetSearcArea, GetRepel, host, SearcAreaa, FavArea, setFavArea
    }}
    >
      {children}
    </AllContext.Provider>
  );
};

export { ContextProvider, AllContext };