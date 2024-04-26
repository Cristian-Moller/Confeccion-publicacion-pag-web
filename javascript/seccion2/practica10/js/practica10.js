

document.getElementById('titulo').addEventListener('click', numeroIngresado, false)
document.getElementById('caja-comprobar').addEventListener('click', comprobarNumero, false)


let numero = 0;

function numeroIngresado(){
    numero = Number(window.prompt('Introduzca un numero entre 0 y 100'));

    document.getElementById('palabra1').innerHTML = numero;
    document.getElementById('palabra1').style.fontWeight = 'bold';

}

function comprobarNumero(){
    document.getElementById('palabra3').style.textDecoration = 'none';
    document.getElementById('palabra3').style.fontWeight = 'inherit';

    if ((numero >= 0) && (numero <= 100)){

        if (numero < 50) {
            if (numero % 2 == 0) {
                document.getElementById('palabra3').innerHTML = "El numero es PAR y menor a 50";
                document.getElementById('palabra3').style.fontSize = '3.5vh';
            } else {
                document.getElementById('palabra3').innerHTML = "El numero es IMPAR y menor a 50";
                document.getElementById('palabra3').style.fontSize = '3.5vh';
            }
        } else {
            if (numero % 2 == 0) {
                document.getElementById('palabra3').innerHTML = "El numero es PAR";
                document.getElementById('palabra3').style.fontSize = '5vh';
            } else {
                document.getElementById('palabra3').innerHTML = "El numero es IMPAR";
                document.getElementById('palabra3').style.fontSize = '5vh';
            }
        }
        
    
    } else {
        document.getElementById('palabra3').innerHTML = "Numero Incorrecto (fuera del rango)";
        document.getElementById('palabra3').style.fontWeight = 'bold';
        document.getElementById('palabra3').style.fontSize = '3vh';
        document.getElementById('palabra3').style.textDecoration = 'underline';
    }
}