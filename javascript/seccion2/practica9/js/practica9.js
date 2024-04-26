

document.getElementById('titulo').addEventListener('click', precioProducto, false)
document.getElementById('caja-comprobar').addEventListener('click', compararImporte, false)


let precio = 0;

function precioProducto(){
    precio = Number(window.prompt('Introduzca el precio del producto'));

    document.getElementById('palabra2').innerHTML = precio;
    document.getElementById('palabra2').style.fontWeight = 'bold';

}

function compararImporte(){
    if (precio > 100){

        document.getElementById('palabra4').innerHTML = "SUPERIOR";
        document.getElementById('palabra2').style.fontWeight = 'bold';
        document.getElementById('palabra4').style.fontWeight = 'bold';
        document.getElementById('palabra4').style.color = 'green';
        
    } else if (precio < 100) {
        document.getElementById('palabra4').innerHTML = "INFERIOR";
        document.getElementById('palabra2').style.fontWeight = 'bold';
        document.getElementById('palabra4').style.fontWeight = 'bold';
        document.getElementById('palabra4').style.color = 'red';       
    }
    else {
        document.getElementById('palabra4').innerHTML = "IGUAL";
        document.getElementById('palabra2').style.fontWeight = 'bold';
        document.getElementById('palabra4').style.fontWeight = 'bold';
        document.getElementById('palabra4').style.color = 'blue';
    }
}