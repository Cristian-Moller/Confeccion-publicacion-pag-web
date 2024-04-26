document.getElementById('caja-imagen').addEventListener('dblclick', estilos, false);
document.getElementById('boton').addEventListener('click', estilos1, false);

let anchoinicial = document.getElementById('caja-imagen').clientWidth;
let altoinicial = document.getElementById('caja-imagen').clientHeight;
let altocajasinicial = document.getElementById('caja1').clientHeight;
let altocaja1inicial = document.getElementById('cajas').clientHeight;
let altobotoninicial = document.getElementById('boton').clientHeight;


function estilos() {
    let ancho = document.getElementById('caja-imagen').clientWidth;
    let alto = document.getElementById('caja-imagen').clientHeight;
    ancho = ancho*(1+10/100);
    alto = alto*(1+10/100);

    let altocajas = document.getElementById('caja1').clientHeight;
    let altocaja1 = document.getElementById('cajas').clientHeight;
    let altoboton = document.getElementById('boton').clientHeight;

    altocajas = altocajas*(1+10/100);
    altocaja1 = altocaja1*(1+10/100);
    altoboton = altoboton*(1-0.5/100);
    
    document.getElementById('caja1').style.justifyContent = 'center';
    document.getElementById('caja1').style.alignItems = 'center';
    document.getElementById('caja1').style.height = altocajas+'px';
    document.getElementById('cajas').style.height = altocaja1+'px';
    document.getElementById('boton').style.height = altoboton+'px';
    
    document.getElementById('caja-imagen').style.width = ancho+'px';
    document.getElementById('caja-imagen').style.height = alto+'px';

}

function estilos1() {
    document.getElementById('caja-imagen').style.width = anchoinicial+'px';
    document.getElementById('caja-imagen').style.height = altoinicial+'px';
    document.getElementById('caja-imagen').style.display = 'inline-flex';
    document.getElementById('caja-imagen').style.justifyContent = 'center';
    document.getElementById('caja-imagen').style.alignItems = 'center';
    document.getElementById('caja1').style.height = altocajasinicial+'px';
    document.getElementById('cajas').style.height = altocaja1inicial+'px';
    document.getElementById('boton').style.height = altobotoninicial+'px';
}