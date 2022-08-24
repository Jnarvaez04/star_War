import { useState } from "react";
 
export const UseDetalle = () => {
  
  const [dataDetalle, setDataDetalle] = useState([]);
  const [Contador, setContador] = useState(1);
 
  const disminuir = () => {
    if (Contador <= 1) {
      setContador(1);
    } else {
      setContador(Contador - 1);
    }
  };
  const aumentar = () => {
    if (Contador < 6) {
      setContador(Contador + 1);
    } else {
      setContador(6);
    }
  };

  const back = () => {
    window.history.go(-1)
  }
 
  const getAllDetalle = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        ` https://swapi.dev/api/films/?page=${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataDetalle(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };
 
  return {
    getAllDetalle,
    dataDetalle,
    Contador,
    aumentar,
    disminuir,
  };

};