import React, { useEffect, useState } from "react";

export const DetalleApi = ({
   personaje,
   episodios,
   vehicles,
   starships,
}) => {

  return (
    <>
      {/* <div className="w-screen h-auto flex justify-center ">
        <h2 className="text-white uppercase text-6xl">PLANETAs</h2>
      </div> */}
      <div className="w-screen h-auto flex justify-start items-center">
        <button className="rounded-none bg-yellow-500 w-28"></button>
      </div>

      <div className="">
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img
              src="https://media.revistagq.com/photos/5e1c38f56ebc30000824edeb/master/pass/baby%20yoda%20yoda%20relacion%20jon%20favreau.jpg"
              alt=""
            />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">{personaje}</h2>
          <div className="scroll">
            <p className="mt-1 text-xl font-base tracking-normal text-white">
              <h3 className="text-base text-yellow-300">
                hair_color:{" "}
                <span className="text-white pl-1">{episodios}</span>
              </h3>
              <h3 className="text-base text-yellow-300">
                birth:
                <span className="text-white pl-1">{birth_year}</span>
              </h3>
              <h3 className="text-base text-yellow-300">
                Vehicles: <span className="text-white pl-1">{vehicles}</span>
              </h3>
              <h3 className="text-base text-yellow-300">
                Mass: <span className="text-white pl-1">{starships}</span>
              </h3>
              <h3 className="text-base text-yellow-300">
                Create: <span className="text-white pl-1">{creado}</span>
              </h3>
            </p>
          </div>
          <div className="w-100 h-auto my-3 flex content-center items-center align-middle">
            <button className="className=rounded-none bg-yellow-500 w-28">
              Detalle
            </button>
          </div>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">{skin_color}</h3>
            <i className="text-white">{genero}</i>
          </div>
        </div>
      </div>
    </>
  );
};