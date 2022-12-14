import { useEffect } from "react";
import { PlanetasApi } from "../Api/Planetas";
import { UsePlanets } from "../../Hooks/UsePlanet";
import { NavbarApp } from "../Navbar/NavbarApp";
import { FooterApp } from "../Footer/FooterApp";

const PlanetasApp = () => {

  // Desestructuramos la función del HOOKS
  const { getAllPlanets, dataPlanets, Contador, disminuir, aumentar } = UsePlanets();

  useEffect(() => {
    getAllPlanets(Contador);
  }, [dataPlanets]);


  return (
    <div>
      <NavbarApp />
      <center> 
        <h1 className="mt-10 text-6xl font-normal text-white">
          Listado de planetas
        </h1>
      </center>
      
      <div className="flex justify-around items-center flex-wrap">
        {dataPlanets.map((Planetas) => (
          <PlanetasApi
            key={Planetas.name}
            planeta={Planetas.name}
            clima={Planetas.climate}
            terreno={Planetas.terrain}
            creado={Planetas.created}
            poblacion={Planetas.population}
            gravedad={Planetas.gravity}
            diametro={Planetas.diameter}
            popular={Planetas.population}
            rotaticion={Planetas.rotation_period}
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
    </div>
  );
};

export default PlanetasApp;
