document.getElementById('ciudad').addEventListener('change', imagenCiudad, false);
document.getElementById('imagen').addEventListener('mouseover', bordeDiferente, false);
document.getElementById('imagen').addEventListener('mouseout', bordeInicial, false);

function imagenCiudad(e) {

    let ciudad = e.target.value;

    let ciudadSeleccionada = '/javascript/seccion6/practica38/imagenes/' + ciudad + '.png';
    console.log(ciudad);

    document.getElementById('imagen').style.backgroundImage = `url('${ciudadSeleccionada}')`;
    document.getElementById('imagen').style.backgroundSize = '100% 100%';
    document.getElementById('imagen').style.backgroundRepeat = 'no-repeat';
    document.getElementById('imagen').style.border = '2px solid black';
}

function bordeDiferente() {
    document.getElementById('imagen').style.border = '2px solid red';
}
function bordeInicial() {
    document.getElementById('imagen').style.border = '2px solid black';
}