
document.getElementById('boton-operaciones').addEventListener('click', iniciar, false);


let  num1 = Number(window.prompt('Introduzca su primer numero'));
let  num2 = Number(window.prompt('Introduzca su segundo numero'));

document.getElementById('linea1').innerHTML = 'Los valores introducidos son: ' + num1 + ' y ' + num2;



function iniciar() {
    let suma = num1 + num2;
    document.getElementById('linea2').innerHTML = ': '+ suma;

    let producto = num1 * num2
    document.getElementById('linea3').innerHTML = ': '+ producto;
}


/* document.getElementById('linea3').style.fontWeight = 'bold';
document.getElementById('linea3').style.fontSize = '3vh'; */
