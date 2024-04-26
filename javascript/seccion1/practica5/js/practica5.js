
let  precio = Number(window.prompt('Introduzca el precio del articulo'));
let  descuento = Number(window.prompt('Introduzca el descuento a aplicar'));

document.getElementById('linea1').innerHTML = 'El precio del articulo es: ' + precio + '€';
document.getElementById('linea2').innerHTML = 'Su descuento es de: ' + descuento +'%';

let precioFinal = precio * (1-descuento/100);

document.getElementById('linea3').innerHTML = 'La suma Total es : ' + precioFinal;


document.getElementById('linea3').style.fontWeight = 'bold';
document.getElementById('linea3').style.fontSize = '3vh';

window.alert('El precio final del producto es: ' + precioFinal);