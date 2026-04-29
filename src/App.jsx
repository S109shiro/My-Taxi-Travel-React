import { createRoot } from "react-dom/client";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import CommentsSection from "./pages/CommentsSection";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import SobreNosotros from "./pages/SobreNosotros";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

// Obtenemos la etiqueta a utilizar
const element = document.getElementById("root");

// Se utiliza el createRoot ahora, se reemplaza por el ReactDom
const root = createRoot(element);

// React Dom Router se utiliza para rutear paginas con componentes y un path

// HashRoute para GitPages, el resto BrowserRouter
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={
          <>
            <NavBar />
            <Hero />
            <CommentsSection />
            <Footer />
          </>
        }
      ></Route>


      <Route path="/sobreNosotros" element={
        <>
          <NavBar />
          <SobreNosotros />
          <Footer />
        </>
      }
      ></Route>


      <Route path="/registro" element={
        <>
          <NavBar />
          <Registro />
          <Footer />
        </>
      }
      ></Route>

      <Route path="/login" element={
        <>  
          <NavBar />
          <Login />
          <Footer />
        </>
      }

      ></Route>
      
    </Routes>
  </HashRouter>
);
