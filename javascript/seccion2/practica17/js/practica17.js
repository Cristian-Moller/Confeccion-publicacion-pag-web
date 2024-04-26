

document.getElementById('caja-iniciar').addEventListener('click', subidaBajada, false);


let num = "";

function subidaBajada(){
    
    num = Number(document.getElementById('nota').value);

    
    
    if (num >= 0){

        let condicion = num;
        document.getElementById('bajada').innerHTML = (num + ' - ');

        do{
            condicion--;
            
            document.getElementById('bajada').innerHTML += (condicion + ' - ');
    
        } while (condicion > 0);

        let subir = condicion;
        document.getElementById('subida').innerHTML = (subir + ' - ');

        document.getElementById('caja-fondo').style.height = 'auto';
        document.getElementById('palabras').style.height = 'auto';
        document.getElementById('palabra1').style.height = '5vw';
        document.getElementById('palabra2').style.height = 'auto';

        do{
            subir+=2;
            
            if (subir <= num){
                document.getElementById('subida').innerHTML += (subir + ' - ');
            }
    
        } while (subir < num);

    } else {
        window.alert('Valor fuera de rango');
    }

}
