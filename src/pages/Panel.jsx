import { useEffect, useState } from "react";
import "./panel.css";

function Panel() {
  // Para guardar los usuarios
  const [usuarios, setUsuarios] = useState([]);
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
        console.error(error);
      }
    };
    cargarUsuarios();



    
    




  });

  return (
    <>
      <div className="bg-[#FEBC2F] grid grid-cols-4 items-center px-6 py-3">
        <h1 className="col-span-3 text-sm font-bold uppercase tracking-widest">
          Panel de administrador — {nombreAdmin}
        </h1>
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-white border border-[#181818] text-[#181818] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#181818] hover:text-white transition-all duration-200 shadow-sm cursor-pointer">
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

      <div className="tb_usuarios m-5">
        <h2 className="text-center uppercase text-lg mb-2 font-bold">
          Usuarios registrados en la plataforma
        </h2>
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

      <div className="tb_conductores m-5">
        <h2 className="text-center uppercase text-lg mb-2 font-bold">
          Usuarios registrados en la plataforma
        </h2>
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
    </>
  );
}

export default Panel;
