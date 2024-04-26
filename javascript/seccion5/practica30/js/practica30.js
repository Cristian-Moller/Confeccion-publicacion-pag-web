
document.getElementById('caja-enviar').addEventListener('click', agregarPlato, false);
document.getElementById('caja-enviar2').addEventListener('click', enviarPlato, false);
document.getElementById('caja-finalizar').addEventListener('click', finalizar, false);
document.getElementById('caja-fondo').addEventListener('mousemove', estado, false);

let platosCocina = [];
let platosComedor = [];
let contarPlatos = '';

function estado(){
    if(platosCocina == 0){
        document.getElementById('cocina').innerHTML = '<p>La cocina esta sin platos </p>';
        /* document.getElementById('caja-enviar2').disabled = true; */
    } else {
        document.getElementById('cocina').innerHTML = '';
    }

    if(platosComedor == 0){
        document.getElementById('comedor').innerHTML = '<p>El comedor esta sin platos </p>';
    } else {
        document.getElementById('comedor').innerHTML = '';
    }
    
    if((platosCocina == 0) && (platosComedor == 0)){
        document.getElementById('caja-estado').style.backgroundColor = 'red';
        document.getElementById('caja-estado').innerHTML = '<p>Servicio Finalizado</p>';
        document.getElementById('comedor').innerHTML = '<p>Servicio Finalizado. Total ' + contarPlatos + ' Comandas</p>';
    } else {
        document.getElementById('caja-estado').style.backgroundColor = 'green';
        document.getElementById('caja-estado').innerHTML = '<p>Servicio Activo</p>';
    }

}

function agregarPlato(){

    let plato = document.getElementById('plato').value;
    
    platosCocina.push(plato);

    document.getElementById('plato').value = '';     

    imprimirCocina();
    contarPlatos++;
}

function imprimirCocina(){
    document.getElementById('caja-platos-cocina').innerHTML = '';

    let indice = 1;
    for (i in platosCocina) {
        document.getElementById('caja-platos-cocina').innerHTML += '<p>' + indice + ' ' + platosCocina[i] + '</p>' 
        indice++;
    };
    
}

function enviarPlato(){

    if(platosCocina.length != 0){
        
        let plato = platosCocina.shift();
        
        platosComedor.push(plato);
    
        imprimirComedor();
    }
}

function imprimirComedor(){

    document.getElementById('caja-platos-comedor').innerHTML = '';

    let indice = 1;
    for (i in platosComedor) {
        document.getElementById('caja-platos-comedor').innerHTML += '<p>' + indice + ' ' + platosComedor[i] + '</p>' 
        indice++;
    };
    imprimirCocina();
}

function finalizar(){

    platosComedor.shift();

    document.getElementById('caja-platos-comedor').innerHTML = '';

    let indice = 1;
    for (i in platosComedor) {
        document.getElementById('caja-platos-comedor').innerHTML += '<p>' + indice + ' ' + platosComedor[i] + '</p>' 
        indice++;
    };
}