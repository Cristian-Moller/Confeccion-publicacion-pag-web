
let  num1 = Number(window.prompt('Introduzca su primer numero'));
let  num2 = Number(window.prompt('Introduzca su segundo numero'));

document.getElementById('linea1').innerHTML = 'Su primer numero introducido: ' + num1;
document.getElementById('linea2').innerHTML = 'Su segundo numero introducido: ' + num2;

let suma = num1 + num2;

document.getElementById('linea3').innerHTML = 'La suma Total es : ' + suma;

console.log('La suma Total es : ' + suma);

document.getElementById('linea3').style.fontWeight = 'bold';
document.getElementById('linea3').style.fontSize = '3vh';
