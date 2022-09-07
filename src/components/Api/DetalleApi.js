// import React, { useEffect, useState } from "react";

export const DetalleApi = ({
  personaje,
  skin_color,
  hair_color,
  genero,
  birth_year,
  creado,
  altura,
  mass,
  // poblacion,
}) => {

  return (
    <>
      <div className="w-full h-auto flex content-center justify-center mt-5">
        <div className="mr-10">
          <img className="w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNX2e3eP4SReH_xqqGhLVHKaU9kJXjdV9Yg&usqp=CAU"></img>
        </div>

        <div className="">
          <div className="bg-white p-5 w-4/5">
            <h6 className="font-bold text-yellow-300">Nombre: <span className="text-black ml-3">{personaje}</span></h6>
            <h6 className="font-bold text-yellow-300">Altura: <span className="text-black ml-3">{altura}</span></h6>
            <h6 className="font-bold text-yellow-300">Masa: <span className="text-black ml-3">{mass}</span></h6>
            <h6 className="font-bold text-yellow-300">Color de Pelo: <span className="text-black ml-3">{hair_color}</span></h6>
            <h6 className="font-bold text-yellow-300">Creado: <span className="text-black ml-3">{creado}</span></h6>
            <h6 className="font-bold text-yellow-300">Color de Piel: <span className="text-black ml-3">{skin_color}</span></h6>
            <h6 className="font-bold text-yellow-300">Cumpleaños: <span className="text-black ml-3">{birth_year}</span></h6>
            <h6 className="font-bold text-yellow-300">Genero: <span className="text-black ml-3">{genero}</span></h6>
          </div>
        </div>
      </div>
    </>
  );
};
