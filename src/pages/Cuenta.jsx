import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgUser from "../assets/imgUserAccount/user_usuario.jpg";
import "./cuenta.css";

function Cuenta() {
  useEffect(() => {
    document.title = "My Taxi Travel - Cuenta";
  });
  
  const navigate = useNavigate();
  function navUrl(url) {
    navigate(url);
  }

  const nameUser = localStorage.getItem("nombreUsuario")
  return (
    <>
      <section className="text-gray-600 body-font">
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
            <div onClick={()=>{
                navUrl("/cuenta/editarUsuario")
            }}>
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
            <a onClick={()=>{
              navUrl("/cuenta/viajesUsuario")
            }}>
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

            <div className="carta_usuario flex flex-col mb-10 lg:items-start items-center rounded hover:shadow-lg p-3 rounded-xl hover:bg-violet-100 cursor-not-allowed transition duration-300 ease-in-out">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-violet-100 text-indigo-500 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6"
                >
                  <path d="M415.9 274.5C428.1 271.2 440.9 277 446.4 288.3L465 325.9C475.3 327.3 485.4 330.1 494.9 334L529.9 310.7C540.4 303.7 554.3 305.1 563.2 314L582.4 333.2C591.3 342.1 592.7 356.1 585.7 366.5L562.4 401.4C564.3 406.1 566 411 567.4 416.1C568.8 421.2 569.7 426.2 570.4 431.3L608.1 449.9C619.4 455.5 625.2 468.3 621.9 480.4L614.9 506.6C611.6 518.7 600.3 526.9 587.7 526.1L545.7 523.4C539.4 531.5 532.1 539 523.8 545.4L526.5 587.3C527.3 599.9 519.1 611.3 507 614.5L480.8 621.5C468.6 624.8 455.9 619 450.3 607.7L431.7 570.1C421.4 568.7 411.3 565.9 401.8 562L366.8 585.3C356.3 592.3 342.4 590.9 333.5 582L314.3 562.8C305.4 553.9 304 540 311 529.5L334.3 494.5C332.4 489.8 330.7 484.9 329.3 479.8C327.9 474.7 327 469.6 326.3 464.6L288.6 446C277.3 440.4 271.6 427.6 274.8 415.5L281.8 389.3C285.1 377.2 296.4 369 309 369.8L350.9 372.5C357.2 364.4 364.5 356.9 372.8 350.5L370.1 308.7C369.3 296.1 377.5 284.7 389.6 281.5L415.8 274.5zM448.4 404C424.1 404 404.4 423.7 404.5 448.1C404.5 472.4 424.2 492 448.5 492C472.8 492 492.5 472.3 492.5 448C492.4 423.6 472.7 404 448.4 404zM224.9 18.5L251.1 25.5C263.2 28.8 271.4 40.2 270.6 52.7L267.9 94.5C276.2 100.9 283.5 108.3 289.8 116.5L331.8 113.8C344.3 113 355.7 121.2 359 133.3L366 159.5C369.2 171.6 363.5 184.4 352.2 190L314.5 208.6C313.8 213.7 312.8 218.8 311.5 223.8C310.2 228.8 308.4 233.8 306.5 238.5L329.8 273.5C336.8 284 335.4 297.9 326.5 306.8L307.3 326C298.4 334.9 284.5 336.3 274 329.3L239 306C229.5 309.9 219.4 312.7 209.1 314.1L190.5 351.7C184.9 363 172.1 368.7 160 365.5L133.8 358.5C121.6 355.2 113.5 343.8 114.3 331.3L117 289.4C108.7 283 101.4 275.6 95.1 267.4L53.1 270.1C40.6 270.9 29.2 262.7 25.9 250.6L18.9 224.4C15.7 212.3 21.4 199.5 32.7 193.9L70.4 175.3C71.1 170.2 72.1 165.2 73.4 160.1C74.8 155 76.4 150.1 78.4 145.4L55.1 110.5C48.1 100 49.5 86.1 58.4 77.2L77.6 58C86.5 49.1 100.4 47.7 110.9 54.7L145.9 78C155.4 74.1 165.5 71.3 175.8 69.9L194.4 32.3C200 21 212.7 15.3 224.9 18.5zM192.4 148C168.1 148 148.4 167.7 148.4 192C148.4 216.3 168.1 236 192.4 236C216.7 236 236.4 216.3 236.4 192C236.4 167.7 216.7 148 192.4 148z" />
                </svg>
              </div>

              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Configuración
                </h2>

                <p className="leading-relaxed text-base">
                  Aqui puedes cambiar algunos aspectos dentro de la aplicacion.
                </p>
              </div>
            </div>

            <div className="carta_usuario flex flex-col mb-10 lg:items-start items-center rounded hover:shadow-lg p-3 rounded-xl hover:bg-red-100 cursor-pointer transition duration-300 ease-in-out" onClick={()=>{
              localStorage.removeItem("token")
              localStorage.removeItem("nombreUsuario")
              window.dispatchEvent(new Event("storage"))
              navUrl("/login")
            }}>
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <div className="texto flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Cerrar Sesion
                </h2>

                <p className="leading-relaxed text-base">
                  Cierras sesion en este dispositivo.
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
