document.getElementById('caja1').addEventListener('click', estilos, false);

let contador=0;

function estilos() {
    if (contador % 2 == 0){
        document.getElementById('caja1').style.backgroundImage = "url('/javascript/seccion6/practica42/imagenes/cruz.png')";
        document.getElementById('caja2').innerHTML = '';
        for (let i=1; i<7; i++) {

            let leyenda = '';
            switch (i) {
                case 1:
                    leyenda = 'Ropa';
                    break;
                case 2:
                    leyenda = 'Zapatos';
                    break;
                case 3:
                    leyenda = 'Deportes';
                    break;
                case 4:
                    leyenda = 'Vestidos';
                    break;
                case 5:
                    leyenda = 'Gorros';
                    break;    
                case 6:
                    leyenda = 'Contacto';
                    break;    
                default:
                    break;
            }
            document.getElementById('caja2').innerHTML += `<span id="linea${i}">${leyenda}</span>`;
                
            document.getElementById(`linea${i}`).style.border = '1px solid magenta';
            document.getElementById(`linea${i}`).style.width = '80%';
            document.getElementById(`linea${i}`).style.height = '10%';
            document.getElementById(`linea${i}`).style.animationDuration = '3s';
            document.getElementById(`linea${i}`).style.animationName = 'lineas';
            document.getElementById(`linea${i}`).style.animationFillMode = 'forwards';
        }
        contador++;
    } else {
        document.getElementById('caja1').style.backgroundImage = "url('/javascript/seccion6/practica42/imagenes/menu.png')";

        for (let i=1; i<7; i++) {
            document.getElementById('caja2').innerHTML += `<span id="linea${i}"></span>`;
                
            document.getElementById(`linea${i}`).style.border = '1px solid magenta';
            document.getElementById(`linea${i}`).style.width = '80%';
            document.getElementById(`linea${i}`).style.height = '10%';
            document.getElementById(`linea${i}`).style.animationDuration = '3s';
            document.getElementById(`linea${i}`).style.animationName = 'lineas1';
            document.getElementById(`linea${i}`).style.animationFillMode = 'forwards';
        }
        contador++;
    }
}