document.getElementById('nombre').addEventListener('focus', conEstilos, false);
document.getElementById('mail').addEventListener('focus', conEstilos, false);
document.getElementById('nombre').addEventListener('blur', sinEstilos, false);
document.getElementById('mail').addEventListener('blur', sinEstilos, false);


function conEstilos(e) {

    let identificador = e.target.id;

    console.log(identificador);

    if (identificador == 'nombre') {
        document.getElementById('nombre').style.width = '60%';
        document.getElementById('nombre').style.fontSize = '3vh';
        document.getElementById('nombre').style.color = 'green';
        document.getElementById('nombre').style.textShadow = '0.2vh 0.2vh 0.4vh black';

    } else if (identificador == 'mail') {
        document.getElementById('mail').style.width = '60%';
        document.getElementById('mail').style.fontSize = '3vh';
        document.getElementById('mail').style.color = 'green';
        document.getElementById('mail').style.textShadow = '0.2vh 0.2vh 0.4vh black';
    }
}

function sinEstilos(e) {

    let identificador1 = e.target.id;

    console.log(identificador1);
    if (identificador1 == 'nombre') {
        document.getElementById('nombre').style.width = '35%';
        document.getElementById('nombre').style.fontSize = '2vh';
        document.getElementById('nombre').style.color = 'none';
        document.getElementById('nombre').style.textShadow = 'none';

    } else if (identificador1 == 'mail') {
        document.getElementById('mail').style.width = '40%';
        document.getElementById('mail').style.fontSize = '2vh';
        document.getElementById('mail').style.color = 'initial';
        document.getElementById('mail').style.textShadow = 'none';
    }
}