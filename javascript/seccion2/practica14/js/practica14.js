

document.getElementById('titulo').addEventListener('click', tablaMultiplicar, false);
document.getElementById('caja-iniciar').addEventListener('click', iniciar, false);


let num = 0;
let repeticiones = 0;
let resultado = 0;

function tablaMultiplicar(){
    num = Number(window.prompt('Introduzca el numero de la tabla que quiera ver'));
    repeticiones = Number(window.prompt('Introduzca la cantidad de repeticiones'));

    document.getElementById('numero').innerHTML = num;
    document.getElementById('cantidad').innerHTML = repeticiones;

}

function iniciar(){

    for (let i=0; i<repeticiones; i++) {
        resultado = num * i;
        
        document.getElementById('lista').innerHTML += '<li>' + num + 'x' + i + '=' + resultado + '</li>';

        console.log(resultado)
    }
}

