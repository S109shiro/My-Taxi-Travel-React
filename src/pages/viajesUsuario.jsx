import { useEffect } from "react";
import "./viajesUsuario.css"

function viajesUsuario() {
    useEffect(()=>{
        document.title = "My Taxi Travel - Historial Viajes"
    })
  return (
    <>
      <section className="contenedor text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Historial de Viajes Realizados
            </h1>

            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              En esta sección podrás consultar todos los viajes que has
              realizado con My Taxi Travel. Encontrarás información como la
              fecha, la ruta, el costo y los datos del conductor. De esta manera
              tendrás un registro claro y ordenado de tus desplazamientos,
              siempre disponible cuando lo necesites.
            </p>
          </div>

          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="encabezado px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    ID Viaje
                  </th>

                  <th className="encabezado px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Inicio
                  </th>

                  <th className="encabezado px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Destino
                  </th>

                  <th className="encabezado px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Precio
                  </th>

                  <th className="encabezado px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Fecha
                  </th>

                  <th className="encabezado px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                    Detalles
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="items">
                  <td className="px-4 py-3">
                    <b>V001</b>
                  </td>

                  <td className="px-4 py-3">Centro Comercial Viva</td>

                  <td className="px-4 py-3">Terminal de Transporte</td>

                  <td className="px-4 py-3">$20.000</td>

                  <td className="px-4 py-3">31/08/2025</td>

                  <td className="w-10 text-center">
                    <button className="b-detalles flex ml-auto border-0 py-1 px-3 focus:outline-none rounded text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black cursor-not-allowed transition-colors duration-200 ease-in-out">
                      Detalles
                    </button>
                  </td>
                </tr>

                <tr className="items">
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    <b>V002</b>
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Parque el Tunal
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Aeropuerto El Dorado
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    $45.000
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    20/08/2025
                  </td>

                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <button className="b-detalles flex ml-auto border-0 py-1 px-3 focus:outline-none rounded text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black cursor-not-allowed transition-colors duration-200 ease-in-out">
                      Detalles
                    </button>
                  </td>
                </tr>

                <tr className="items">
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    <b>V003</b>
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Universidad Nacional
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Estadio Metropolitano de Techo
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    $22.500
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    19/08/2025
                  </td>

                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <button className="b-detalles flex ml-auto border-0 py-1 px-3 focus:outline-none rounded text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black cursor-not-allowed transition-colors duration-200 ease-in-out">
                      Detalles
                    </button>
                  </td>
                </tr>

                <tr className="items">
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    <b>V004</b>
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Barrio San José
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Hospital Central
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    $16.000
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    18/08/2025
                  </td>

                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <button className="b-detalles flex ml-auto border-0 py-1 px-3 focus:outline-none rounded text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black cursor-not-allowed transition-colors duration-200 ease-in-out">
                      Detalles
                    </button>
                  </td>
                </tr>

                <tr className="items">
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    <b>V005</b>
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Usaquén
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Parque Simón Bolívar
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    $28.500
                  </td>

                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    15/08/2025
                  </td>

                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <button className="b-detalles flex ml-auto border-0 py-1 px-3 focus:outline-none rounded text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black cursor-not-allowed transition-colors duration-200 ease-in-out">
                      Detalles
                    </button>
                  </td>
                </tr>

                <tr className="items">
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    <b>V006</b>
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Suba
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Monserrate
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    $26.000
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    10/08/2025
                  </td>

                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <button className="b-detalles flex ml-auto border-0 py-1 px-3 focus:outline-none rounded text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black cursor-not-allowed transition-colors duration-200 ease-in-out">
                      Detalles
                    </button>
                  </td>
                </tr>

                <tr className="items">
                  <td className="px-4 py-3">
                    <b>V007</b>
                  </td>

                  <td className="px-4 py-3">La Candelaria</td>

                  <td className="px-4 py-3">Corferias</td>

                  <td className="px-4 py-3">$20.000</td>

                  <td className="px-4 py-3">01/08/2025</td>

                  <td className="w-10 text-center">
                    <button className="b-detalles flex ml-auto border-0 py-1 px-3 focus:outline-none rounded text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black cursor-not-allowed transition-colors duration-200 ease-in-out">
                      Detalles
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default viajesUsuario;
