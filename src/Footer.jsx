// Importar estilos TailWind
import "./footer.css";

// Importar estilos del Footer
import "./styleHF.css";

import { useNavigate } from 'react-router-dom';

// Funcion para acceder a enlaces externos abriendo otra pagina
export function clickWebs(url){
  window.open(url,"_blank");
}


function Footer() {
  // Constante para el useNavigate
  const navigate = useNavigate();

  // Funcion para reutilizar en cada link
  function navUrl(url) {
    navigate(url);
  }

  return (
    <>
      <footer className="text-gray-600 body-font bg-[var(--bg)]">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <a onClick={()=>{navUrl("/")}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="black"
                className="hover:fill-white cursor-pointer transition delay-100 ease-in-out"
                viewBox="0 0 16 16"
              >
                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
              </svg>
            </a>
            <span className="ml-3 text-xl text-black">My Taxi Travel</span>
          </span>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black-500 sm:py-2 sm:mt-0 mt-4">
            © 2025 My Taxi Travel
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-gray-500"
              onClick={()=> {clickWebs("https://www.facebook.com/")}}
            >
              <svg
                fill="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 hover:fill-[#3b5998] cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              onClick={()=>{clickWebs("https://x.com/home?lang=es")}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="black"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5 hover:fill-[#0e76a8] cursor-pointer"
              >
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              onClick = {()=>{clickWebs("https://www.instagram.com/")}}
            >
              <svg
                fill="black"
                stroke="#FEBC2F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 hover:fill-[#833ab4] cursor-pointer"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              onClick={()=>{clickWebs("https://www.linkedin.com/in/sebastian-gonzalez-rodriguez-a335aa1a0/")}}
            >
              <svg
                fill="black"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5 hover:fill-[#0e76a8] cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;