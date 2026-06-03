// Estilos de Tailwind
import "./navbar.css";

// Estilos del Nav y Footer
import "./styleHF.css";

// Importar el JS con la logica para cambiar el tema de la pagina
import cambiarTema from "./bCambiarTema";

// importacion para los enlaces del nav
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Props: Obtiene el usuario y verifica si esta logueado
function NavBar() {
  // Constante para el useNavigate
  const navigate = useNavigate();
  // Funcion para reutilizar en cada link
  function navUrl(url) {
    navigate(url);
  }
  // Reiniciar el flujo de la navegacion
  function navReset(url){
    navigate(url, {replace: true}) 
  }

  //Logueo con token y nombre
  const [nombre, setNombre] = useState(localStorage.getItem("nombreUsuario"));

  useEffect(() => {
    // Función que actualiza el nombre cuando cambia el localStorage
    const actualizarNombre = () => {
      setNombre(localStorage.getItem("nombreUsuario"));
    };

    window.addEventListener("storage", actualizarNombre);

    return () => {
      window.removeEventListener("storage", actualizarNombre);
    };
  }, []);

  const [dropdownUsuario, setDropdownUsuario] = useState(false); // Manejamos el dropdown del usuario
  const [dropdownLogin, setDropdownLogin] = useState(false); // Manejamos el dropdown del login del usuario y administrador

  function cerrarSesionUsuario(){
    localStorage.removeItem("token");
    localStorage.removeItem("nombreUsuario");
    localStorage.removeItem("idUser");
    window.dispatchEvent(new Event("storage"));
    alert("Haz cerrado sesion. Vuelve pronto");
    navReset("/login");
  }

  return (
    <>
      <header className="text-gray-600 body-font bg-[var(--bg)]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            onClick={() => {
              navUrl("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="hover:fill-white cursor-pointer transition delay-100 ease-in-out"
              viewBox="0 0 16 16"
            >
              <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
            </svg>
            <span className="ml-3 text-xl hover:text-white cursor-pointer transition delay-100 ease-in-out">
              My Taxi Travel
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-black bg-neutral-50 rounded-lg p-1"
                  : "mr-5 hover:text-gray-900 rounded-lg p-1"
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to={"/solicitarViaje"}
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-black bg-neutral-50 rounded-lg p-1"
                  : "mr-5 hover:text-gray-900 rounded-lg p-1"
              }
            >
              Solicitar Viaje
            </NavLink>

            <NavLink
              to={"/sobreNosotros"}
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-black bg-neutral-50 rounded-lg p-1"
                  : "mr-5 hover:text-gray-900 rounded-lg p-1"
              }
            >
              Sobre Nosotros
            </NavLink>

            <NavLink
              to={"/soporte"}
              className={({ isActive }) =>
                isActive
                  ? "mr-5 text-black bg-neutral-50 rounded-lg p-1"
                  : "mr-5 hover:text-gray-900 rounded-lg p-1"
              }
            >
              Soporte
            </NavLink>
          </nav>

          {!nombre && (
            <div className="relative mt-4 md:mt-0 mr-2">
              <button
                onClick={() => setDropdownLogin(!dropdownLogin)}
                className="inline-flex items-center bg-gray-300 border-1 border-black rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-100 hover:text-black text-base cursor-pointer transition delay-100 ease-in-out"
              >
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </button>
              
              {dropdownLogin && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => {
                      navUrl("/login");
                      setDropdownLogin(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                  >
                    👤 Usuario
                  </button>
                  <button
                    onClick={() => {
                      navUrl("/loginAdmin");
                      setDropdownLogin(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg"
                  >
                    🛡️ Administrador
                  </button>
                </div>
              )}
            </div>
          )}
          {nombre ? (
            <div className="relative mt-4 md:mt-0 mr-2">
              <button
                onClick={() => setDropdownUsuario(!dropdownUsuario)}
                className="inline-flex items-center bg-gray-300 border-1 border-black rounded-lg py-1 px-3 text-base cursor-pointer hover:bg-gray-100 transition delay-100 ease-in-out"
              >
                👤 {nombre}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </button>

              {dropdownUsuario && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10 ">
                  <button
                    onClick={() => {
                      navUrl("/cuenta");
                      setDropdownUsuario(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg cursor-pointer"
                  >
                    Mi Cuenta
                  </button>
                  <button
                    onClick={() => {
                      cerrarSesionUsuario()
                      setDropdownUsuario(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg cursor-pointer"
                  >
                    Cerrar Sesion
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to={"/registro"}
              className={({ isActive }) =>
                isActive
                  ? "inline-flex items-center border-1 border-black rounded-lg py-1 px-3 focus:outline-none bg-gray-200 text-black rounded text-base mt-4 md:mt-0 cursor-pointer transition delay-100 ease-in-out"
                  : "inline-flex items-center border-1 border-black bg-[#2C2C2C] rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0 cursor-pointer transition delay-100 ease-in-out text-white"
              }
            >
              Registro
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </NavLink>
          )}

          <button
            onClick={cambiarTema}
            id="boton-tema"
            className="inline-flex items-center border-1 border-black bg-[#2C2C2C] rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0 cursor-pointer transition delay-100 ease-in-out text-white"
          >
            Modo Oscuro 🌙
          </button>
        </div>
      </header>
    </>
  );
}

export default NavBar;
