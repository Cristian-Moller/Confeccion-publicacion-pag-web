
document.getElementById('caja-calcular').addEventListener('click', capturar, false)


function capturar(){

    let num1 = Number(document.getElementById('precio').value);
    let num2 = Number(document.getElementById('descuento').value);

    estilos();

    if ((!isNaN(num1)) && (!isNaN(num2))) {
        
        let resultado = preciofinal(num1, num2);

        imprimir(resultado);

    } else {
        window.alert('Los datos introducidos no son válidos');
        /* deberia setear los inputs */
        let numero1 = document.getElementById('precio');
        let numero2 = document.getElementById('descuento');
        numero1.value = "";
        numero2.value = "";
    }

}

function estilos() {
    document.getElementById('caja2').style.width = '80%';
    document.getElementById('caja2').style.height = 'auto';
    document.getElementById('caja2').style.marginBottom = '2vh';
    document.getElementById('caja2').style.display = 'inline-flex';
    document.getElementById('caja2').style.justifyContent = 'center';

    document.getElementById('precio-final').style.border = '1px solid black';
    document.getElementById('precio-final').style.width = '50%';
    document.getElementById('precio-final').style.height = '5vh';
    document.getElementById('precio-final').style.display = 'inline-flex';
    document.getElementById('precio-final').style.justifyContent = 'center';
    document.getElementById('precio-final').style.alignItems = 'center';
    document.getElementById('caja2').style.fontSize = '3vh';

}
function preciofinal(precio, descuento){

    let resultado = precio * (1 - descuento/100);

    return resultado;
}

function imprimir(resultado){

     document.getElementById('precio-final').innerHTML = 
    '<p>Precio Final: '+ '<strong>' + resultado + '</strong>' + '€' + '</p>';

}