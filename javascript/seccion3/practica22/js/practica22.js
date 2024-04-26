
document.getElementById('caja-login').addEventListener('click', comprobar, false)

let validar = 1;

function comprobar(){

    let texto1 = document.getElementById('clave1').value;
    let texto2 = document.getElementById('clave2').value;

    if (texto1 == texto2){
        
        /* comprobar que la cadena de texto tenga más de 6 caracteres */
        if (texto1.length >= 6){
            resetEstilos()
            /* llamar funcion password*/
            password()
            
        } else {
            errorClave()
            alert('Su Password debe poseer mas de seis caracteres');
        }

    } else {
        errorClave()
    }

}

function estilos() {
    document.getElementById('campoOK').style.width = '80%';
    document.getElementById('campoOK').style.height = '2vh';
    document.getElementById('campoOK').style.textAlign = 'center';
    document.getElementById('campoOK').style.color = 'red';
}
function resetEstilos(){
    document.getElementById('campoOK').style.width = '0%';
    document.getElementById('campoOK').style.height = '0vh';
    document.getElementById('campoOK').style.textAlign = 'none';
    document.getElementById('campoOK').style.color = 'none';
    document.getElementById('campoOK').innerHTML = "";
}
function estilos1() {
    document.getElementById('acceso').style.width = '40%';
    document.getElementById('acceso').style.height = '5vh';
    document.getElementById('acceso').style.textAlign = 'center';
    document.getElementById('acceso').style.color = 'white';
    document.getElementById('acceso').style.backgroundColor = 'red';
    document.getElementById('acceso').style.fontSize = '4vh';
}

function errorClave(){

    if(validar === 1){
        estilos();
        document.getElementById('campoOK').innerHTML = "Incorrecto le queda 2 intentos";
    } else if(validar === 2){
        estilos();
        document.getElementById('campoOK').innerHTML = "Incorrecto le queda 1 intento";
    } else if(validar === 3){
        resetEstilos();
        estilos1();
        document.getElementById('acceso').innerHTML = "Acceso Denegado";
        document.getElementById('caja-login').disabled = true;
        document.getElementById('clave1').disabled = true;
        document.getElementById('clave2').disabled = true;
    }

    validar++;
}

function password(){
    document.getElementById('acceso').style.width = '50%';
    document.getElementById('acceso').style.height = '5vh';
    document.getElementById('acceso').style.textAlign = 'center';
    document.getElementById('acceso').style.color = 'white';
    document.getElementById('acceso').style.backgroundColor = 'green';
    document.getElementById('acceso').style.fontSize = '4vh';

    document.getElementById('acceso').innerHTML = "ACCESO PERMITIDO"
    document.getElementById('caja-login').disabled = true;
    document.getElementById('clave1').disabled = true;
    document.getElementById('clave2').disabled = true;
}