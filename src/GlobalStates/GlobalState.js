import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../GlobalStates/GlobalStateContext";

const GlobalState = (props) => {
  const [info, setInfo] = useState([])
  const [value, setValue] = useState('fullName')





  const saveInfo = (newItem) => {
    info.push(newItem);
     };

 


    const states = {info,value};
    const setters = { setInfo,setValue };
    const requests = {saveInfo};
    const data = { states, setters, requests };
    
    return (
      <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
