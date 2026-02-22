import { createRoot } from "react-dom/client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import CommentsSection from "./CommentsSection";

// Obtenemos la etiqueta a utilizar
const element = document.getElementById("root");

// Se utiliza el createRoot ahora, se reemplaza por el ReactDom
const root = createRoot(element);

root.render(
  <>
    <Header />
    <Hero />
    <CommentsSection/>
    <Footer />
  </>,
);
