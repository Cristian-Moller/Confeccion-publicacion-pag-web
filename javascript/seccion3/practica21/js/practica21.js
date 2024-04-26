
document.getElementById('caja-calcular').addEventListener('click', verificar, false)



function verificar(){

    let radio = Number(document.getElementById('radio').value);
    let totalSuperficie = 0;
    let totalVolumen = 0;

    if (!isNaN(radio)){
        

        /* llamar funcion superficie*/
        totalSuperficie = superficie(radio);

        /* llamar funcion volumen*/
        totalVolumen = volumen(radio);
        
    } else {
        alert('Vuelve a intentar con un numero');
    }

    imprimir(totalSuperficie, totalVolumen);
}

function superficie(radio){
    let resultado = 0;
    resultado = 4 * Math.PI * Math.pow(radio, 2);
    return resultado.toFixed(2);
}

function volumen(radio){
    let resultado = 0;
    resultado = 4/3 * Math.PI * Math.pow(radio, 3);
    return resultado.toFixed(2);
}

function imprimir(superf, volum) {

    document.getElementById('caja-superficie').innerHTML = 'Superficie: ' + superf;
    document.getElementById('caja-volumen').innerHTML = 'Volumen: ' + volum;
}