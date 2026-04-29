import "./soporte.css";
import { useEffect } from "react";
import imgSoporte from "../assets/imgSoporte/soportePortada.jpg"

function Soporte() {
    useEffect(()=>{
        document.title = "My Taxi Travel - Soporte"
    })
  return (
    <>
      <section className="preguntas-frecuentes text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="font-medium title-font text-xl text-gray-900 mb-1">
            PREGUNTAS FRECUENTES
          </h2>
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2C2C2C] hover:bg-[#FEBC2F] inline-flex items-center justify-center text-white relative z-10 transition delay-100 ease-in-out"></div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    ¿Cómo solicito un viaje en My Taxi Travel?
                  </h2>
                  <p className="leading-relaxed">
                    Solo necesitas ingresar a la plataforma, indicar tu punto de
                    partida y destino, y en segundos un conductor cercano
                    aceptará tu solicitud.
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2C2C2C] hover:bg-[#FEBC2F] inline-flex items-center justify-center text-white relative z-10 transition delay-100 ease-in-out"></div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    ¿Es seguro viajar con My Taxi Travel?
                  </h2>
                  <p className="leading-relaxed">
                    Sí. Todos nuestros conductores son verificados y la app
                    cuenta con geolocalización en tiempo real. Además, puedes
                    compartir tu recorrido con familiares o amigos para mayor
                    tranquilidad.
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2C2C2C] hover:bg-[#FEBC2F] inline-flex items-center justify-center text-white relative z-10 transition delay-100 ease-in-out"></div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    ¿Qué métodos de pago aceptan?
                  </h2>
                  <p className="leading-relaxed">
                    Puedes pagar en efectivo o con tarjeta desde la aplicación,
                    de manera rápida y segura.
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2C2C2C] hover:bg-[#FEBC2F] inline-flex items-center justify-center text-white relative z-10 transition delay-100 ease-in-out"></div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    ¿Qué diferencia a My Taxi Travel de otros servicios de
                    transporte?
                  </h2>
                  <p className="leading-relaxed">
                    Ofrecemos un servicio seguro, con conductores verificados y
                    tarifas transparentes, priorizando siempre la comodidad del
                    pasajero y el respaldo al conductor.
                  </p>
                </div>
              </div>

              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2C2C2C] hover:bg-[#FEBC2F] inline-flex items-center justify-center text-white relative z-10 transition delay-100 ease-in-out"></div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    Soy conductor, ¿cómo puedo registrarme en la plataforma?
                  </h2>
                  <p className="leading-relaxed">
                    Debes
                    <a className="text-[#2C2C2C] hover:text-[#FEBC2F] hover:underline cursor-not-allowed">
                      descargar la aplicación My Taxi Travel
                    </a>
                    para conductores, completar el registro y adjuntar la
                    documentación requerida. Una vez aprobada, podrás empezar a
                    recibir viajes.
                  </p>
                </div>
              </div>
            </div>

            <img
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src={imgSoporte}
              alt="step"
            />
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font relative">
        <div className="contactanos container px-5 py-24 mx-auto">
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 pt-5">
                Contactanos
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                En My Taxi Travel queremos estar siempre cerca de ti. Si tienes
                dudas, sugerencias o necesitas ayuda con tu viaje, nuestro
                equipo de atención está listo para escucharte y brindarte la
                mejor solución.
              </p>
            </div>

            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Correo Electronico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Dejanos tus comentarios
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button className="flex mx-auto text-whiteborder-0 py-2 px-8 focus:outline-none text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black rounded text-lg cursor-not-allowed">
                    Enviar Información
                  </button>
                </div>

                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a
                    className="text-sm font-medium text-gray-400 hover:text-[#2C2C2C] hover:underline"
                    href="mailto:example@email.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escribenos un correo
                  </a>
                  <br />
                  <a
                    className="text-sm font-medium text-gray-400 hover:text-[#2C2C2C] hover:underline"
                    href="https://wa.me/3000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escribenos a nuestro chat de WhatsApp
                  </a>
                  <p className="leading-normal my-5">
                    Bogotá D.C.
                    <br />
                    Cra. 00 #00 a00 Sur
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Soporte;
