import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavbarApp } from "./components/Navbar/NavbarApp";
import { SliderApp } from "./components/Slider/SliderApp";
import { InfoApp } from "./components/Information/InfoApp";
import { CardApp } from "./components/Cards/CardApp";
import { FooterApp } from "./components/Footer/FooterApp";
import PlanetasApp  from "./components/Planetas/PlanetasApp";
import PersonajesApp from "./components/Personajes/PersonajesApp";
import DetallesApp from "./components/Detalle/DetalleApp";




function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarApp />
      <SliderApp />
      <InfoApp />
      <CardApp />
        <Routes>
          <Route path="personaje" element={< PersonajesApp /> } />
          <Route path="planeta" element={<PlanetasApp />} />
          <Route path='detaller/:id' element={<DetallesApp/>} />
        </Routes>
      </BrowserRouter>
      <FooterApp />
    </>
  );
}

export default App;
