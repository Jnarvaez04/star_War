import { useEffect } from "react";
import { UseDetalle } from "../../Hooks/Detalle";
import { DetalleApi } from "../Api/DetalleApi";

const PersonajesApp = () => {

  const { getAllDetalle, dataDetalle, Contador, disminuir, aumentar } = UsePersons();

  useEffect(() => {
    
    getAllDetalle(Contador);

  }, [dataDetalle]);

  return (
    <>
      <center>
        <h1 className="mt-1 text-6xl font-normal text-white">
          Listado de Detalle
        </h1>
      </center>
      <div className="flex justify-around items-center flex-wrap">
        {dataDetalle.map((Detalle) => (
          <DetalleApi
            key={Detalle.name}
            personaje={Detalle.name}
            altura={Detalle.films}
            hair_color={Detalle.vehicles}
            creado={Detalle.starships}
          />
        ))}
      </div>

      <center>
        <div className="my-5">
          <button className="rounded-none bg-yellow-500 w-28" onClick={disminuir}> Anterior </button>
          <b className="mx-3 font-extrabold text-white"> { Contador } </b>
          <button className="rounded-none bg-yellow-500 w-28" onClick={aumentar} > Siguiente </button>
      </div>
      </center>
    </>
  );
};

export default PersonajesApp;