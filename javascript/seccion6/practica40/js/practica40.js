document.getElementById('subir').addEventListener('click', subirLetra, false);
document.getElementById('bajar').addEventListener('click', bajarLetra, false);
document.getElementById('sombra').addEventListener('click', aplicarSombra, false);
document.getElementById('color').addEventListener('click', cambiarColor, false);
document.getElementById('reset').addEventListener('click', resetEstilos, false);

let letra = 2.5;
let contadorsombra = 0;
let contadorcolor = 0;

function subirLetra() {
    letra += 0.25;
    document.getElementById('subtitulo').style.fontSize = letra +'vh';
}

function bajarLetra() {
    letra -= 0.25;
    document.getElementById('subtitulo').style.fontSize = letra +'vh';
}

function aplicarSombra() {
    if (contadorsombra % 2 == 0){
        document.getElementById('subtitulo').style.textShadow = '0.2vh 0.2vh 0.4vh green';
    } else {
        document.getElementById('subtitulo').style.textShadow = 'none';
    }
    contadorsombra++;
}

function cambiarColor() {
    if (contadorcolor % 2 == 0){
        document.getElementById('subtitulo').style.color = 'purple';
    } else {
        document.getElementById('subtitulo').style.color = 'blue';
    }
    contadorcolor++;
}

function resetEstilos() {
    letra = 2.5;
    contadorsombra = 0;
    contadorcolor = 0;

    document.getElementById('subtitulo').style.fontSize = letra +'vh';
    document.getElementById('subtitulo').style.textShadow = 'none';
    document.getElementById('subtitulo').style.color = 'black';
}