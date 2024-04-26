document.getElementById('boton').addEventListener('mouseover', estilos,false);
document.getElementById('boton').addEventListener('mouseout', estilos1,false);




function estilos() {
    document.getElementById('boton').style.width = '40%';
    document.getElementById('boton').style.height = '40%';
    document.getElementById('boton').style.borderRadius = '2vh';
    document.getElementById('boton').style.display = 'inline-flex';
    document.getElementById('boton').style.justifyContent = 'center';
    document.getElementById('boton').style.alignItems = 'center';
    document.getElementById('boton').style.fontSize = '4vh';
    document.getElementById('boton').style.backgroundColor = 'green';
    document.getElementById('boton').style.color = 'white';
    document.getElementById('boton').innerHTML = 'VERDE';

}
function estilos1() {
    document.getElementById('boton').style.width = '40%';
    document.getElementById('boton').style.height = '40%';
    document.getElementById('boton').style.borderRadius = '2vh';
    document.getElementById('boton').style.display = 'inline-flex';
    document.getElementById('boton').style.justifyContent = 'center';
    document.getElementById('boton').style.alignItems = 'center';
    document.getElementById('boton').style.fontSize = '4vh';
    document.getElementById('boton').style.backgroundColor = 'red';
    document.getElementById('boton').style.color = 'white';
    document.getElementById('boton').innerHTML = 'ROJO';

}