import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormUser() {
  // Obtener id del usuario
  const idUsuario = localStorage.getItem("idUser");

  const navigate = useNavigate();
  const navUrl = (url) => navigate(url);
  const navReset = (url) => navigate(url, {replace: true})

  const validarContrasena = (contrasena) => {
    if (contrasena.length < 4) {
      return "La contraseña debe tener al menos 4 caracteres";
    }
    if (!/[a-zA-Z]/.test(contrasena)) {
      return "La contraseña debe tener al menos una letra";
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contrasena)) {
      return "La contraseña debe tener al menos un signo especial";
    }
    return null;
  };

  const [form, setForm] = useState({
    nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    edad: 0,
    numero_identificacion: 0,
    email: "",
    sexo: "",
    numero_telefono: "",
    fecha_nacimiento: "",
    contrasena: "",
  });

  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [cargando, setCargando] = useState(false);

  const getDataForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Validar contrasena
    const error = validarContrasena(form.contrasena);
    if (error) {
      alert(error);
      return;
    }

    setCargando(true);

    // Se inicia el PUT al enviar la actualizacion de datos

    // Creacion del objeto con los nuevos datos indicandolos que son valores sacados del formulario
    const bodyRequestUpdate = {
      id_usuario: idUsuario,
      nombre: form.nombre,
      primer_apellido: form.primer_apellido,
      segundo_apellido: form.segundo_apellido,
      edad: form.edad,
      numero_identificacion: form.numero_identificacion,
      email: form.email,
      sexo: form.sexo,
      documento_identidad: "www.midocumento.com",
      numero_telefono: form.numero_telefono,
      fecha_nacimiento: form.fecha_nacimiento + "T12:00:00",   // Solucion al error de actualizar -1 dia
      contrasena: form.contrasena,
    };

    // FETH PUT
    try {
      const response = await fetch("http://localhost:8080/usuario/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequestUpdate),
      });

      if (response.ok) {
        localStorage.setItem("nombreUsuario", form.nombre);
        window.dispatchEvent(new Event("storage"));
        alert("Datos actualizados");
        setCargando(false);
        navReset("/");
      }
    } catch (error) {
      alert(error);
      setCargando(false);
    }
  };

  useEffect(() => {
    document.title = "My Taxi Travel - Actualizar datos";

    // Obtener los datos del usuario con el ID
    const cargarDatosUsuario = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/usuario/get/${idUsuario}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          },
        );

        // Obtenemos los datos y se ponen en el formulario
        // Datos consultados en JSON
        const data = await response.json();
        // Creamos un objeto con los datos recuperados
        setForm({
          nombre: data.nombre,
          primer_apellido: data.primer_apellido,
          segundo_apellido: data.segundo_apellido,
          edad: data.edad,
          numero_identificacion: data.numero_identificacion,
          email: data.email,
          sexo: data.sexo,
          numero_telefono: data.numero_telefono,
          fecha_nacimiento: data.fecha_nacimiento
            ? data.fecha_nacimiento.split("T")[0]
            : "",
          contrasena: "",
        });
      } catch (e) {
        console.error(e);
      }
    };
    // Ejecutamos el fetch
    cargarDatosUsuario();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="contenedor container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Actualiza tus datos
            </h1>
            <p className="leading-relaxed mt-4">
              Actualiza tus datos de forma rapida y efectiva. Solamente cambia los datos antiguos que quieres actualizar por los nuevos. Eso si, no puedes actualizar tu fecha de nacimiento. De resto, puedes actualizar lo que gustes.
            </p>
          </div>
          <form
            className="formulario lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 rounded shadow-lg mb-5"
            onSubmit={handleSubmit}
          >
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Actualizacion de datos
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
                <label htmlFor="Sexo">Sexo</label>
                <select
                  id="sexo"
                  name="sexo"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.sexo}
                  onChange={getDataForm}
                  required
                >
                  <option value="" disabled selected>
                    Elige tu sexo
                  </option>
                  <option value="Femenino">Femenino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="relative mb-4">
                <label htmlFor="Numero de documento">Numero de documento</label>
                <input
                  type="number"
                  id="document-number"
                  name="numero_identificacion"
                  max={2147483647}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={form.numero_identificacion}
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
                  value={form.fecha_nacimiento}
                  onChange={getDataForm}
                  readOnly
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="Ingrese una nueva contraseña">
                  Nueva contraseña
                </label>
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
                <label htmlFor="Confirme su contraseña">
                  {confirmarContrasena &&
                  form.contrasena !== confirmarContrasena
                    ? "Las contraseñas no coinciden"
                    : "Confirme su contraseña"}
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmar_contrasena"
                  className={`w-full rounded border py-1 px-3 outline-none transition-colors duration-200 ease-in-out
                  ${
                    form.contrasena !== confirmarContrasena
                      ? "bg-red-100 border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "bg-green-100 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                  } focus:ring-2 text-base text-gray-700 leading-8`}
                  value={confirmarContrasena}
                  onChange={(e) => setConfirmarContrasena(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              className="text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black border-0 py-2 px-8 focus:outline-none rounded text-lg cursor-pointer"
              type="submit"
              disabled={cargando}
            >
              {cargando ? "Actualizando..." : "Actualizar"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default FormUser;
