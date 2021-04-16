import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../GlobalStates/GlobalStateContext";
import CaptureName from "../Modules/BotScript/CaptureName";



const GlobalState = (props) => {
  const BASE_URL = "https://mockapi.io/projects/60772c7a1ed0ae0017d6a924";
  const [info, setInfo] = useState([])
  const [value, setValue] = useState('fullName')
  const [typeChange, setTypeChange] = useState(<CaptureName/>)
  const [holderValue, setHolderValue] = useState('Nome e Sobrenome')
  const [showName, setShowName] = useState()

  const saveInfo = (newItem) => {
    info.push(newItem);
    console.log(`info`, info)
  };

  const controlBot = () => {
    if (value === 'fullName') {
     setHolderValue('Cidade e Estado')
      setValue('city')

    } else if (value === 'city') {
      setHolderValue('Ex:25/06/1991')
      setValue('birthDate')
      
    } else if (value === 'birthDate') {
      setHolderValue('Digite Seu e-mail para contato')
      setValue('email')
 
    } else if (value === 'email') {
      setValue('Finish')
    };
  };



  const createUSer = (info) => {
    axios.post(`${BASE_URL}/CreateUser`,
      {
        body: {
          User: {
            "fullName": info.fullName,
            "city": info.city,
            "birthDate": info.birthDate,
            "email": info.email,
          }
        }
      }
      , {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((res) => {
        console.log(`usuaeio casdastrado com sucesso`)
      })
      .catch((err) => {
        console.log(err)
      })
  };




  const states = { typeChange, holderValue, showName, info, value };
  const setters = { setTypeChange, setShowName, setInfo, setValue, setHolderValue };
  const requests = {createUSer, saveInfo, controlBot };
  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
