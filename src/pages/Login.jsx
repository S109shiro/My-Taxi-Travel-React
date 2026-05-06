// Estilos de tailwind
import "./login.css";

// Imagen del login
import imgLogin from "../assets/imgLogin/login-image.jpg"
import logo from "../../public/icon.svg"
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";



function Login() {
  useEffect(()=>{
    document.title = "My Taxi Travel - Login";
  })

  const navUrl = useNavigate();

  {/* Estructura para el login */}
  const [login, setLogin] = useState({
    email: "",
    contrasena: ""
  })

  const [cargando, setCargando] = useState(false)

  {/* Obtener datos desde el form con name y value, estos se definen en el form */}
  const getDataLogin = (e) =>{
    //console.log(e.target.value);
    setLogin({
      ...login, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    setCargando(true)

    const controller = new AbortController()

    const timeout = setTimeout(()=>{
      controller.abort()
    }, 2000)

    try{
      const response = await fetch("http://localhost:8080/usuario/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(login),
        signal: controller.signal
      })
      clearTimeout(timeout)
      console.log("Pasamos fetch")
      const data = await response.text()
      setCargando(false)
      alert(data)
      navUrl("/")  // Si ta mal aun asi llega aca

    }catch(e){
      if(e.name === "AbortError"){
        alert("El servidor tardo demasiado en responder, intentalo mas tarde")
        setCargando(false)
      }
    }

  }






  
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

          <form className="flex flex-col items-center space-y-5 w-full max-w-sm" onSubmit={handleSubmit}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Correo Electrónico"
              className="w-full bg-gray-100 rounded-lg px-5 py-2 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50"
              value={login.email}
              onChange={getDataLogin}
              required
            />

            <input
              id="contrasena"
              name="contrasena"
              type="password"
              placeholder="Contraseña"
              className="w-full bg-gray-100 rounded-lg px-5 py-2 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50"
              value={login.contrasena}
              onChange={getDataLogin}
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

            <button className="boton uppercase w-full py-2 rounded-md text-white bg-[var(--colorBoton)] hover:bg-gray-300 font-medium transition cursor-pointer" type="submit" disabled={cargando}>
              {cargando ? "Ingresando..." : "Ingresar"}
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
