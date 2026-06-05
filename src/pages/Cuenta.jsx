import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast"
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import imgUser from "../assets/imgUserAccount/user_usuario.jpg";
import "./cuenta.css";

function Cuenta() {
  // Constante para cambiar el nombre de usuario despues de una actualizacion de datos
  const [nameUser, setNameUser] = useState(
    localStorage.getItem("nombreUsuario"),
  );
  const idUsuario = localStorage.getItem("idUser");

  useEffect(() => {
    document.title = "My Taxi Travel - Cuenta";
    setNameUser(localStorage.getItem("nombreUsuario"));
  });

  const navigate = useNavigate();
  function navUrl(url) {
    navigate(url);
  }

  // Reiniciar el flujo de la navegacion
  function navReset(url){
    navigate(url, {replace: true}) 
  }

  //Mensaje toast
  const mensajeEliminacionUsuario = useRef(null)
  const mensajeCancelarEliminacion = useRef(null)
  const mensajeErrorServidor = useRef(null)

  // Confirmacion eliminacion cuenta (vamos aqui)
  const eliminarCuenta = async () => {
    confirmDialog({
      message: "¿Seguro que quieres eliminar tu cuenta?",
      header: "Eliminar cuenta",
      icon: 'pi pi-times-circle',
      defaultFocus: "reject",
      acceptLabel: "Aceptar",
      acceptClassName: "p-button-danger",  
      rejectLabel: "Cancelar",
      accept: async () =>{
        console.log("Aceptao")
        try {
        const response = await fetch(
          `http://localhost:8080/usuario/delete/${idUsuario}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        if(response.ok) {
          localStorage.removeItem("idUser");
          localStorage.removeItem("nombreUsuario");
          localStorage.removeItem("token");
          mensajeEliminacionUsuario.current.show({
            severity: "success",
            summary: "Cuenta Eliminada",
            detail: "Se ha eliminado la cuenta correctamente. Volveras a la pagina de inicio",
            life: 2000,
          })
          setTimeout(()=>{
            window.dispatchEvent(new Event("storage"));
            navReset("/");
          }, 2000)
          
        }
      } catch (error) {
        mensajeErrorServidor.current.show({
          severity: "error",
          summary: "Error en eliminar la cuenta",
          detail: "Ha ocurrido un error en el servidor. Vuelva a intentarlo",
          life: 2000,
        })
      }
      },
      reject: () =>{
        mensajeCancelarEliminacion.current.show({
          severity: "info",
          summary: "Proceso Cancelado",
          detail: "Se ha cancelado la eliminacion de la cuenta",
          life: 2000,
        })
      }
    })
  }

  return (
    <>
      <ConfirmDialog pt={{icon: {className: "iconoEliminar"}}}/> {/* Para la confirmacion de eliminacion de cuenta, como el toast*/}
      <Toast ref={mensajeCancelarEliminacion} pt={{root: {className: "toastMensajeCancelar"}}}/>
      <Toast ref={mensajeErrorServidor} pt={{root: {className: "toastMensajeErrorServidor"}}}/>
      <Toast ref={mensajeEliminacionUsuario} pt={{root: {className: "toastMensajeEliminacion"}}}/>
      <section className="text-gray-600 body-font mb-3">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="encabezado_usuario lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <p className="text-gray-900 text-lg title-font font-medium mb-3">
              Bienvenid@ {nameUser}
            </p>
            <img
              alt="feature"
              className="object-cover object-center h-100px rounded-[50%] hover:shadow-lg transition duration-300"
              src={imgUser}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div
              onClick={() => {
                navUrl("/cuenta/editarUsuario");
              }}
            >
              <div className="carta_usuario flex flex-col mb-10 lg:items-start items-center rounded hover:shadow-lg p-3 rounded-xl hover:bg-sky-100 cursor-pointer transition duration-300 ease-in-out">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-sky-100 text-indigo-500 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-6 h-6"
                  >
                    <path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" />
                  </svg>
                </div>

                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Editar Perfil
                  </h2>

                  <p className="leading-relaxed text-base">
                    Puedes cambiar algunos datos de tu cuenta.
                  </p>
                </div>
              </div>
            </div>
            <a
              onClick={() => {
                navUrl("/cuenta/viajesUsuario");
              }}
            >
              <div className="carta_usuario flex flex-col mb-10 lg:items-start items-center rounded hover:shadow-lg p-3 rounded-xl hover:bg-amber-100 cursor-pointer transition duration-300 ease-in-out">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-indigo-500 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-6 h-6"
                  >
                    <path d="M576 112C576 103.7 571.7 96 564.7 91.6C557.7 87.2 548.8 86.8 541.4 90.5L416.5 152.1L244 93.4C230.3 88.7 215.3 89.6 202.1 95.7L77.8 154.3C69.4 158.2 64 166.7 64 176L64 528C64 536.2 68.2 543.9 75.1 548.3C82 552.7 90.7 553.2 98.2 549.7L225.5 489.8L396.2 546.7C409.9 551.3 424.7 550.4 437.8 544.2L562.2 485.7C570.6 481.7 576 473.3 576 464L576 112zM208 146.1L208 445.1L112 490.3L112 191.3L208 146.1zM256 449.4L256 148.3L384 191.8L384 492.1L256 449.4zM432 198L528 150.6L528 448.8L432 494L432 198z" />
                  </svg>
                </div>

                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Viajes Realizados
                  </h2>

                  <p className="leading-relaxed text-base">
                    En este apartado puedes ver el historial de todos los viajes
                    que has realizado.
                  </p>
                </div>
              </div>
            </a>

            <div className="carta_usuario flex flex-col mb-10 lg:items-start items-center rounded hover:shadow-lg p-3 rounded-xl hover:bg-emerald-100 cursor-not-allowed transition duration-300 ease-in-out">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-emerald-100 text-indigo-500 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6"
                >
                  <path d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z" />
                </svg>
              </div>

              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Metodos de Pago
                </h2>

                <p className="leading-relaxed text-base">
                  Cambia el metodo de pago segun lo que mas te convenga.
                </p>
              </div>
            </div>

            <div
              className="carta_usuario flex flex-col mb-10 lg:items-start items-center rounded hover:shadow-lg p-3 rounded-xl hover:bg-red-100 cursor-pointer transition duration-300 ease-in-out"
              onClick={eliminarCuenta}
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-indigo-500 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-6 h-6"
                >
                  <path
                    d="M 13.59375 4 L 13.28125 4.28125 L 12.5625 5 L 6 5 L 6 7 L 7 7 L 7 25 C 7 26.645455 8.3545455 28 10 28 L 22 28 C 23.645455 28 25 26.645455 25 25 L 25 7 L 26 7 L 26 5 L 19.4375 5 L 18.71875 4.28125 L 18.40625 4 L 18 4 L 14 4 L 13.59375 4 z M 14.4375 6 L 17.5625 6 L 18.28125 6.71875 L 18.59375 7 L 19 7 L 23 7 L 23 25 C 23 25.554545 22.554545 26 22 26 L 10 26 C 9.4454545 26 9 25.554545 9 25 L 9 7 L 13 7 L 13.40625 7 L 13.71875 6.71875 L 14.4375 6 z M 11 11 L 11 22 L 13 22 L 13 11 L 11 11 z M 15 11 L 15 22 L 17 22 L 17 11 L 15 11 z M 19 11 L 19 22 L 21 22 L 21 11 L 19 11 z"
                    color="#000"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Eliminar la cuenta
                </h2>
                <p className="leading-relaxed text-base">
                  ¿No estas satisfecho con nosotros? Puedes eliminar tu cuenta
                  si eso deseas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cuenta;
