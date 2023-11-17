/* se declaran las variables */
let temaanterior = './CSS/darkmode.css'
var tema = "document.getElementById('tema')"
var botontema = "document.getElementById('botontema')"
/* esta funcion reemplaza el tema actual por su opuesto */
function cambiarModo() {
    tema = document.getElementById('tema');
    botontema = document.getElementById('botontema');
    if (tema.getAttribute('href') == './CSS/darkmode.css') {
        temaanterior = tema.getAttribute('href');
        tema.setAttribute('href', './CSS/lightmode.css');
        botontema.setAttribute('class', 'fa-solid fa-sun');
    }else if (tema.getAttribute('href') == './CSS/lightmode.css') {
        temaanterior = tema.getAttribute('href');
        tema.setAttribute('href', './CSS/darkmode.css');
        botontema.setAttribute('class', 'fa-solid fa-moon');
    } else {
        tema.setAttribute('href', temaanterior);
    }
}
/* esta funcion avisa al usuario cuando presiona un boton "apagado" */
function avisoweb(){
    alert("Este sitio está deshabilitado por el momento, intente más tarde.");
}