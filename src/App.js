import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contacto from "./pages/Contacto/Contacto";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import SobreMi from "./pages/sobreMi/SobreMi";
import Trabajos from "./pages/Trabajos/Trabajos";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="sobre-mi" element={<SobreMi />}></Route>
        <Route path="mis-trabajos" element={<Trabajos />}></Route>
        <Route path="contacto" element={<Contacto />}></Route>
      </Routes>
    </>
  );
}

export default App;
