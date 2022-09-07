import { useState } from "react";
 
export const UsePersons = () => {
  
  const [dataPersons, setDataPersons] = useState([]);
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

  // const back = () => {
  //   window.history.go(-1)
  // }
 
  
  const getAllPersons = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        `https://swapi.dev/api/people/?page=${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataPersons(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };
 
  return {
    getAllPersons,
    dataPersons,
    Contador,
    aumentar,
    disminuir,
  };

};