import { useEffect } from "react";
import { PersonajessApi } from "../Api/Personajes";
import { UsePersons } from "../../Hooks/UsePerson";
import { useParams } from "react-router-dom";
import { NavbarApp } from "../Navbar/NavbarApp";
import { FooterApp } from "../Footer/FooterApp";

const PersonajesApp = () => {
  const params = useParams();

  const { getAllPersons, dataPersons, Contador, disminuir, aumentar } = UsePersons();

  useEffect(() => {
    
    getAllPersons(Contador);

  }, [dataPersons]);

  return (
    <>
      <NavbarApp />
      <center>
        <h1 className="mt-1 text-6xl font-normal text-white">
          Listado de Personajes
        </h1>
      </center>
      <div className="flex justify-around items-center flex-wrap">
        {dataPersons.map((Personajes) => (
          <PersonajessApi
            key={Personajes.name}
            personaje={Personajes.name}
            altura={Personajes.height}
            hair_color={Personajes.hair_color}
            creado={Personajes.created}
            genero={Personajes.gender}
            birth_year={Personajes.birth_year}
            eye_color={Personajes.eye_color}
            mass={Personajes.mass}
            skin_color={Personajes.skin_color}
            num={Personajes.num}
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
      <FooterApp />
    </>
  );
};

export default PersonajesApp;

