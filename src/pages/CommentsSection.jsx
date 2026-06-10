import { useState } from "react";
import "./commentsSection.css";
import imgUser01 from "../assets/imgHome/user01.jpg"
import imgUser02 from "../assets/imgHome/user02.jpg"
import imgUser03 from "../assets/imgHome/user03.jpg"

function CommentsSection({ commentsUsers = {} }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextComment(){
    return currentIndex < 10 ? setCurrentIndex(currentIndex +1) : null;
  }
  function backComment(){
    return  currentIndex > 0 ? setCurrentIndex(currentIndex -1) : null;
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Reseñas de nuestros clientes
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-full md:w-1/2 lg:w-1/3">
              <div className="tarjeta h-full bg-gray-100 p-8 rounded shadow-lg" onClick={()=>{backComment()}}>
                <div className="estrella flex mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                </div>
                <p className="leading-relaxed mb-6" onClick={()=>{console.log("Se cliquea el comentario");}}>
                  <i>
                    "El servicio fue muy rápido, pedí el taxi y llegó en menos
                    de 5 minutos. El conductor fue muy amable y el carro estaba
                    limpio."
                  </i>
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={imgUser01}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Mariana López</span>
                    <span className="text-gray-500 text-sm">29/08/2025</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/2 lg:w-1/3">
              <div className="tarjeta h-full bg-gray-100 p-8 rounded shadow-lg">
                <div className="estrella flex mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                </div>
                <p className="leading-relaxed mb-6" onClick={()=>{console.log("Se cliquea el comentario");}}>
                  <i>
                    "Excelente experiencia. Me sentí segura durante el viaje y
                    la opción de seguimiento en tiempo real me dio mucha
                    tranquilidad."
                  </i>
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={imgUser02}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Carlos Méndez</span>
                    <span className="text-gray-500 text-sm">29/08/2025</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/2 lg:w-1/3">
              <div className="tarjeta h-full bg-gray-100 p-8 rounded shadow-lg" onClick={nextComment}>
                <div className="estrella flex mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><polygon points="12 1 15 8 22 9 17 15 19 22 12 18 5 22 7 15 2 9 9 8" /></svg>
                </div>
                <p className="leading-relaxed mb-6" onClick={()=>{console.log("Se cliquea el comentario");}}>
                  <i>
                    "Muy buen servicio, lo uso casi todos los días para ir al
                    trabajo. Nunca he tenido inconvenientes y los conductores
                    siempre son respetuosos."
                  </i>
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={imgUser03}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Andrés Torres</span>
                    <span className="text-gray-500 text-sm">29/08/2025</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommentsSection;