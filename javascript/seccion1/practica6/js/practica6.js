
let  altura = Number(window.prompt('Introduzca la altura del triangulo'));
let  base = Number(window.prompt('Introduzca la base del triangulo'));

document.getElementById('linea1').innerHTML = 'La altura del triangulo es: ' + altura;
document.getElementById('linea2').innerHTML = 'La base del triangulo de: ' + base;

let superficie = base * altura / 2;

document.getElementById('linea3').innerHTML = 'La superficie del triangulo es : ' + superficie;


document.getElementById('linea3').style.fontWeight = 'bold';
document.getElementById('linea3').style.fontSize = '3vh';

document.getElementById('titulo').style.fontFamily = 'calabri';
document.getElementById('titulo').style.fontSize = '60px';
document.getElementById('titulo').style.color = 'purple';

