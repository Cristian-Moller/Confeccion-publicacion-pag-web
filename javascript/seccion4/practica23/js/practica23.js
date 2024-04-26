
document.getElementById('caja-mostrar').addEventListener('click', strings, false)

let validar = 1;

function strings(){

    let texto1 = document.getElementById('nombre').value;
    let texto2 = document.getElementById('apellido').value;

    estilos();
    mostrar(texto1, texto2)

}

function estilos() {
    document.getElementById('caja2').style.width = '80%';
    document.getElementById('caja2').style.height = 'auto';
    document.getElementById('caja2').style.marginBottom = '2vh';
    document.getElementById('caja2').style.display = 'inline-flex';
    document.getElementById('caja2').style.justifyContent = 'center';

    document.getElementById('centro').style.border = '1px solid black';
    document.getElementById('centro').style.width = '50%';
    document.getElementById('centro').style.height = '100%';


}
function mostrar(nombre, apellido){
    /* let nombre1 = nombre;
    let apellido1 = apellido; */
    let texto = nombre.concat(' '+ apellido);

    document.getElementById('centro').innerHTML = 
    '<p>Nombre: '+ '<strong>' + nombre + '</strong>' + '</p>' +
    '<p>Apellido: '+ '<strong>' + apellido + '</strong>' + '</p>' +
    '<p>Nombre y Apellido: '+ '<strong>' + texto + '</strong>' + '</p>' +
    '<p>Tamaño texto: '+ '<strong>' + texto.length + '</strong>' + '</p>' +
    '<p>Mayúsculas: '+ '<strong>' + texto.toUpperCase() + '</strong>' + '</p>' +
    '<p>Minúsculas: '+ '<strong>' + texto.toLowerCase() + '</strong>' + '</p>' +
    '<p>Posición del espacio: '+ '<strong>' + (texto.search(' ') + 1) + '</strong>' + '</p>' +
    '<p>Finaliza con letra "a": '+ '<strong>' + texto.endsWith('a') + '</strong>' + '</p>' +
    '<p>Comienza por letra "H": '+ '<strong>' + texto.startsWith('H') + '</strong>' + '</p>' +
    '<p>Extraer solo apellido: '+ '<strong>' + texto.slice(texto.search(' ')) + '</strong>' + '</p>' ;

}