import { createRoot } from "react-dom/client";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";
import CommentsSection from "./CommentsSection";
import Login from "./Login";
import Registro from "./Registro";
import SobreNosotros from "./SobreNosotros";
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
