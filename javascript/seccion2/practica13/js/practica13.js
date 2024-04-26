

document.getElementById('titulo').addEventListener('click', situacionLaboral, false)
document.getElementById('caja-iniciar').addEventListener('click', iniciar, false)


let nombre = '';
let edad = 0;

function situacionLaboral(){
    nombre = window.prompt('Introduzca su nombre');
    edad = Number(window.prompt('Introduzca su edad'));

}

function iniciar(){
    
    document.getElementById('palabra2').innerHTML = nombre;
    document.getElementById('palabra4').innerHTML = edad;

    if ((edad >= 0) && (edad <= 100)){

        if (edad < 18) {
            document.getElementById('palabra6').innerHTML = 'Menor de edad';

        } else if ((edad >= 18) && (edad <= 65)) {
            document.getElementById('palabra6').innerHTML = 'Trabajador en activo';

        } else {
            document.getElementById('palabra6').innerHTML = 'Jubilad@';
        }

    } else {
        document.getElementById('palabra4').innerHTML = "ERROR";
        document.getElementById('palabra6').innerHTML = "-------";
    }

}