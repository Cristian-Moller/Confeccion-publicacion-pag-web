document.getElementById('agregar-delante').addEventListener('click', agregarDelante,false);
document.getElementById('agregar-detras').addEventListener('click', agregarDetras,false);
document.getElementById('eliminar-delante').addEventListener('click', eliminarDelante,false);
document.getElementById('eliminar-detras').addEventListener('click', eliminarDetras,false);
document.getElementById('resetear').addEventListener('click', resetear,false);
document.getElementById('eliminar').addEventListener('blur', eliminarValor,false);

let lista = [];

function agregarDelante(){

    let valor = document.getElementById('valores').value;
    lista.unshift(valor);

    ultimoAgregado(valor);
    
    document.getElementById('valores').value = '';
    imprimir();
}

function imprimir(){
    document.getElementById('array-generado').innerHTML = lista;
}

function ultimoAgregado(valor){
    document.getElementById('ultimo-agregado').innerHTML = valor;
}

function agregarDetras(){
    let valor = document.getElementById('valores').value;
    lista.push(valor);

    ultimoAgregado(valor);
    
    document.getElementById('valores').value = '';
    imprimir();
}

function eliminarDelante(){

    /* primero conservo el primer valor del array, luego lo elimino */
    let valor = lista[0];
    document.getElementById('ultimo-eliminado').innerHTML = valor;

    lista.shift();

    document.getElementById('valores').value = '';
    imprimir();
}
function eliminarDetras(){

    /* primero conservo el ultimo valor del array, luego lo elimino */
    let valor = lista[lista.length-1];
    document.getElementById('ultimo-eliminado').innerHTML = valor;

    lista.pop();

    document.getElementById('valores').value = '';
    imprimir();
}

function resetear(){

    lista = [];
    document.getElementById('ultimo-agregado').innerHTML = '';
    document.getElementById('ultimo-eliminado').innerHTML = '';
    imprimir();
}

function eliminarValor(){

    let valor = document.getElementById('eliminar').value;

    let estara = lista.indexOf(valor);
    

    if (estara >= 0){

        /* si el valor a eliminar esta, lo guardo y luego lo elimino */
        document.getElementById('ultimo-eliminado').innerHTML = valor;

        lista.splice(estara, 1)

        imprimir();
        document.getElementById('eliminar').value = '';

    } else {

        window.alert('Valor No localizado')
        document.getElementById('eliminar').value = '';
    }
    
}
