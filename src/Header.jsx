// Estilos de Tailwind
import "./header.css";

// Estilos del Nav y Footer
import "./styleHF.css";

// Props: Obtiene el usuario y verifica si esta logueado
function Header({ user = {}, logIn = false }) {
  //console.log(user);
  //console.log(logIn);
  return (
    <>
      <header className="text-gray-600 body-font bg-[var(--bg)]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="index.html"
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
            <a
              className="mr-5 text-gray-900 bg-neutral-50 rounded-lg p-1"
              href="index.html"
            >
              Inicio
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="paginas/solicitarViaje/solicitudViaje.html"
            >
              Solicitar Viaje
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="paginas/sobreNosotros/sobreNosotros.html"
            >
              Sobre Nosotros
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="paginas/soporte/soporte.html"
            >
              Soporte
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              href="paginas/miCuenta/miCuenta.html"
            >
              Mi Cuenta
            </a>
          </nav>
          <a href="./paginas/login/login.html">
            <button className="inline-flex items-center bg-gray-300 border-1 border-black rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-100 hover:text-black rounded text-base mt-4 md:mt-0 cursor-pointer transition delay-100 ease-in-out mr-2">
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
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
          <a href="./paginas/login/registro.html">
            <button className="inline-flex items-center border-1 border-black bg-[#2C2C2C] rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0 cursor-pointer transition delay-100 ease-in-out text-white">
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
            </button>
          </a>
          <button
            onClick="cambiarTema()"
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

export default Header;
