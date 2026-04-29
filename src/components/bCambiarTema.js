function cambiarTema(){
    let claseOscura = document.documentElement.classList.contains("tema-oscuro");
    let boton = document.getElementById("boton-tema");
    
    if(claseOscura){
        document.documentElement.classList.remove('tema-oscuro');
        boton.innerText = "Modo Oscuro 🌙";
        localStorage.setItem('tema', 'claro');
    }
    else{
        document.documentElement.classList.add('tema-oscuro'); 
        boton.innerText = "Modo Claro ☀️";
        localStorage.setItem('tema', 'oscuro');
    }

}

//Window para manipular la ventana del navegador, local para almacenar dentro del navegador, algo asi como una API, los datos no se borran a menos de forma manual.
window.addEventListener('DOMContentLoaded', () => {
    const temaGuardado = localStorage.getItem('tema');
    const boton = document.getElementById("boton-tema");

    // Logica cuando se recargue la ventana
    if (temaGuardado === 'oscuro') {
        document.documentElement.classList.add('tema-oscuro');
        boton.innerText = "Modo Claro ☀️";
    } else {
        document.documentElement.classList.remove('tema-oscuro');
        boton.innerText = "Modo Oscuro 🌙";
    }
});


export default cambiarTema;
