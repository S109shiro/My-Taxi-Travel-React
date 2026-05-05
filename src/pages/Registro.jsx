import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registro.css";


function Registro() {
  {/* Validador de fechas */}
  function fechaMinima(){
    const fecha = new Date();
    fecha.setFullYear(fecha.getFullYear() - 100);
    return fecha.toISOString().split("T")[0]
  }

  function fechaMaxima(){
    const fecha = new Date();
    fecha.setFullYear(fecha.getFullYear() - 18);
    return fecha.toISOString().split("T")[0]
  }


  {/*Barra de titulo*/}
  const navUrl = useNavigate();
  useEffect(()=>{
    document.title = "My Taxi Travel - Registro";
    
  })


  {/*Creacion de usuario*/}
  {/* Modificacion dinamica de datos con useStatem - form guarda datos predeterminados y set dinamico*/}
  const [form, setForm] = useState({
    nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    edad: 0,
    numero_identificacion: null,
    email: "",
    sexo: "",
    documento_identidad: "www.midocumento.com",
    numero_telefono: "",
    fecha_nacimiento: "",
    calificacion_media: 0.0,
    contrasena: ""

  })
  const [confirmarContrasena, setConfirmarContrasena] = useState("")



  {/* Obtener datos desde el form con name y value, estos se definen en el form */}
  const getDataForm = (e) =>{
    console.log(e.target.value);
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }


  {/* Envio informacion al back */}
  const handleSubmit = async (e) =>{
    e.preventDefault();
  }





  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="contenedor container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Regístrate en My Taxi Travel
            </h1>
            <p className="leading-relaxed mt-4">
              Únete a nuestra comunidad y empieza a disfrutar de viajes seguros,
              rápidos y cómodos. El registro es fácil y solo te tomará unos
              minutos. Completa el formulario con tus datos básicos, confirma tu
              correo o número de teléfono ¡y listo! En pocos pasos estarás
              disfrutando de todo lo que My Taxi Travel tiene para ti.
            </p>
          </div>
          <form className="formulario lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 rounded shadow-lg">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Formulario de registro
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative mb-4 ">
                <label htmlFor="Nombre">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="nombre"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.nombre}
                  onChange={getDataForm}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="Primer apellido">Primer apellido</label>
                <input
                  type="text"
                  id="first-last-name"
                  name="primer_apellido"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.primer_apellido}
                  onChange={getDataForm}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="Segundo apellido">Segundo apellido</label>
                <input
                  type="text"
                  id="second-last-name"
                  name="segundo_apellido"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.segundo_apellido}
                  onChange={getDataForm}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="Edad">Edad</label>
                <input
                  type="number"
                  min={18}
                  max={100}
                  id="age"
                  name="edad"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.edad}
                  onChange={getDataForm}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="Numero de documento">Numero de documento</label>
                <input
                  type="number"
                  id="document-number"
                  name="documento_identidad"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.documento_identidad}
                  onChange={getDataForm}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="Correo Electronico">Correo Electronico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.email}
                  onChange={getDataForm}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="Numero de telefono">Numero de telefono</label>
                <input
                  type="number"
                  id="phone-number"
                  name="numero_telefono"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.numero_telefono}
                  onChange={getDataForm}
                  required
                />   
              </div>  
              <div className="relative mb-4">
                <label htmlFor="Fecha de nacimiento">Fecha de nacimiento</label>
                <input
                  type="date"
                  id="date-birth"
                  name="fecha_nacimiento"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  min={fechaMinima()}
                  max={fechaMaxima()}
                  value={form.fecha_nacimiento}
                  onChange={getDataForm}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="Ingrese una contraseña">Ingrese una contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="contrasena"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.contrasena}
                  onChange={getDataForm}
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="Confirme su contraseña">{confirmarContrasena && form.contrasena !== confirmarContrasena
                  ? "Las contraseñas no coinciden"
                  : "Confirme su contraseña"
                }
                  </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmar_contrasena"
                  className={`w-full rounded border py-1 px-3 outline-none transition-colors duration-200 ease-in-out
                  ${form.contrasena !== confirmarContrasena
                    ? "bg-red-100 border-red-500 focus:border-red-500 focus:ring-red-200"
                    : "bg-green-100 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                  } focus:ring-2 text-base text-gray-700 leading-8`}
                  value={confirmarContrasena}
                  onChange={(e)=> setConfirmarContrasena(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="elementos_separados">
              <div className="relative mb-4">
                <label>Adjuntar documento de identidad</label>
                <input
                  type="file"
                  name=""
                  id=""
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  accept="application/pdf"
                  required
                />
              </div>

              <div className="relative mb-4">
                <input
                  type="checkbox"
                  name="noticias"
                  id="noticias"
                  className="accent-[var(--colorTitulo)] cursor-pointer"
                />
                <label for="noticias" className="ml-2">
                  Deseo recibir noticias a mi correo electronico
                </label>
              </div>
              <div className="relative mb-4">
                <input
                  type="checkbox"
                  name="terminos"
                  id="terminos"
                  className="accent-[var(--colorTitulo)] cursor-pointer"
                  required
                />
                <label for="terminos" className="ml-2">Acepto los terminos y condiciones</label>
              </div>
            </div>

            <button className="text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black border-0 py-2 px-8 focus:outline-none rounded text-lg cursor-pointer">
              Registrarme
            </button>
            <p className="text-xs text-gray-500 mt-3">
              <a
                onClick={() => {
                  navUrl("/login");
                }}
                className="hover:underline cursor-pointer"
              >
                Ya tengo una cuenta
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Registro;
