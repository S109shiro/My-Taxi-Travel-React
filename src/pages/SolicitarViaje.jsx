import "./solicitarViaje.css";
import { useEffect } from "react";

function SolicitarViaje() {
  useEffect(()=>{
    document.title = "My Taxi Travel - Solicitar viaje";
  })
  return (
    <>
      <section className="text-gray-600 body-font relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="120%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.8788484418474!2d-72.89717482429701!3d5.73058463186798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a48a8ae9bc4e7%3A0x4577dc8f78e0764b!2sCentro%20Nacional%20Minero%20SENA!5e0!3m2!1ses-419!2sco!4v1756582881310!5m2!1ses-419!2sco"
            style={{ filter: "contrast(1.2) opacity(1)" }}
          ></iframe>
        </div>

        <form className="container px-5 py-24 mx-auto flex">
          <div className="tarjeta lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Solicitud del Viaje
            </h2>

            <button className="demanda bg-green-500 rounded-md">
              Baja demanda
            </button>

            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
              $ 50.000
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="informacion relative mb-4">
                <label
                  htmlFor="origen"
                  className="leading-7 text-sm text-gray-600"
                >
                  Origen
                </label>
                <input
                  type="search"
                  name="origen"
                  id="origen"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="------" required
                />
              </div>

              <div className="informacion relative mb-4">
                <label
                  htmlFor="destino"
                  className="leading-7 text-sm text-gray-600"
                >
                  Destino
                </label>
                <input
                  type="search"
                  name="destino"
                  id="destino"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="------" required
                />
              </div>
            </div>

            <div className="informacion relative mb-4">
              <label
                htmlFor="informacion-viaje"
                className="leading-7 text-sm text-gray-600"
              >
                Detalles del viaje
              </label>
              <hr />
              <p className="leading-relaxed mb-5 text-gray-600">
                Aquí se mostrarán los detalles de tu viaje, como el punto de
                partida, el destino, el tiempo estimado y la información de tu
                conductor y vehículo.
              </p>
            </div>

            <button className="realizar_viaje text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-pointer">
              Realizar Viaje
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default SolicitarViaje;
