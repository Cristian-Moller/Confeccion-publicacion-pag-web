

document.getElementById('caja-repetir').addEventListener('click', calculoDiaSemana, false);


let dia = "";

function calculoDiaSemana(){
    
    dia = document.getElementById('dia-intro').value.toLowerCase();

    

   switch (dia) {
        case 'lunes':
           document.getElementById('dia').innerHTML = dia;
           document.getElementById('posicion').innerHTML = ('primer');
           document.getElementById('laboral').innerHTML = ('laboral');
           break;
        case 'martes':
            document.getElementById('dia').innerHTML = dia;
            document.getElementById('posicion').innerHTML = ('segundo');
            document.getElementById('laboral').innerHTML = ('laboral');
            break;
        case 'miercoles':
           document.getElementById('dia').innerHTML = dia;
           document.getElementById('posicion').innerHTML = ('tercero');
           document.getElementById('laboral').innerHTML = ('laboral');
           break;
        case 'jueves':
           document.getElementById('dia').innerHTML = dia;
           document.getElementById('posicion').innerHTML = ('cuarto');
           document.getElementById('laboral').innerHTML = ('laboral');
           break;
        case 'viernes':
           document.getElementById('dia').innerHTML = dia;
           document.getElementById('posicion').innerHTML = ('quinto');
           document.getElementById('laboral').innerHTML = ('laboral');
           break;
        case 'sabado':
           document.getElementById('dia').innerHTML = dia;
           document.getElementById('posicion').innerHTML = ('sexto');
           document.getElementById('laboral').innerHTML = ('NO laboral');
           break;
        case 'domingo':
           document.getElementById('dia').innerHTML = dia;
           document.getElementById('posicion').innerHTML = ('septimo');
           document.getElementById('laboral').innerHTML = ('NO laboral');
           break;
       default:
           window.alert('El valor introducido no corresponde a un dia de la semana')
           break;
   }

}
