

document.getElementById('titulo').addEventListener('click', precioProducto, false);
document.getElementById('caja-iniciar').addEventListener('click', iniciar, false);


let categoria = '';
let precio = 0;
let monto = 0;

function precioProducto(){
    categoria = window.prompt('Introduzca categoria del producto');
    precio = Number(window.prompt('Introduzca el precio del producto'));

}

function iniciar(){
    
    document.getElementById('palabra2').innerHTML = categoria;

    if ((precio >= 0) && (precio <= 1000)){

        if (precio >= 200) {
            document.getElementById('palabra4').innerHTML = "25%";

            monto = precio * (1 - 25/100);
            document.getElementById('palabra6').innerHTML = monto;
        } else {
            document.getElementById('palabra4').innerHTML = "10%";

            monto = precio * (1 - 10/100);
            document.getElementById('palabra6').innerHTML = monto;
        }

    } else {
        document.getElementById('palabra4').innerHTML = "ERROR";
        document.getElementById('palabra6').innerHTML = "-------";
    }

}