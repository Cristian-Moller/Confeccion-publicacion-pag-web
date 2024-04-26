document.getElementById('caja-consultar').addEventListener('click', evaluarArray, false);

let nums = [7, 8, 5, 8, 15, 13, 90, 16, 2, 11, 19, 24, 36, 14, 21, 1, 76, 43, 17, 22, 41];
let valormax = '';
let valormin = '';
let nueva_lista = [];
let contador = 0;
let suma = 0;
let promedio = '';

function evaluarArray(){

    
    for (let i=0; i < nums.length; i++){

        /* Determinar valor max*/
        if (nums[i] > valormax){
            valormax = nums[i];
        }

        /* Determinar valor min*/
        if (i == 0){
            valormin = nums[i];
        }
        if (nums[i] < valormin){
            valormin = nums[i];
        }

        if((nums[i] >= 10) && (nums[i] < 100)){
            nueva_lista.push(nums[i]);
            contador++;
        }

    }
    promedio = promediar();
    

    document.getElementById('caja-max').innerHTML = '<p>Valor Máximo: <strong> '+ valormax + '</strong></p>';
    document.getElementById('caja-min').innerHTML = '<p>Valor Mínimo: <strong> '+ valormin + '</strong></p>';
    /* Determinar promedio de numeros con 2 decimales */
    
    document.getElementById('caja-promedio').innerHTML = '<p>Valor Promedio: <strong> '+ promedio + '</strong></p>';

    
} 
function promediar(){
    for (let i=0; i<nueva_lista.length; i++){
        suma += nueva_lista[i];
    }

    promedio = suma / contador;

    return promedio.toFixed(2);
}