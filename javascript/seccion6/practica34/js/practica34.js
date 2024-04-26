document.getElementById('boton').addEventListener('click', cambiarValores, false);

let contador = 1;
document.getElementById('caja-verde').innerHTML = '<p>VERDE</p>';
document.getElementById('caja-amarilla').innerHTML = '<p>AMARILLO</p>';

function cambiarValores() {
    let posicion = ['caja-amarilla', 'caja-verde'];

    if (contador % 2 != 0){

        document.getElementById('caja-verde').id = posicion[0];
        document.getElementById('caja-amarilla').id = posicion[1];
        palabra();
    } else {
        document.getElementById('caja-amarilla').id = posicion[1];
        document.getElementById('caja-verde').id = posicion[0];
        palabra();
    }
    contador++;

    if (contador == 7){
        boton
        document.getElementById('boton').disabled = true;
    }
}

function palabra(){
    document.getElementById('caja-verde').innerHTML = '<p>VERDE</p>';
    document.getElementById('caja-amarilla').innerHTML = '<p>AMARILLO</p>';
}