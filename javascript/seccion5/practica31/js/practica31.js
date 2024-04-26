
document.getElementById('caja-cubilete').addEventListener('click', mezclar, false);
document.getElementById('caja-comprobar').addEventListener('click', verificarNumerosIngresados, false);
document.getElementById('boton-rdo').addEventListener('click', comprobar, false);

let numerosfinal = [];
let numingresadosfinal = [];

function mezclar(){
    numerosfinal.pop();
    let numeros = [];

    let num = Math.floor(Math.random() * 49) + 1;
    numeros.push(num);

    if (numeros.length == 1) {
        document.getElementById('box1').innerHTML = num;
    }

    while (numeros.length < 6){
        num = Math.floor(Math.random() * 49) + 1;

        for (let i=0; i < numeros.length; i++){
            if (num == numeros[i]){
                break
            } else if (i == numeros.length-1){
                document.getElementById(`box${i+2}`).innerHTML = num;
                numeros.push(num);
                break
            }
        }

    }

    let num1 = Math.floor(Math.random() * 10);
    document.getElementById('box-reintegro').innerHTML = num1;
    numeros.push(num1);
    numerosfinal = numeros;
}

function verificarNumerosIngresados(){

    let numingresados = [];
    let numintro = '';
    let numintro1 = '';
    numingresados.pop();

    for(let i=7; i<13; i++) {

        numintro = Number(document.getElementById(`box${i}`).value);
        document.getElementById(`box${i}`).style.color = 'black';

        if((numintro > 0) && (numintro < 50)){
            
            if(numingresados.indexOf(numintro) == -1){
                numingresados.push(numintro);
            } else {
                document.getElementById(`box${i}`).style.color = 'red';
            }

        } else {
            document.getElementById(`box${i}`).style.color = 'red';
        }
    }
    
    if (numingresados.length == 6){
        /* compruebo el 7mo valor */
        numintro1 = Number(document.getElementById('box13').value);
        document.getElementById('box13').style.color = 'black';

        if(!isNaN(numintro1)){
            numingresados.push(numintro1);
        } else {
            document.getElementById('box13').style.color = 'red';
        }
        
        if (numingresados.length == 7){
            document.getElementById('boton-rdo').disabled = false;
            document.getElementById('boton-rdo').style.backgroundColor = 'blueviolet';
            numingresadosfinal = numingresados;
        }
    }


    
        
}




function comprobar(){
    sinEstilos();
    contador = 0;
    /* for (i of numeros) {
        for (j of numingresadosfinal) {
            
        }
        
    } */
    
    for(let i=0; i<numerosfinal.length-1; i++){

        for (let j = 0; j < numingresadosfinal.length-1; j++) {
            if(numerosfinal[i] == numingresadosfinal[j]){
                contador++;
            }
        }
    }
    
    if (contador < 3) {
        estilos();
        document.getElementById('rdo1').style.backgroundColor = 'red';
        document.getElementById('rdo1').innerHTML = '<p>Usted acerto ' + contador + ' numero/s de la primitiva</p>';
        
    } else if (contador >= 3) {
        estilos();
        document.getElementById('rdo1').style.backgroundColor = 'green';
        document.getElementById('rdo1').innerHTML = '<p>Usted acerto ' + contador + ' numero/s de La Primitiva</p>';
    }
    if (numerosfinal[6] == numingresadosfinal[6]){
        document.getElementById('rdo2').style.border = '1px solid black';
        document.getElementById('rdo2').style.borderRadius = '1vh';
        document.getElementById('rdo2').style.width = '45%';
        document.getElementById('rdo2').style.height = '30%';
        document.getElementById('rdo2').style.display = 'flex';
        document.getElementById('rdo2').style.justifyContent = 'center';
        document.getElementById('rdo2').style.alignItems = 'center';
        document.getElementById('rdo2').style.fontSize = '2.5vh';
        document.getElementById('rdo2').style.color = 'white';
        document.getElementById('rdo2').style.backgroundColor = 'green';
        document.getElementById('rdo2').innerHTML = '<p>La Primitiva le devuelve el valor de su apuesta</p>';
    }
}

function estilos(){
    document.getElementById('rdo1').style.border = '1px solid black';
    document.getElementById('rdo1').style.borderRadius = '1vh';
    document.getElementById('rdo1').style.width = '45%';
    document.getElementById('rdo1').style.height = '30%';
    document.getElementById('rdo1').style.display = 'flex';
    document.getElementById('rdo1').style.justifyContent = 'center';
    document.getElementById('rdo1').style.alignItems = 'center';
    document.getElementById('rdo1').style.fontSize = '3vh';
    document.getElementById('rdo1').style.color = 'white';
}

function sinEstilos() {
    document.getElementById('rdo1').style.border = 'none';
    document.getElementById('rdo1').style.width = '0%';
    document.getElementById('rdo1').style.height = '0%';
    document.getElementById('rdo1').style.fontSize = '0';
    document.getElementById('rdo1').style.backgroundColor = 'inherit';
    document.getElementById('rdo1').innerHTML = '';

    document.getElementById('rdo2').style.border = 'none';
    document.getElementById('rdo2').style.width = '0%';
    document.getElementById('rdo2').style.height = '0%';
    document.getElementById('rdo2').style.fontSize = '0';
    document.getElementById('rdo2').style.backgroundColor = 'inherit';
    document.getElementById('rdo2').innerHTML = '';
}