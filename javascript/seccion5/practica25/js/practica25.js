
document.getElementById('introducir').addEventListener('click', agregarValor, false);
document.getElementById('caja-mostrar').addEventListener('click', imprimir, false);

let lista = [];

function agregarValor(){

    let valor = document.getElementById('valor').value;
    
    lista.push(valor);

    document.getElementById('valor').value = '';
}

function estilos() {
    document.getElementById('caja2').style.width = '80%';
    document.getElementById('caja2').style.height = 'auto';
    document.getElementById('caja2').style.marginBottom = '2vh';
    document.getElementById('caja2').style.display = 'inline-flex';
    document.getElementById('caja2').style.flexWrap = 'wrap';
    document.getElementById('caja2').style.rowGap = '1vh';
    document.getElementById('caja2').style.justifyContent = 'center';
    document.getElementById('caja2').style.fontSize = '4vh';

    document.getElementById('lista-final').style.border = '1px solid black';
    document.getElementById('lista-final').style.width = '50%';
    document.getElementById('lista-final').style.height = 'auto';
    document.getElementById('lista-final').style.display = 'inline-flex';
    document.getElementById('lista-final').style.justifyContent = 'center';
    document.getElementById('lista-final').style.alignItems = 'center';

    document.getElementById('lista-tamaño').style.border = '1px solid black';
    document.getElementById('lista-tamaño').style.width = '50%';
    document.getElementById('lista-tamaño').style.height = 'auto';
    document.getElementById('lista-tamaño').style.display = 'inline-flex';
    document.getElementById('lista-tamaño').style.justifyContent = 'center';
    document.getElementById('lista-tamaño').style.alignItems = 'center';

}

function imprimir(){

    estilos();
     document.getElementById('lista-final').innerHTML = 
    '<p>Lista Final: '+ '<strong>' + lista + '</strong>' + '</p>';

    document.getElementById('lista-tamaño').innerHTML = 
    '<p>Tamaño de la Lista: '+ '<strong>' + lista.length + '</strong>' + '</p>';

}