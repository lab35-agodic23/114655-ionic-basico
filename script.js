var usuario = document.getElementById('usuariotxt');
var password = document.getElementById('passwordtxt');
var cotenido = document.getElementById('contenido');

var usuarios = []; // Guarda usuarios aquí


function login(){
    contenido.innerHTML = ''; // Limpia el div

    //Opcion 1: string para innerHTML
    //contenido.innerHTML = `Login correcto &nbsp;<strong> ${usuario.value}</strong>`;
    
    //Opcion 2: Crea elementos span y strong 
    const span = document.createElement('span');
    span.innerHTML = 'Login Correcto';

    const strong = document.createElement('strong');
    strong.innerHTML = usuario.value;

    contenido.appendChild(span);
    contenido.appendChild(strong);
}

function registro(){
    contenido.innerHTML = ''; // Limpia el div

    //Opcion 1: string 
    //contenido.innerHTML = `Registro con éxito &nbsp;<strong> ${usuario.value}</strong>`

    //Opcion 2:  Crea elementos span y strong
    const span = document.createElement('span');
    span.innerHTML = 'Registro con éxito';

    const strong = document.createElement('strong');
    strong.innerHTML = usuario.value;

    contenido.appendChild(span);
    contenido.appendChild(strong);
}

function limpiaTextos(){
    usuario.value = '';
    password.value = '';
}