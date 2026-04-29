import "./sobreNosotros.css";
import { useEffect } from "react";

import User1 from "../assets/imgSNosotros/user04.jpg"
import User2 from "../assets/imgSNosotros/user05.jpg"
import User3 from "../assets/imgSNosotros/user06.jpg"
import Portada from "../assets/imgSNosotros/Portada.jpg"

function SobreNosotros() {
  useEffect(() => {
    document.title = "My Taxi Travel - Sobre Nosotros";
  });

  return (
    <>
      <section className="informacion text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Portada}
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              “Conectamos tu camino con confianza”
              <br className="hidden lg:inline-block" />
              <i>- My Taxi Travel</i>
            </h1>

            <p className="mb-8 leading-relaxed">
              En My Taxi Travel creemos que moverse por la ciudad debería ser
              seguro, rápido y sencillo. Nacimos con el propósito de transformar
              la manera en que las personas solicitan y disfrutan un servicio de
              transporte, ofreciendo una plataforma confiable que conecta
              pasajeros con conductores de forma eficiente. Nuestra prioridad es
              la seguridad y comodidad de cada viaje. Por eso, trabajamos con
              conductores verificados, implementamos sistemas de geolocalización
              en tiempo real y brindamos soporte permanente para garantizar la
              tranquilidad de nuestros usuarios.
            </p>

            <p className="mb-8 leading-relaxed">
              Pero no solo pensamos en los pasajeros. También apoyamos a los
              conductores ofreciéndoles una herramienta tecnológica que les
              permite generar ingresos de manera justa y transparente,
              fomentando así una comunidad sólida y responsable. En My Taxi
              Travel estamos comprometidos con la innovación. Creemos en el
              poder de la tecnología para mejorar la movilidad y aportar
              soluciones prácticas a las necesidades de la vida cotidiana.Porque
              para nosotros, no se trata solo de llegar al destino, sino de
              disfrutar el viaje.
            </p>
          </div>
        </div>
      </section>



      <section className="calificaciones_contenedor text-gray-600 body-font">
        <h2 className="title-font text-3xl text-center">
          Opiniones de nuestros usuarios
        </h2>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="tarjeta lg:w-1/3 lg:mb-0 mb-6 p-4 hover:shadow-lg transition delay-100 ease-in-out bg-font">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={User1}
                />
                <p className="leading-relaxed">
                  <i>
                    "Esta aplicación me ha facilitado mucho la vida. Puedo pedir
                    un taxi en segundos y siempre me siento segura durante el
                    viaje"
                  </i>
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#2C2C2C] mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Valeria Osorio
                </h2>
                <p className="text-gray-500">Usuario</p>
              </div>
            </div>

            <div className="tarjeta lg:w-1/3 lg:mb-0 mb-6 p-4 hover:shadow-lg transition delay-100 ease-in-out">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={User2}
                />
                <p className="leading-relaxed">
                  <i>
                    "Me gusta poder pagar de forma rápida y ver la ubicación del
                    conductor en tiempo real. ¡Muy confiable!"
                  </i>
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#2C2C2C] mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Camila Torres
                </h2>
                <p className="text-gray-500">Usuario</p>
              </div>
            </div>

            <div className="tarjeta lg:w-1/3 lg:mb-0 p-4 hover:shadow-lg transition delay-100 ease-in-out">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={User3}
                />
                <p className="leading-relaxed">
                  <i>
                    "Gracias a My Taxi Travel encontré una forma justa y
                    transparente de trabajar. Tengo más ingresos y me siento
                    respaldado por la plataforma"
                  </i>
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#2C2C2C] mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Andrés Ramírez
                </h2>
                <p className="text-gray-500">Conductor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SobreNosotros;
