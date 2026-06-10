import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

import cambiarTema from "../components/bCambiarTema";
import "./panel.css";

// Validacion de contraseña (igual que en el otro componente)
const validarContrasena = (contrasena) => {
  if (contrasena.length < 4)
    return "La contraseña debe tener al menos 4 caracteres";
  if (!/[A-Z]/.test(contrasena))
    return "La contraseña debe tener al menos una mayúscula";
  if (!/[0-9]/.test(contrasena))
    return "La contraseña debe tener al menos un número";
  return null;
};

function Panel() {
  const [usuarios, setUsuarios] = useState([]);
  const [conductores, setConductores] = useState([]);
  const [taxis, setTaxis] = useState([]);

  // Modals
  const [modalAbiertoUsuario, setModalAbiertoUsuario] = useState(false);
  const [modalAbiertoCrearTaxi, setModalAbiertoCrearTaxi] = useState(false);
  const [modalAbiertoEditarTaxi, setModalAbiertoEditarTaxi] = useState(false); // nuevo modal editar taxi

  // ID entidades
  const [usuarioIdEditar, setUsuarioIdEditar] = useState(null);
  const [taxiIdEditar, setTaxiIdEditar] = useState(null);

  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [cargando, setCargando] = useState(false);

  // Objetos roles
  const [formUser, setFormUser] = useState({
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

  const [formTaxi, setFormTaxi] = useState({
    placa: "",
    modelo: "",
    ultima_tecnico_mecanica: "",
  });

  // Toasts
  const mensajeCerrarSesionAdministrador = useRef(null);
  const mensajeContrasenasDistintas = useRef(null);
  const mensajeContrasena = useRef(null);
  const mensajeActualizacionExitosa = useRef(null);
  const mensajeErrorServidor = useRef(null);
  const mensajeEliminacion = useRef(null);
  const mensajeCreacion = useRef(null);
  const mensajeInformativo = useRef(null);

  const nombreAdmin = localStorage.getItem("nombreAdministrador");
  const navigate = useNavigate();

  function navReset(url) {
    navigate(url, { replace: true });
  }

  // Cargar datos iniciales
  useEffect(() => {
    document.title = "Panel de Administracion";

    const cargarUsuarios = async () => {
      try {
        const res = await fetch("http://localhost:8080/usuario/getAll", {
          headers: { "Content-Type": "application/json" },
        });
        setUsuarios(await res.json());
      } catch (e) {
        console.error("Error cargando usuarios:", e);
      }
    };

    const cargarConductores = async () => {
      try {
        const res = await fetch("http://localhost:8080/conductor/getAll", {
          headers: { "Content-Type": "application/json" },
        });
        setConductores(await res.json());
      } catch (e) {
        console.error("Error cargando conductores:", e);
      }
    };

    const cargarTaxis = async () => {
      try {
        const res = await fetch("http://localhost:8080/taxi/getAll", {
          headers: { "Content-Type": "application/json" },
        });
        setTaxis(await res.json());
      } catch (e) {
        console.error("Error cargando taxis:", e);
      }
    };

    cargarUsuarios();
    cargarConductores();
    cargarTaxis();
  }, []);

  // Cargar datos del usuario al abrir el modal
  useEffect(() => {
    if (!usuarioIdEditar) return;

    const obtenerUsuario = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/usuario/get/${usuarioIdEditar}`,
          {
            headers: { "Content-Type": "application/json" },
          },
        );
        const data = await res.json();
        setFormUser({
          nombre: data.nombre,
          primer_apellido: data.primer_apellido,
          segundo_apellido: data.segundo_apellido,
          edad: data.edad,
          numero_identificacion: data.numero_identificacion,
          email: data.email,
          sexo: data.sexo,
          numero_telefono: data.numero_telefono,
          fecha_nacimiento: data.fecha_nacimiento,
          contrasena: "",
        });
        setConfirmarContrasena("");
      } catch (e) {
        console.error("Error al obtener usuario a editar:", e);
      }
    };

    obtenerUsuario();
  }, [usuarioIdEditar]);

  // PUT para actualizar usuario — con validaciones
  const actualizarUsuario = async () => {
    // Validar que las contraseñas coincidan
    if (formUser.contrasena !== confirmarContrasena) {
      mensajeContrasenasDistintas.current.show({
        severity: "warn",
        summary: "Error en el formulario",
        detail: "Las contraseñas son distintas",
        life: 2000,
      });
      return;
    }

    // Validar formato de contraseña
    const error = validarContrasena(formUser.contrasena);
    if (error) {
      mensajeContrasena.current.show({
        severity: "warn",
        summary: "Error en el formulario",
        detail: error,
        life: 2000,
      });
      return;
    }

    setCargando(true);

    const bodyRequestUpdate = {
      id_usuario: usuarioIdEditar,
      nombre: formUser.nombre,
      primer_apellido: formUser.primer_apellido,
      segundo_apellido: formUser.segundo_apellido,
      edad: formUser.edad,
      numero_identificacion: formUser.numero_identificacion,
      email: formUser.email,
      sexo: formUser.sexo,
      documento_identidad: "www.midocumento.com",
      numero_telefono: formUser.numero_telefono,
      fecha_nacimiento: formUser.fecha_nacimiento.split("T")[0] + "T12:00:00", // Evita bug -1 dia
      contrasena: formUser.contrasena,
    };

    try {
      const response = await fetch("http://localhost:8080/usuario/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRequestUpdate),
      });

      if (response.ok) {
        mensajeActualizacionExitosa.current.show({
          severity: "success",
          summary: "Usuario Actualizado",
          detail: "La actualización de datos fue exitosa",
          life: 2000,
        });
        // Refrescar lista
        const data = await fetch("http://localhost:8080/usuario/getAll").then(
          (r) => r.json(),
        );
        setUsuarios(data);
        setTimeout(() => {
          setModalAbiertoUsuario(false);
          setUsuarioIdEditar(null);
          setCargando(false);
        }, 2000);
      }
    } catch (e) {
      mensajeErrorServidor.current.show({
        severity: "error",
        summary: "Error en el servidor",
        detail: "El servidor tardó demasiado en responder, inténtalo más tarde",
        life: 2000,
      });
      setCargando(false);
    }
  };

  // DELETE para eliminar un usuario
  const eliminarUsuario = async (idUsuario) => {
    confirmDialog({
      message: "¿Seguro que quieres eliminar tu cuenta?",
      header: "Eliminar cuenta",
      group: "eliminarUsuario",
      icon: "pi pi-times-circle",
      defaultFocus: "reject",
      acceptLabel: "Aceptar",
      acceptClassName: "p-button-danger",
      rejectLabel: "Cancelar",
      accept: async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/usuario/delete/${idUsuario}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          if (response.ok) {
            // Quitar el usuario de la lista sin hacer otro fetch
            setUsuarios((prev) =>
              prev.filter((u) => u.id_usuario !== idUsuario),
            );
            mensajeEliminacion.current.show({
              severity: "success",
              summary: "Cuenta Eliminada",
              detail: "Se ha eliminado la cuenta correctamente",
              life: 2000,
            });
          }
        } catch (error) {
          mensajeErrorServidor.current.show({
            severity: "error",
            summary: "Error en el servidor",
            detail:
              "El servidor tardó demasiado en responder, inténtalo más tarde",
            life: 2000,
          });
        }
      },
      reject: () => {
        mensajeEliminacion.current.show({
          severity: "info",
          summary: "Proceso Cancelado",
          detail: "Se ha cancelado la eliminacion de la cuenta",
          life: 2000,
        });
      },
    });
  };

  // LOGICA PARA LOS TAXIS
  // Crear un taxi
  const crearTaxi = async () => {
    if (
      Object.values(formTaxi).some(
        (valorObjecto) => valorObjecto === "" || valorObjecto === null,
      )
    ) {
      mensajeInformativo.current.show({
        severity: "info",
        summary: "Datos incompletos",
        detail: "Llena todos los campos antes de crear un taxi",
        life: 2000,
      });
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/taxi/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formTaxi,
          ultima_tecnico_mecanica:
            formTaxi.ultima_tecnico_mecanica + "T12:00:00",
        }),
      });
      if (response.ok) {
        const data = await fetch("http://localhost:8080/taxi/getAll").then(
          (r) => r.json(),
        );
        setTaxis(data);
        mensajeCreacion.current.show({
          severity: "success",
          summary: "Taxi Creado",
          detail: "La creacion del taxi fue exitosa",
          life: 2000,
        });
        setTimeout(() => {
          setModalAbiertoCrearTaxi(false);
        }, 2000);
      }
    } catch (error) {
      mensajeErrorServidor.current.show({
        severity: "error",
        summary: "Error en el servidor",
        detail: "No se puede crear el taxi. El servidor tardó demasiado en responder, inténtalo más tarde",
        life: 2000,
      });
    }
  };

  // Actualizar un taxi

  // Cargar datos del taxi al abrir el modal
  useEffect(() => {
    if (!taxiIdEditar) return;
    const obtenerTaxi = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/taxi/get/${taxiIdEditar}`,
          {
            headers: { "Content-Type": "application/json" },
          },
        );
        const data = await response.json();
        setFormTaxi({
          placa: data.placa,
          modelo: data.modelo,
          ultima_tecnico_mecanica: data.ultima_tecnico_mecanica,
        });
      } catch (e) {
        console.error("Error al obtener taxi a editar:", e);
      }
    };

    obtenerTaxi();
  }, [taxiIdEditar]);

  // PUT para actualizar taxi
  const actualizarTaxi = async () => {
    const bodyRequestUpdate = {
      id_taxi: taxiIdEditar,
      placa: formTaxi.placa,
      modelo: formTaxi.modelo,
      ultima_tecnico_mecanica: formTaxi.ultima_tecnico_mecanica
    };

    try{
      const response = await fetch("http://localhost:8080/taxi/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRequestUpdate)
      })
      if(response.ok){
        alert("Yeii")
        const data = await fetch("http://localhost:8080/taxi/getAll").then((r) => r.json());
        setTaxis(data);
        setTimeout(() => {
          setModalAbiertoEditarTaxi(false);
          setTaxiIdEditar(null);
          setCargando(false);
        }, 2000);
      }
      else{
        console.log(response)
      }
      
      
    }catch(e){
      console.log(e)
    }
  }



  // Eliminar un taxi
  const eliminarTaxi = async (idTaxi) => {
    confirmDialog({
      message: "¿Seguro que quieres eliminar este taxi?",
      group: "eliminarTaxi",
      header: "Eliminar taxi",
      icon: "pi pi-times-circle",
      defaultFocus: "reject",
      acceptLabel: "Aceptar",
      acceptClassName: "p-button-danger",
      rejectLabel: "Cancelar",
      accept: async () => {
        try {
          const response = await fetch(
            `http://localhost:8080/taxi/delete/${idTaxi}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          if (response.ok) {
            // Quitar el taxi de la lista sin hacer otro fetch
            setTaxis((prev) => prev.filter((u) => u.id_taxi !== idTaxi));
            mensajeEliminacion.current.show({
              severity: "success",
              summary: "Taxi Eliminado",
              detail: "Se ha eliminado el taxi correctamente",
              life: 2000,
            });
          }
          if (!response.ok) {
            mensajeErrorServidor.current.show({
              severity: "error",
              summary: "Taxi en uso",
              detail: "El taxi esta en uso, no se puede eliminar",
              life: 2000,
            });
          }
        } catch (error) {
          mensajeErrorServidor.current.show({
            severity: "error",
            summary: "Error en el servidor",
            detail: "El servidor tardó demasiado en responder, inténtalo más tarde",
            life: 2000,
          });
        }
      },
      reject: () => {
        mensajeEliminacion.current.show({
          severity: "info",
          summary: "Proceso Cancelado",
          detail: "Se ha cancelado la eliminacion de la cuenta",
          life: 2000,
        });
      },
    });
  };

  function cerrarSesionAdmin() {
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

  // Abrir Modal a la hora de actualizar usuario
  const abrirModalUsuario = (usuario) => {
    setUsuarioIdEditar(usuario.id_usuario);
    setModalAbiertoUsuario(true);
  };

  // Abrir modal a la hora de crear taxi
  const abrirModalCrearTaxi = () => {
    setFormTaxi({ placa: "", modelo: "", ultima_tecnico_mecanica: "" }); // limpia el form
    setTaxiIdEditar(null);
    setModalAbiertoCrearTaxi(true);
  };

  // Abrir modal a la hora de editar taxi
  const abrirModalEditarTaxi = (taxi) => {
    setTaxiIdEditar(taxi.id_taxi);
    setModalAbiertoEditarTaxi(true);
  };

  const handleFormUser = (campo, valor) => {
    setFormUser((prev) => ({ ...prev, [campo]: valor }));
  };

  const inputClass =
    "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";

  return (
    <>
      {/* Toasts */}
      <Toast
        ref={mensajeCerrarSesionAdministrador}
        position="center"
        pt={{ root: { className: "mensajeCerrarSesionAdmin" } }}
      />
      <Toast ref={mensajeContrasenasDistintas} position="center" />
      <Toast ref={mensajeContrasena} position="center" />
      <Toast ref={mensajeActualizacionExitosa} position="center" />
      <Toast
        ref={mensajeErrorServidor}
        pt={{ root: { className: "toastMensajeErrorServidor" } }}
      />
      <Toast
        ref={mensajeEliminacion}
        pt={{ root: { className: "toastMensajeEliminacion" } }}
      />
      <Toast
        ref={mensajeCreacion}
        position="center"
        pt={{ root: { className: "toastMensajeCreacion" } }}
      />
      <Toast
        ref={mensajeInformativo}
        pt={{ root: { className: "toastMensajeInformativo" } }}
      />
      <ConfirmDialog
        group="eliminarUsuario"
        pt={{ icon: { className: "iconoEliminar" } }}
      />
      <ConfirmDialog
        group="eliminarTaxi"
        pt={{ icon: { className: "iconoEliminar" } }}
      />

      {/* Navbar */}
      <div className="bg-[#FEBC2F] grid grid-cols-4 items-center px-6 py-3">
        <h1 className="col-span-3 text-sm font-bold uppercase tracking-widest">
          Panel de administrador — {nombreAdmin}
        </h1>
        <div className="flex justify-end">
          <button
            onClick={cambiarTema}
            id="boton-tema"
            className="inline-flex items-center border-1 border-black bg-[#2C2C2C] rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black text-base mt-4 md:mt-0 cursor-pointer transition delay-100 ease-in-out text-white mr-3"
          >
            Modo Oscuro 🌙
          </button>
          <button
            className="flex items-center gap-2 bg-white border border-[#181818] text-[#181818] text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#181818] hover:text-white transition-all duration-200 shadow-sm cursor-pointer"
            onClick={cerrarSesionAdmin}
          >
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

      {/* Tabla Usuarios */}
      <div className="tb_usuarios m-5 mb-10 text-[var(--colorText)]">
        <h2 className="text-center uppercase text-lg mb-2 font-bold">
          Usuarios registrados en la plataforma
        </h2>
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Nombre</th>
                <th className="px-6 py-3 font-medium">Apellidos</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">
                  Numero de identificacion
                </th>
                <th className="px-6 py-3 font-medium">Numero de celular</th>
                <th className="px-6 py-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr
                  key={usuario.id_usuario}
                  className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                >
                  <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {usuario.id_usuario}
                  </td>
                  <td className="px-6 py-4">{usuario.nombre}</td>
                  <td className="px-6 py-4">
                    {usuario.primer_apellido} {usuario.segundo_apellido}
                  </td>
                  <td className="px-6 py-4">{usuario.email}</td>
                  <td className="px-6 py-4">{usuario.numero_identificacion}</td>
                  <td className="px-6 py-4">{usuario.numero_telefono}</td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer mr-3"
                      onClick={() => abrirModalUsuario(usuario)}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded cursor-pointer"
                      onClick={() => {
                        eliminarUsuario(usuario.id_usuario);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabla Conductores */}
      <div className="tb_conductores m-5 mb-10 text-[var(--colorText)]">
        <h2 className="text-center uppercase text-lg mb-2 font-bold">
          Conductores registrados en la plataforma
        </h2>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3">
          Crear Conductor
        </button>
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Nombre</th>
                <th className="px-6 py-3 font-medium">Apellidos</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">
                  Numero de identificacion
                </th>
                <th className="px-6 py-3 font-medium">Numero de celular</th>
                <th className="px-6 py-3 font-medium">ID Taxi Utilizado</th>
                <th className="px-6 py-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {conductores.map((conductor) => (
                <tr
                  key={conductor.id_conductor}
                  className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                >
                  <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {conductor.id_conductor}
                  </td>
                  <td className="px-6 py-4">{conductor.nombre}</td>
                  <td className="px-6 py-4">
                    {conductor.primer_apellido} {conductor.segundo_apellido}
                  </td>
                  <td className="px-6 py-4">{conductor.email}</td>
                  <td className="px-6 py-4">
                    {conductor.numero_identificacion}
                  </td>
                  <td className="px-6 py-4">{conductor.numero_telefono}</td>
                  <td className="px-6 py-4">{conductor.taxi_en_uso.id_taxi}</td>
                  <td className="px-6 py-4">
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

      {/* Tabla Taxis */}
      <div className="tb_taxis m-5 text-[var(--colorText)]">
        <h2 className="text-center uppercase text-lg mb-2 font-bold">
          Taxis registrados en la plataforma
        </h2>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-3"
          onClick={abrirModalCrearTaxi}
        >
          Crear Taxi
        </button>
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Placa</th>
                <th className="px-6 py-3 font-medium">Modelo</th>
                <th className="px-6 py-3 font-medium">Ult. Tecnicomecanica</th>
                <th className="px-6 py-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {taxis.map((taxi) => (
                <tr
                  key={taxi.id_taxi}
                  className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                >
                  <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {taxi.id_taxi}
                  </td>
                  <td className="px-6 py-4">{taxi.placa}</td>
                  <td className="px-6 py-4">{taxi.modelo}</td>
                  <td className="px-6 py-4">
                    {taxi.ultima_tecnico_mecanica.split("T")[0]}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer mr-3"
                      onClick={() => abrirModalEditarTaxi(taxi)} // ← arreglado
                    >
                      Editar
                    </button>
                    <button
                      className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded cursor-pointer"
                      onClick={() => {
                        eliminarTaxi(taxi.id_taxi);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal editar usuario */}
      <Dialog
        visible={modalAbiertoUsuario}
        position="top"
        modal
        header="Editar Usuario"
        style={{ width: "50rem" }}
        onHide={() => setModalAbiertoUsuario(false)}
      >
        <div className="bg-white p-8 flex flex-col w-full mb-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mb-4">
              <label>Nombre</label>
              <input
                type="text"
                className={inputClass}
                value={formUser.nombre}
                onChange={(e) => handleFormUser("nombre", e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label>Primer apellido</label>
              <input
                type="text"
                className={inputClass}
                value={formUser.primer_apellido}
                onChange={(e) =>
                  handleFormUser("primer_apellido", e.target.value)
                }
              />
            </div>
            <div className="relative mb-4">
              <label>Segundo apellido</label>
              <input
                type="text"
                className={inputClass}
                value={formUser.segundo_apellido}
                onChange={(e) =>
                  handleFormUser("segundo_apellido", e.target.value)
                }
              />
            </div>
            <div className="relative mb-4">
              <label>Edad</label>
              <input
                type="number"
                min={18}
                max={100}
                className={inputClass}
                value={formUser.edad}
                onChange={(e) => handleFormUser("edad", e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label>Sexo</label>
              <select
                className={inputClass}
                value={formUser.sexo}
                onChange={(e) => handleFormUser("sexo", e.target.value)}
              >
                <option value="" disabled>
                  Elige tu sexo
                </option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="relative mb-4">
              <label>Numero de documento</label>
              <input
                type="number"
                max={2147483647}
                className={inputClass}
                value={formUser.numero_identificacion}
                onChange={(e) =>
                  handleFormUser("numero_identificacion", e.target.value)
                }
              />
            </div>
            <div className="relative mb-4">
              <label>Correo Electronico</label>
              <input
                type="email"
                className={inputClass}
                value={formUser.email}
                onChange={(e) => handleFormUser("email", e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label>Numero de telefono</label>
              <input
                type="number"
                className={inputClass}
                value={formUser.numero_telefono}
                onChange={(e) =>
                  handleFormUser("numero_telefono", e.target.value)
                }
              />
            </div>
            <div className="relative mb-4">
              <label>Fecha de nacimiento</label>
              <input
                type="date"
                className={inputClass}
                value={
                  formUser.fecha_nacimiento
                    ? formUser.fecha_nacimiento.split("T")[0]
                    : ""
                }
                onChange={(e) =>
                  handleFormUser("fecha_nacimiento", e.target.value)
                }
              />
            </div>
            <div className="relative mb-4">
              <label>Nueva contraseña</label>
              <input
                type="password"
                className={inputClass}
                value={formUser.contrasena}
                onChange={(e) => handleFormUser("contrasena", e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label>Confirme su contraseña</label>
              <input
                type="password"
                className={inputClass}
                value={confirmarContrasena}
                onChange={(e) => setConfirmarContrasena(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded cursor-pointer mr-2"
          onClick={() => setModalAbiertoUsuario(false)}
        >
          Cancelar
        </button>

        <button
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={actualizarUsuario}
          disabled={cargando}
        >
          {cargando ? "Actualizando..." : "Actualizar datos"}
        </button>
      </Dialog>

      {/* Modal Crear taxi */}
      <Dialog
        visible={modalAbiertoCrearTaxi}
        position="top"
        modal
        header="Crear Taxi"
        style={{ width: "50rem" }}
        onHide={() => setModalAbiertoCrearTaxi(false)}
      >
        <div className="bg-white p-8 flex flex-col w-full mb-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mb-4">
              <label>Placa</label>
              <input
                type="text"
                className={inputClass}
                value={formTaxi.placa}
                onChange={(e) =>
                  setFormTaxi((prev) => ({ ...prev, placa: e.target.value }))
                }
                maxLength={6}
              />
            </div>
            <div className="relative mb-4">
              <label>Modelo</label>
              <select
                className={inputClass}
                value={formTaxi.modelo}
                onChange={(e) =>
                  setFormTaxi((prev) => ({ ...prev, modelo: e.target.value }))
                }
              >
                <option value="" disabled>Selecciona una marca</option>
                <option value="Toyota">Toyota</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Renault">Renault</option>
                <option value="Mazda">Mazda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Kia">Kia</option>
                <option value="Ford">Ford</option>
                <option value="Nissan">Nissan</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Mitsubishi">Mitsubishi</option>
              </select>
            </div>
            <div className="relative mb-4">
              <label>Ultima Tecnico Mecanica</label>
              <input
                type="date"
                className={inputClass}
                value={formTaxi.ultima_tecnico_mecanica}
                onChange={(e) =>
                  setFormTaxi((prev) => ({
                    ...prev,
                    ultima_tecnico_mecanica: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>
        <button
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded cursor-pointer mr-2"
          onClick={() => setModalAbiertoCrearTaxi(false)}
        >
          Cancelar
        </button>
        <button
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={crearTaxi}
          disabled={cargando}
        >
          {cargando ? "Creando..." : "Crear Taxi"}
        </button>
      </Dialog>

      {/* Modal editar taxi */}
      <Dialog
        visible={modalAbiertoEditarTaxi}
        position="top"
        modal
        header="Editar Taxi"
        style={{ width: "50rem" }}
        onHide={() => setModalAbiertoEditarTaxi(false)}
      >
        <div className="bg-white p-8 flex flex-col w-full mb-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mb-4">
              <label>Placa</label>
              <input
                type="text"
                className={inputClass}
                value={formTaxi.placa}
                onChange={(e) =>
                  setFormTaxi((prev) => ({ ...prev, placa: e.target.value }))
                }
                maxLength={6}
              />
            </div>
            <div className="relative mb-4">
              <label>Modelo</label>
              <select
                className={inputClass}
                value={formTaxi.modelo}
                onChange={(e) =>
                  setFormTaxi((prev) => ({ ...prev, modelo: e.target.value }))
                }
              >
                <option value="" disabled>Selecciona una marca</option>
                <option value="Toyota">Toyota</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Renault">Renault</option>
                <option value="Mazda">Mazda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Kia">Kia</option>
                <option value="Ford">Ford</option>
                <option value="Nissan">Nissan</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Mitsubishi">Mitsubishi</option>
              </select>
            </div>
            <div className="relative mb-4">
              <label>Ultima Tecnico Mecanica</label>
              <input
                type="date"
                className={inputClass}
                value={formTaxi.ultima_tecnico_mecanica ? formTaxi.ultima_tecnico_mecanica.split("T")[0] : ""}
                onChange={(e) =>
                  setFormTaxi((prev) => ({
                    ...prev,
                    ultima_tecnico_mecanica: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>
        <button
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded cursor-pointer mr-2"
          onClick={() => setModalAbiertoEditarTaxi(false)}
        >
          Cancelar
        </button>
        <button
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={cargando} onClick={actualizarTaxi}
        >
          {cargando ? "Actualizando..." : "Actualizar Taxi"}
        </button>
      </Dialog>
    </>
  );
}

export default Panel;