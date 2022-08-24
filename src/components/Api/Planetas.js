import React, { useEffect, useState } from "react";

export const PlanetasApi = ({
  planeta,
  clima,
  terreno,
  creado,
  diametro,
  // gravedad,
  // poblacion,
}) => {

  return (
    <>
      {/* <div className="w-screen h-auto flex justify-center ">
        <h2 className="text-white uppercase text-6xl">PLANETAs</h2>
      </div> */}

      <div className="">
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img src="https://lafuerzanoticias.files.wordpress.com/2018/10/mustafar-tall.jpg?w=1536&h=768&crop=1" alt="" />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">{ planeta }</h2>
          <p className="mt-1 text-xl font-base tracking-normal text-white">
            <h3 className="text-base text-yellow-300">
              Rotation Period: <span className="text-white pl-1"></span>
            </h3>
            <h3 className="text-base text-yellow-300">
              Climate: <span className="text-white pl-1">{ clima }</span>
            </h3>
            <h3 className="text-base text-yellow-300">
              Terrain: <span className="text-white pl-1">{ terreno }</span>
            </h3>
          </p>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">{ diametro }</h3>
            <i className="text-white">{ creado }</i>
          </div>
        </div>
      </div>
    </>
  );
};
