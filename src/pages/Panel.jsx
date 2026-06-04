import { useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';

// Importar el JS con la logica para cambiar el tema de la pagina
import cambiarTema from "../components/bCambiarTema";
import "./panel.css";
//import "../components/toast.css"

function Panel() {
  // Para guardar los usuarios, conductores, taxis
  const [usuarios, setUsuarios] = useState([]);
  const [conductores, setConductores] = useState([]);
  const [taxis, setTaxis] = useState([])

  const nombreAdmin = localStorage.getItem("nombreAdministrador");
  useEffect(() => {
    document.title = "Panel de Administracion";

    // Realizamos un fetch para obtener todo los usuarios de la bd y los guardamos en un set
    const cargarUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:8080/usuario/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const dataUsuarios = await response.json();
        setUsuarios(dataUsuarios);
      } catch (error) {
        console.error("Error en cargar los usuarios: " + error);
      }
    };

    // Obtener conductores con un fetch
    const cargarConductores = async () => {
      try{
        const response = await fetch("http://localhost:8080/conductor/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const dataConductores = await response.json()
        setConductores(dataConductores)
        //console.log(dataConductores)
      }catch(error){
        console.error("Error en cargar los conductores: " + error)
      }
    }

    // Obtener Taxis 
    const cargarTaxis = async () => {
      try{
        const response = await fetch("http://localhost:8080/taxi/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const dataTaxis = await response.json()
        setTaxis(dataTaxis)
        //console.log("Taxis cargados: " + taxis)
      }catch(error){
        console.error("Error en cargar los taxis: " + error)
      }
    }


    // Ejecutamos funciones asincronas
    cargarUsuarios();
    cargarConductores();
    cargarTaxis();


  }, []);  // [] => Solucion del rendimiento en las requests

  const navigate = useNavigate();
  function navReset(url){
    navigate(url, {replace: true}) 
  }

  const mensajeCerrarSesionAdministrador = useRef(null);  // Instanciamos useRef para el mensaje de logout
  
  // Funcion para mostrar mensaje y cerrar sesion
  function cerrarSesionAdmin(){     
      mensajeCerrarSesionAdministrador.current.show({
      severity: "success",
      summary: "Sesión cerrada",
      detail: "Has cerrado sesión correctamente",
      life: 2000,
    });

    setTimeout(() => {
      localStorage.removeItem("idAdmin");
      localStorage.removeItem("nombreAdministrador");
      localStorage.removeItem("token");
      navReset("/");
    }, 2000);
  }

  // Se pone el componente del toast referenciando el useRef con la posicion que quiera
  return (
    <>
      <Toast ref={mensajeCerrarSesionAdministrador} position="center" pt={{
        root: {className: "mensajeCerrarSesionAdmin"}
      }}/>
      <div className="bg-[#FEBC2F] grid grid-cols-4 items-center px-6 py-3">
        <h1 className="col-span-3 text-sm font-bold uppercase tracking-widest">
          Panel de administrador — {nombreAdmin}
        </h1>
        <div className="flex justify-end">
          <button
            onClick={cambiarTema}
            id="boton-tema"
            className="inline-flex items-center border-1 border-black bg-[#2C2C2C] rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0 cursor-pointer transition delay-100 ease-in-out text-white mr-3"
          >
            Modo Oscuro 🌙
          </button>
          <button className="flex items-center gap-2 bg-white border border-[#181818] text-[#181818] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#181818] hover:text-white transition-all duration-200 shadow-sm cursor-pointer" onClick={
            cerrarSesionAdmin
          }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
              />
            </svg>
            Salir del panel
          </button>
        </div>
      </div>

      <div className="tb_usuarios m-5 mb-10 text-[var(--colorText)]">
        <h2 className="text-center uppercase text-lg mb-2 font-bold">
          Usuarios registrados en la plataforma
        </h2>
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body ">
            <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium ">
              <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                  ID
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Nombre 
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Apellidos
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Numero de identificacion
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Numero de celular
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr
                  key={usuario.id_usuario}
                  className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {usuario.id_usuario}
                  </td>
                  <td className="px-6 py-4">{usuario.nombre}</td>
                  <td className="px-6 py-4">
                    {usuario.primer_apellido} {usuario.segundo_apellido}
                  </td>
                  <td className="px-6 py-4">{usuario.email}</td>
                  <td className="px-6 py-4">{usuario.numero_identificacion}</td>
                  <td className="px-6 py-4">{usuario.numero_telefono}</td>
                  <td>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer mr-3">
                      Editar
                    </button>
                    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded cursor-pointer">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="tb_conductores m-5 mb-10 text-[var(--colorText)]">
        <h2 className="text-center uppercase text-lg mb-2 font-bold">
          Conductores registrados en la plataforma
        </h2>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3">Crear Conductor</button>
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
              <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                  ID
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Nombre 
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Apellidos
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Numero de identificacion
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Numero de celular
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  ID Taxi Utilizado
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {conductores.map((conductor) => (
                <tr
                  key={conductor.id_conductor}
                  className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {conductor.id_conductor}
                  </td>
                  <td className="px-6 py-4">{conductor.nombre}</td>
                  <td className="px-6 py-4">
                    {conductor.primer_apellido} {conductor.segundo_apellido}
                  </td>
                  <td className="px-6 py-4">{conductor.email}</td>
                  <td className="px-6 py-4">{conductor.numero_identificacion}</td>
                  <td className="px-6 py-4">{conductor.numero_telefono}</td>
                  <td className="px-6 py-4">{conductor.taxi_en_uso.id_taxi}</td>
                  <td>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer mr-3">
                      Editar
                    </button>
                    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded cursor-pointer">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="tb_taxis m-5 text-[var(--colorText)]">
        <h2 className="text-center uppercase text-lg mb-2 font-bold">
          Taxis registrados en la plataforma
        </h2>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3">Crear Taxi</button>
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
              <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                  ID
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Placa
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Modelo
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Ult. Tecnicomecanica
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {taxis.map((taxi) => (
                <tr
                  key={taxi.id_taxi}
                  className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {taxi.id_taxi}
                  </td>
                  <td className="px-6 py-4">{taxi.placa}</td>
                  <td className="px-6 py-4">{taxi.modelo}</td>
                  <td className="px-6 py-4">{taxi.ultima_tecnico_mecanica.split("T")[0]}</td>
                  <td>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer mr-3">
                      Editar
                    </button>
                    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded cursor-pointer">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Panel;
