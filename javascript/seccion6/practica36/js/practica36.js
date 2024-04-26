document.getElementById('caja-arriba').addEventListener('click', moverCajaArriba, false);
document.getElementById('caja-abajo').addEventListener('click', moverCajaAbajo, false);
document.getElementById('caja-izquierda').addEventListener('click', moverCajaIzquierda, false);
document.getElementById('caja-derecha').addEventListener('click', moverCajaDerecha, false);
document.getElementById('caja-reset').addEventListener('click', moverCajaReset, false);
document.getElementById('caja1').addEventListener('mouseup', mouseUp, false);
document.getElementById('caja1').addEventListener('mousedown', mouseDown, false);

let posicion = [];
let posicion1 = document.getElementById('caja-imagen').offsetLeft;
let posicion2 = document.getElementById('caja-imagen').offsetTop;

let posicion3 = document.getElementById('caja2').offsetLeft;
let posicion4 = document.getElementById('caja2').offsetLeft;

posicion.push(posicion1);
posicion.push(posicion2);

console.log(posicion1);
console.log(posicion2);
console.log(posicion);

function moverCajaArriba() {

    posicion[1] = posicion[1]-10;

    if(posicion[1] > 230){
        document.getElementById('caja-imagen').style.top = posicion[1]+'px';
    } else {
        posicion[1] = posicion[1]+10;
    }

}

function moverCajaAbajo() {

    posicion[1] = posicion[1]+10;

    if(posicion[1] < 500){
        document.getElementById('caja-imagen').style.top = posicion[1]+'px';
    } else {
        posicion[1] = posicion[1]-10;
    }
}

function moverCajaIzquierda() {

    posicion[0] = posicion[0]-10;

    if(posicion[0] > 230){
        document.getElementById('caja-imagen').style.left = posicion[0]+'px';
    } else {
        posicion[0] = posicion[0]+10;
    }

    console.log(posicion[0])
}

function moverCajaDerecha() {

    posicion[0] = posicion[0]+10;

    if(posicion[0] < 760){
        document.getElementById('caja-imagen').style.left = posicion[0]+'px';
    } else {
        posicion[0] = posicion[0]-10;
    }
}
function moverCajaReset() {

    document.getElementById('caja-imagen').style.left = posicion1+'px';
    document.getElementById('caja-imagen').style.top = posicion2+'px';
    posicion[0] = posicion1;
    posicion[1] = posicion2;

}

function mouseDown(e){

    let identificador = e.path[1].id;
    
    if (identificador == 'caja-arriba'){
        document.getElementById('caja-arriba').style.backgroundColor = 'green';
    } else if (identificador == 'caja-abajo'){
        document.getElementById('caja-abajo').style.backgroundColor = 'green';
    } else if (identificador == 'caja-izquierda'){
        document.getElementById('caja-izquierda').style.backgroundColor = 'green';
    } else if (identificador == 'caja-derecha'){
        document.getElementById('caja-derecha').style.backgroundColor = 'green';
    }
}

function mouseUp(e){

    let identificador = e.path[1].id;
    
    if (identificador == 'caja-arriba'){
        document.getElementById('caja-arriba').style.backgroundColor = 'inherit';
    } else if (identificador == 'caja-abajo'){
        document.getElementById('caja-abajo').style.backgroundColor = 'inherit';
    } else if (identificador == 'caja-izquierda'){
        document.getElementById('caja-izquierda').style.backgroundColor = 'inherit';
    } else if (identificador == 'caja-derecha'){
        document.getElementById('caja-derecha').style.backgroundColor = 'inherit';
    }
}




