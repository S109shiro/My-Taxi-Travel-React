import { createRoot } from "react-dom/client";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Hero from "./Hero";
import CommentsSection from "./CommentsSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Obtenemos la etiqueta a utilizar
const element = document.getElementById("root");

// Se utiliza el createRoot ahora, se reemplaza por el ReactDom
const root = createRoot(element);

// React Dom Router se utiliza para rutear paginas con componentes y un path
root.render(
  <BrowserRouter basename="/My-Taxi-Travel-React">
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
      
    </Routes>
  </BrowserRouter>
);
