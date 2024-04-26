
document.getElementById('box-color').addEventListener('click', color, false);
document.getElementById('box-color').addEventListener('mouseover', up, false);
document.getElementById('box-color').addEventListener('mouseout', down, false);


function up() {
    document.getElementById('box-color').style.backgroundColor = 'red';
}
function down() {
    document.getElementById('box-color').style.backgroundColor = 'blue';
}
function color(){

    let colorFondo = window.prompt('Introduce el color en ingles');

    document.getElementById('box-color').style.backgroundColor = colorFondo;
}

/* color(); */