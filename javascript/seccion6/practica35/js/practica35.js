document.getElementById('caja-amarilla').addEventListener('dblclick', cambiarValoresAmarilla, false);
document.getElementById('caja-roja').addEventListener('dblclick', cambiarValoresRoja, false);
document.getElementById('caja-verde').addEventListener('dblclick', cambiarValoresVerde, false);


document.getElementById('caja-amarilla').innerHTML = '<p>AMARILLO</p>';
document.getElementById('caja-roja').innerHTML = '<p>ROJO</p>';
document.getElementById('caja-verde').innerHTML = '<p>VERDE</p>';

document.getElementById('caja-amarilla').style.backgroundColor = 'yellow';
document.getElementById('caja-roja').style.backgroundColor = 'red';
document.getElementById('caja-verde').style.backgroundColor = 'green';

let contadoramarillo = 0;
let contadorrojo = 0;
let contadorverde = 0;
let colorinicial = ['yellow', 'red', 'green'];

function cambiarValoresAmarilla() {
    let posicion = ['yellow', 'red', 'green'];

    switch (contadoramarillo) {
        case 0:
            document.getElementById('caja-amarilla').style.backgroundColor = posicion[0];
            document.getElementById('caja-amarilla').innerHTML = '<p>AMARILLO</p>';
            colorinicial[0] = posicion[0];
            contadoramarillo++;
            break;
        case 1:
            document.getElementById('caja-amarilla').style.backgroundColor = posicion[1];
            document.getElementById('caja-amarilla').innerHTML = '<p>ROJO</p>';
            colorinicial[0] = posicion[1];
            contadoramarillo++;
            break;
        case 2:
            document.getElementById('caja-amarilla').style.backgroundColor = posicion[2];
            document.getElementById('caja-amarilla').innerHTML = '<p>VERDE</p>';
            colorinicial[0] = posicion[2];
            contadoramarillo++;
            break;
    }

    if(contadoramarillo == 3){
        contadoramarillo = 0;
    }

    estanAlineados();

}

function cambiarValoresRoja() {
    let posicion = ['yellow', 'red', 'green'];

    switch (contadorrojo) {
        case 0:
            document.getElementById('caja-roja').style.backgroundColor = posicion[0];
            document.getElementById('caja-roja').innerHTML = '<p>AMARILLO</p>';
            colorinicial[1] = posicion[0];
            contadorrojo++;
            break;
        case 1:
            document.getElementById('caja-roja').style.backgroundColor = posicion[1];
            document.getElementById('caja-roja').innerHTML = '<p>ROJO</p>';
            colorinicial[1] = posicion[1];
            contadorrojo++;
            break;
        case 2:
            document.getElementById('caja-roja').style.backgroundColor = posicion[2];
            document.getElementById('caja-roja').innerHTML = '<p>VERDE</p>';
            colorinicial[1] = posicion[2];
            contadorrojo++;
            break;
    }

    if(contadorrojo == 3){
        contadorrojo = 0;
    }

    estanAlineados();

}

function cambiarValoresVerde() {
    let posicion = ['yellow', 'red', 'green'];

    switch (contadorverde) {
        case 0:
            document.getElementById('caja-verde').style.backgroundColor = posicion[0];
            document.getElementById('caja-verde').innerHTML = '<p>AMARILLO</p>';
            colorinicial[2] = posicion[0];
            contadorverde++;
            break;
        case 1:
            document.getElementById('caja-verde').style.backgroundColor = posicion[1];
            document.getElementById('caja-verde').innerHTML = '<p>ROJO</p>';
            colorinicial[2] = posicion[1];
            contadorverde++;
            break;
        case 2:
            document.getElementById('caja-verde').style.backgroundColor = posicion[2];
            document.getElementById('caja-verde').innerHTML = '<p>VERDE</p>';
            colorinicial[2] = posicion[2];
            contadorverde++;
            break;
    }

    if(contadorverde == 3){
        contadorverde = 0;
    }

    estanAlineados();
    
}

function estanAlineados(){
    if ((colorinicial[0] == colorinicial[1]) && (colorinicial[0] == colorinicial[2])){
        document.getElementById('caja-alineacion').innerHTML = '<p>El color alineado es: ' + colorinicial[0].toUpperCase() + '</p>';
    } else {
        document.getElementById('caja-alineacion').innerHTML = '<p>NO hay alineación de colores</p>';
    }
}

