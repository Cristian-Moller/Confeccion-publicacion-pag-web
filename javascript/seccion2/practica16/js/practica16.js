

document.getElementById('caja-iniciar').addEventListener('click', iniciar, false);


let nota = "";

function iniciar(){
    
    nota = Number(document.getElementById('nota').value);

    if ((nota >= 0) && (nota <= 10)){

        if (nota < 5 ) {
            document.getElementById('puntuacion').innerHTML = nota;
            document.getElementById('calificacion').innerHTML = 'Suspendido';
            
        } else if ((nota >= 5) && (nota <= 7)) {
            document.getElementById('puntuacion').innerHTML = nota;
            document.getElementById('calificacion').innerHTML = 'Aprobado';
            
        } else if ((nota > 7) && (nota <= 9)) {
            document.getElementById('puntuacion').innerHTML = nota;
            document.getElementById('calificacion').innerHTML = 'Notable';
            
        } else if ((nota > 9) && (nota < 10)) {
            document.getElementById('puntuacion').innerHTML = nota;
            document.getElementById('calificacion').innerHTML = 'Excelente';
            
        } else { /* nota = 10 */
            document.getElementById('puntuacion').innerHTML = nota;
            document.getElementById('calificacion').innerHTML = 'Matrícula de Honor';

        }
        

    } else {
        document.getElementById('puntuacion').innerHTML = nota;
        document.getElementById('calificacion').innerHTML = 'Valor fuera de rango';

    }

}
