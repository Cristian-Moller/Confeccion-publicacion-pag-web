document.getElementById('caja-agregar').addEventListener('click', isParImpar,false);
document.getElementById('caja-resolver').addEventListener('click', imprimir,false);

let pares = [];
let impares = [];
let contador = 0;
let suma = 0;
let promedio = '';

function isParImpar(){

    let num = Number(document.getElementById('numeros').value);
    
    if(!isNaN(num)){

        if (num % 2 == 0){
            pares.push(num);
        } else {
            impares.push(num);
        }
        document.getElementById('numeros').value = '';
    } else {
        window.alert('Valor introducido no es un número')
        document.getElementById('numeros').value = '';
    }
}

function imprimir(){
    estilos();
    document.getElementById('mostrar-pares').innerHTML = '<p>NUMEROS PARES: <strong> '+ pares + '</strong></p>';
    document.getElementById('mostrar-impares').innerHTML = '<p>NUMEROS IMPARES: <strong> '+ impares + '</strong></p>';
}

function estilos() {
    document.getElementById('caja2').style.width = '80%';
    document.getElementById('caja2').style.height = 'auto';
    document.getElementById('caja2').style.marginBottom = '2vh';
    document.getElementById('caja2').style.display = 'inline-flex';
    document.getElementById('caja2').style.flexWrap = 'wrap';
    document.getElementById('caja2').style.flexDirection = 'column';
    document.getElementById('caja2').style.rowGap = '1vh';
    document.getElementById('caja2').style.justifyContent = 'center';
    document.getElementById('caja2').style.fontSize = '3vh';

    document.getElementById('mostrar-pares').style.border = '1px solid black';
    document.getElementById('mostrar-pares').style.width = '100%';
    document.getElementById('mostrar-pares').style.height = 'auto';
    document.getElementById('mostrar-pares').style.display = 'inline-flex';
    document.getElementById('mostrar-pares').style.justifyContent = 'center';
    document.getElementById('mostrar-pares').style.alignItems = 'center';

    document.getElementById('mostrar-impares').style.border = '1px solid black';
    document.getElementById('mostrar-impares').style.width = '100%';
    document.getElementById('mostrar-impares').style.height = 'auto';
    document.getElementById('mostrar-impares').style.display = 'inline-flex';
    document.getElementById('mostrar-impares').style.justifyContent = 'center';
    document.getElementById('mostrar-impares').style.alignItems = 'center';
}