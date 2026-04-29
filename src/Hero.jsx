// Se importan estilos TailWind y propios del componente
import "./hero.css";
import { useEffect } from 'react';

// Importar imagen del home
import imgHome from './assets/Hero.jpg';

function Hero() {
  useEffect(()=>{
    document.title= "My Taxi Travel - Inicio";
  })

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-xl">
              <img
                alt="Imagen del Home"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0 rounded-xl"
                src={imgHome}
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-5xl text-gray-900 font-medium title-font mb-2">
                  My Taxi Travel
                </h2>
                <p className="leading-relaxed text-lg">
                  La forma más rápida, segura y sencilla de moverte por la
                  ciudad. Con solo unos toques en tu celular puedes pedir un
                  taxi confiable, seguir tu viaje en tiempo real y pagar de
                  manera cómoda. Nuestra prioridad es tu seguridad y comodidad,
                  por eso contamos con conductores verificados, precios justos y
                  soporte disponible para ti.
                </p>
                <p className="leading-relaxed text-lg">
                  Viaja tranquilo, viaja con My Taxi Travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
