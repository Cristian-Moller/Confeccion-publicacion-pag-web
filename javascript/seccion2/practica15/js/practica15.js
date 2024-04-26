


document.getElementById('titulo').addEventListener('click', pedirNumeros, false);
document.getElementById('caja-iniciar').addEventListener('click', sumaYpromedio, false);


let numeros = [];
let num = "";
let suma = 0;
let promedio = 0;

function pedirNumeros(){

    num = Number(window.prompt('Introduzca numeros diferentes a 0 (cero)'));

    while (num != 0){

        numeros.push(num);

        num = Number(window.prompt('Introduzca numeros diferentes a 0 (cero)'));
    }

    document.getElementById('palabra1').innerHTML = numeros;
}

function sumaYpromedio(){
    
    document.getElementById('palabra4').innerHTML = numeros.length;

    for(let i=0; i<numeros.length; i++){
        suma += numeros[i];
    }

    document.getElementById('palabra2').innerHTML = suma;

    promedio = suma / numeros.length;
    document.getElementById('palabra3').innerHTML = promedio;

}
