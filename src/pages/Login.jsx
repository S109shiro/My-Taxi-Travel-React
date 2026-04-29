// Estilos de tailwind
import "./login.css";

// Imagen del login
import imgLogin from "../assets/imgLogin/login-image.jpg"
import logo from "../../public/icon.svg"
import { useEffect } from "react";



function Login() {
  useEffect(()=>{
    document.title = "My Taxi Travel - Login";
  })
  
  return (
    <main className="flex-grow flex justify-center items-center px-4 py-10 mt-30 mb-30">
      <div className="flex flex-col md:flex-row shadow-lg rounded-xl overflow-hidden max-w-6xl w-full bg-[var(--tarjeta_color)]">
        <img
          className="w-full md:w-1/2 h-60 md:h-auto bg-cover bg-center"
          src={imgLogin}
        />

        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 md:p-12">
          <div className="flex flex-col items-center mb-6">
            <img
              className="icono h-12 md:h-14 w-16 md:w-20 mb-2"
              src= {logo}
              alt="Logo My Taxi Travel"
            />
            <h1 className="titulo text-xl font-semibold text-gray-700">My Taxi Travel</h1>
          </div>

          <form className="flex flex-col items-center space-y-5 w-full max-w-sm">
            <input
              type="text"
              placeholder="Correo Electrónico"
              className="w-full bg-gray-100 rounded-lg px-5 py-2 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50"
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="w-full bg-gray-100 rounded-lg px-5 py-2 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50"
              required
            />

            <div className="flex items-center w-full space-x-2">
              <input
                id="recordarDatos"
                name="recordarDatos"
                type="checkbox"
                className="accent-[var(--check)]"
              />
              <label
                htmlFor="recordarDatos"
                className="text-sm font-semibold text-gray-400 cursor-pointer"
              >
                Recordar datos
              </label>
            </div>

            <button className="boton uppercase w-full py-2 rounded-md text-white bg-[var(--colorBoton)] hover:bg-gray-300 font-medium transition cursor-pointer">
              Ingresar
            </button>

            <a
              href="#"
              className="olvidar text-sm font-medium text-gray-400 hover:text-[#2C2C2C] hover:underline"
            >
              Olvidé mi contraseña
            </a>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
