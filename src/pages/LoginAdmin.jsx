// Estilos de tailwind
import "./login.css";

// Imagen del login
import imgLogin from "../assets/imgLogin/login_admin.jpg";
import logo from "../../public/iconAdmin.svg";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

function LoginAdmin() {
  useEffect(() => {
    document.title = "My Taxi Travel - Login Administrador";
  });

  const navigate = useNavigate();

  // Mensajes toast por mostrar
  const mensajeErrorServidor = useRef(null);
  const mensajeErrorLogin = useRef(null);
  const mensajeExitosoLogin = useRef(null);

  {
    /* Estructura para el login */
  }
  const [login, setLogin] = useState({
    email: "",
    contrasena: "",
  });

  const [cargando, setCargando] = useState(false);

  {
    /* Obtener datos desde el form con name y value, estos se definen en el form */
  }
  const getDataLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCargando(true);

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 1000);

    try {
      const response = await fetch(
        "http://localhost:8080/administrador/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
          signal: controller.signal,
        },
      );
      clearTimeout(timeout);

      if (!response.ok) {
        setCargando(false);
        mensajeErrorLogin.current.show({
          severity: "error",
          summary: "Error",
          detail: "El administrador no existe o ingresaste credenciales incorrectas",
          life: 2000,
        })
        return;
      } else {
        const data = await response.json();
        localStorage.setItem("nombreAdministrador", data.nombreAdministrador);
        localStorage.setItem("idAdmin", data.idAdmin);
        localStorage.setItem("token", data.token);
        mensajeExitosoLogin.current.show({
          severity: "success",
          summary: "Inicio de sesion correcto",
          detail: `Bienvenid@ ${data.nombreAdministrador}`,
          life: 2000,
        })
        setTimeout(()=>{
          window.dispatchEvent(new Event("storage"));
          navigate("/panel");
        }, 2000)
      }
    } catch (e) {
      if (e.name === "AbortError") {
        mensajeErrorServidor.current.show({
          severity: "error",
          summary: "Error",
          detail:
            "El servidor tardo demasiado en responder, intentalo mas tarde",
          life: 2000,
        });
        setTimeout(() => {
          setCargando(false);
        }, 2000);
      }
    }
  };

  return (
    <>
      <Toast ref={mensajeErrorServidor} pt={{
        root: {className: "toastErrorServidor"}
      }}/>
      <Toast ref={mensajeErrorLogin} pt={{
        root: {className: "toastErrorLogin"}
      }}/>
      <Toast ref={mensajeExitosoLogin} pt={{
        root: {className: "toastExitosoLogin"}
      }}/>

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
                src={logo}
                alt="Logo My Taxi Travel"
              />
              <h1 className="titulo text-xl font-semibold text-gray-700">
                My Taxi Travel
              </h1>
            </div>

            <form
              className="flex flex-col items-center space-y-5 w-full max-w-sm"
              onSubmit={handleSubmit}
            >
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
              <button
                className="boton uppercase w-full py-2 rounded-md text-white bg-[var(--colorBoton)] hover:bg-gray-300 font-medium transition cursor-pointer"
                type="submit"
                disabled={cargando}
              >
                {cargando ? "Ingresando..." : "Ingresar"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginAdmin;
