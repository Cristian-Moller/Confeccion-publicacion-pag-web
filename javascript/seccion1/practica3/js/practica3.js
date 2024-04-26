let nombre = window.prompt('Introduzca el nombre del alumno');
let curso = window.prompt('Introduzca el curso del alumno');
let nota = window.prompt('Introduzca la nota del alumno');



document.getElementById('linea1').innerHTML = 'Nombre: ' + nombre;
document.getElementById('linea2').innerHTML = 'Curso: ' + curso;
document.getElementById('linea3').innerHTML = 'Nota: ' + nota;

document.getElementById('linea2').style.fontFamily = 'cursive';
document.getElementById('linea3').style.fontWeight = 'bold';
