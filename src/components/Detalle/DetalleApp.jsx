import { useEffect } from "react";
import { DetalleApi } from "../Api/DetalleApi";
import { UsePersons } from "../../Hooks/UsePerson";
import { NavbarApp } from "../Navbar/NavbarApp";
import { FooterApp } from "../Footer/FooterApp";

const DetalleApp = () => {
  const { getAllPersons, dataPersons, Contador, disminuir, aumentar } =
    UsePersons();

  useEffect(() => {
    getAllPersons(Contador);
  }, [dataPersons]);

  return (
    <>
      <NavbarApp />
      <div className="w-screen ">
        <center>
          <h1 className="mt-1 text-6xl font-normal text-white">
            Detalle de Personaje
          </h1>
        </center>
        <div className="">
          {dataPersons.map((Personaje) => (
            <DetalleApi
              key={Personaje.name}
              personaje={Personaje.name}
              altura={Personaje.height}
              hair_color={Personaje.hair_color}
              creado={Personaje.created}
              genero={Personaje.gender}
              birth_year={Personaje.birth_year}
              eye_color={Personaje.eye_color}
              mass={Personaje.mass}
              skin_color={Personaje.skin_color}
              num={Contador}
            />
          ))}
        </div>
        <center>
          <div className="my-5">
            <button className="rounded-none bg-yellow-500 w-28" onClick={disminuir} >
              {" "} Anterior{" "}
            </button>

            <b className="mx-3 font-extrabold text-white"> {Contador} </b>

            <button  className="rounded-none bg-yellow-500 w-28" onClick={aumentar} >
              {" "} Siguiente{" "}
            </button>
          </div>
        </center>
      </div>

      <FooterApp />
    </>
  );
};

export default DetalleApp;
