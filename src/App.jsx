import { BrowserRouter, Routes, Route } from "react-router-dom";

import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Lugares from "./pages/Lugares";
import Comida from "./pages/Comida";
import Actividades from "./pages/Actividades";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Drawer />

        <main className="contenido">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/lugares" element={<Lugares />} />

            <Route path="/comida" element={<Comida />} />

            <Route
              path="/actividades"
              element={<Actividade />}
            />

            <Route
              path="/detalle/:id"
              element={<Detalle />}
            />

            <Route
              path="/favoritos"
              element={<Favoritos />}
            />

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}
