document.getElementById('caja-consultar').addEventListener('click', localizarArray,false);

let marcas = ["Audi", "BMW", "Nissan", "Opel", "Jaguar", "Seat", "Fiat", "Tesla"];
console.log(marcas);

function localizarArray(){

    console.log(marcas);

    let marca = document.getElementById('marca').value;

    let estara = Number(marcas.indexOf(marca));
    

    if (estara >= 0){

        estilos();
        document.getElementById('busqueda').innerHTML = '<p>Vehiculo '+ '<strong>' + marcas[estara] + '</strong>' + ' Localizado</p>';
        marcas.splice(estara, 1)
    } else {

        if (marcas.length == 0){
            estilos();
            document.getElementById('busqueda').innerHTML = '<p>No hay más elementos en el array</p>';
        } else {
            estilos();
            document.getElementById('busqueda').innerHTML = '<p>Vehiculo NO Localizado</p>';
        }
    }
    
    document.getElementById('marca').value = '';
    
    console.log(marcas);
    estara = -1;
}   

function estilos() {
    document.getElementById('caja2').style.width = '80%';
    document.getElementById('caja2').style.height = 'auto';
    document.getElementById('caja2').style.marginBottom = '2vh';
    document.getElementById('caja2').style.display = 'inline-flex';
    document.getElementById('caja2').style.justifyContent = 'center';
    document.getElementById('caja2').style.fontSize = '3vh';

    document.getElementById('busqueda').style.border = '1px solid black';
    document.getElementById('busqueda').style.width = '50%';
    document.getElementById('busqueda').style.height = 'auto';
    document.getElementById('busqueda').style.display = 'inline-flex';
    document.getElementById('busqueda').style.justifyContent = 'center';
    document.getElementById('busqueda').style.alignItems = 'center';

}