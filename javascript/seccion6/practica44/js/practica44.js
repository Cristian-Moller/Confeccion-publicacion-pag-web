document.getElementById('caja2').addEventListener('click', miTurno, false);
document.getElementById('caja-reset').addEventListener('dblclick', reiniciarJuego, false);
document.getElementById('caja-reset').addEventListener('click', continuarJugando, false);

let tresenlinea = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
let contador = 1;
let jugador1 = [];
let jugador2 = [];
let arrayganador = [];
let ganadas1 = 0;
let ganadas2 = 0;
aQuienLeToca();
document.getElementById('rdo1').innerHTML = ganadas1;
document.getElementById('rdo2').innerHTML = ganadas2;

function aQuienLeToca() {

    if (contador % 2 != 0){
        document.getElementById('jugador2').style.backgroundColor = '';
        document.getElementById('jugador1').style.backgroundColor = 'yellowgreen';
        
    } else {
        document.getElementById('jugador1').style.backgroundColor = '';
        document.getElementById('jugador2').style.backgroundColor = 'yellowgreen';
    } 
}

function miTurno(e){
    
    let caja = e.target.id;
    console.log(caja);

    if (contador % 2 != 0){
        document.getElementById(`${caja}`).style.backgroundImage = 'url(/javascript/seccion6/practica44/imagenes/cruz.png)';
        jugador1.push(Number(caja));
        comprobar(jugador1);

    } else if (contador % 2 == 0){
        document.getElementById(`${caja}`).style.backgroundImage = 'url(/javascript/seccion6/practica44/imagenes/circulo.png)';
        jugador2.push(Number(caja));
        comprobar(jugador2);
    } 

    if(caja == 'caja2'){
        document.getElementById('caja2').style.backgroundImage = '';
    } else {
        document.getElementById(`${caja}`).style.pointerEvents = 'none';
        contador++;
        aQuienLeToca();
    }
}

function limiteFinal(array){
    if(array != ''){
        for (let i=0; i<arrayganador.length; i++) {
            document.getElementById(`${array[i]}`).style.boxShadow = '2px 2px 2px 1px yellowgreen inset, -2px -2px 2px 1px yellowgreen inset';
        }
    }
    
    if(array == jugador1){
        document.getElementById('caja3').innerHTML = '<p>El jugador 1 ha ganado la partida.</p>'+
                                                     '<p>Hacer un click en REINICIAR para continuar.</p>'+
                                                     '<p>Hacer doble click para REINICIAR el juego.</p>';
        ganadas1++;
        document.getElementById('rdo1').innerHTML = ganadas1;
        document.getElementById('caja2').style.pointerEvents = 'none';
    } else if(array == jugador2){
        document.getElementById('caja3').innerHTML = '<p>El jugador 2 ha ganado la partida.</p>'+
                                                     '<p>Hacer un click en REINICIAR para continuar.</p>'+
                                                     '<p>Hacer doble click para REINICIAR el juego.</p>';
        ganadas2++;
        document.getElementById('rdo2').innerHTML = ganadas2;
        document.getElementById('caja2').style.pointerEvents = 'none';
    } else {
        document.getElementById('caja3').innerHTML = '<p>Fin del juego.</p>'+
                                                     '<p>Hacer un click en REINICIAR para continuar.</p>'+
                                                     '<p>Hacer doble click para REINICIAR el juego.</p>';
        document.getElementById('caja2').style.pointerEvents = 'none';
    }
}

function comprobar(array){
    let coincidencias = 0;
    array.sort();

    for(let i=0; i<tresenlinea.length; i++){
        
        coincidencias = 0;
        arrayganador = [];

        for(let j=0; j<tresenlinea[i].length; j++){
            
            for(let k=0; k<array.length; k++){

                if(tresenlinea[i][j] == array[k]){
                    coincidencias++;
                    arrayganador.push(array[k])
                }

                if (coincidencias == 3){

                    if(array == jugador1){
                        jugador1 = arrayganador;
                    } else if(array == jugador2){
                        jugador2 = arrayganador;
                    }
                    limiteFinal(arrayganador);
                    
                    return;
                }
            }
        }
    }
    if (contador == 9){
        
        let nuevoarray = [];
        limiteFinal(nuevoarray);
    }
}

function continuarJugando(){

    if((ganadas1 == 5) || (ganadas2 == 5)){
        reiniciarJuego();
    } else {
        document.getElementById('caja2').innerHTML = '<div id="1"></div><div id="2"></div><div id="3"></div><div id="4"></div><div id="5"></div><div id="6"></div><div id="7"></div><div id="8"></div><div id="9"></div>';
        document.getElementById('caja2').style.pointerEvents = 'initial';
        contador = 1;
        jugador1 = [];
        jugador2 = [];
        arrayganador = [];
        document.getElementById('caja3').innerHTML = '';
        aQuienLeToca();
    }
}

function reiniciarJuego(){
    document.getElementById('caja2').innerHTML = '<div id="1"></div><div id="2"></div><div id="3"></div><div id="4"></div><div id="5"></div><div id="6"></div><div id="7"></div><div id="8"></div><div id="9"></div>';
    document.getElementById('caja2').style.pointerEvents = 'initial';
    contador = 1;
    jugador1 = [];
    jugador2 = [];
    arrayganador = [];
    ganadas1 = 0;
    ganadas2 = 0;
    document.getElementById('rdo1').innerHTML = ganadas1;
    document.getElementById('rdo2').innerHTML = ganadas2;
    document.getElementById('caja3').innerHTML = '';
    aQuienLeToca();
}