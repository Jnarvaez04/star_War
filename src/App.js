import "./App.css";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import PlanetasApp from "./components/Planetas/PlanetasApp";
import PersonajesApp from "./components/Personajes/PersonajesApp";
import { DetalleApi } from "./components/Api/DetalleApi";
import { HomeApp } from "./components/Home/HomeApp";
import DetalleApp from "./components/Detalle/DetalleApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/personaje" element={<PersonajesApp />} />
          <Route path="planeta" element={<PlanetasApp />} />
          <Route path="Details/:id" element={ <DetalleApp /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
