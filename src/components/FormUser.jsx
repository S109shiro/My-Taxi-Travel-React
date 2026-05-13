import { useEffect } from "react";

function FormUser() {
  useEffect(()=>{
      document.title = "My Taxi Travel - Actualizar datos"
  })
  
  // Arreglar variables
  return (
    <>
      <form
        className="formulario lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 rounded shadow-lg"
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
              min={fechaMinima()}
              max={fechaMaxima()}
              value={form.fecha_nacimiento}
              onChange={getDataForm}
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="Ingrese una contraseña">
              Ingrese una contraseña
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
              {confirmarContrasena && form.contrasena !== confirmarContrasena
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
            <label for="terminos" className="ml-2">
              Acepto los terminos y condiciones
            </label>
          </div>
        </div>

        <button
          className="text-white bg-[#2C2C2C] hover:bg-gray-300 hover:text-black border-0 py-2 px-8 focus:outline-none rounded text-lg cursor-pointer"
          type="submit"
          disabled={cargando}
        >
          {cargando ? "Registrando..." : "Registrarse"}
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
    </>
  );
}

export default FormUser;
