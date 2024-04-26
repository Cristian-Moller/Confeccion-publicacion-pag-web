

document.getElementById('titulo').addEventListener('click', palabras, false)
document.getElementById('caja-iniciar').addEventListener('click', compararpalabras, false)


let palabra1 = '';
let palabra2 = '';

function palabras(){
    palabra1 = window.prompt('Introduzca su primer palabra');
    palabra2 = window.prompt('Introduzca su segunda palabra');

    document.getElementById('palabra1').innerHTML = palabra1;
    document.getElementById('palabra2').innerHTML = palabra2;

}

function compararpalabras(){
    if (palabra1 == palabra2){
        document.getElementById('palabra1').style.backgroundColor = 'green';
        document.getElementById('palabra2').style.backgroundColor = 'green';
    } else {
        document.getElementById('palabra1').style.backgroundColor = 'red';
        document.getElementById('palabra2').style.backgroundColor = 'red';
    }
}