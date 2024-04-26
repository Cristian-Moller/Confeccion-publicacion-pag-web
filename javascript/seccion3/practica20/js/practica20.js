

document.getElementById('caja-convertir').addEventListener('click', fahrenheit, false);


let gradosF = "";
let gradosC = "";

function fahrenheit(){
    
    gradosF = Number(document.getElementById('intro-grados').value);

    if ((gradosF >= 0) && (gradosF <= 130)){

        gradosC = ((gradosF - 32) * 5 / 9).toFixed(1);
        /* gradosC = Math.round(((gradosF - 32) * 5 / 9) * 100 / 1000); */

        document.getElementById('grados').innerHTML = gradosC + 'º Celsius';

        if (gradosC > 0){
            
            document.getElementById('grados').style.backgroundColor = 'green';
        } else {
            
            document.getElementById('grados').style.backgroundColor = 'red';
        }

        
    } else {
        window.alert('El valor introducido NO es correcto. Rango de 0 a 130 ºF')
    }

}
