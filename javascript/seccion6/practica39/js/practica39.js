document.getElementById('imagen').addEventListener('click', rotarImagen, false);
document.getElementById('reset').addEventListener('click', iniciarContador, false);

let rotacion = 0;
document.getElementById('contador').innerHTML = rotacion;

function rotarImagen() {

    rotacion += 0.25;

    document.getElementById('imagen').style.transform = 'rotate('+ rotacion +'turn)';

    switch (rotacion) {
        case 1:
            document.getElementById('contador').innerHTML = rotacion;
            break;
        case 2:
            document.getElementById('contador').innerHTML = rotacion;
            break;
        case 3:
            document.getElementById('contador').innerHTML = rotacion;
            break;
        case 4:
            document.getElementById('contador').innerHTML = rotacion;
            break;
        case 5:
            document.getElementById('contador').innerHTML = rotacion;
            break;
        default:
            break;
    }
    if(rotacion==5){
        rotacion -= 0.25;
    }
}

function iniciarContador() {
    rotacion = 0;
    document.getElementById('contador').innerHTML = rotacion;
    document.getElementById('imagen').style.transform = 'rotate('+ rotacion +'turn)';
}
