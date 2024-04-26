

document.getElementById('caja-solicitar').addEventListener('click', concesionPrestamo, false);


let nombre = "";
let edad = 0;
let ingresos = 0;

function concesionPrestamo(){
    
    nombre = document.getElementById('nombres').value.toUpperCase();
    edad = Number(document.getElementById('edad').value);
    ingresos = Number(document.getElementById('ingresos').value);

    if ((edad >= 18) && (edad <= 100)){

        if ((edad >= 65) && (ingresos >= 1500)){

            document.getElementById('nombre').innerHTML = nombre;
            document.getElementById('prestamo').innerHTML = 'OK Préstamo concedido';

        } else if ((edad >= 65) && (ingresos < 1500)){

            document.getElementById('nombre').innerHTML = nombre;
            document.getElementById('prestamo').innerHTML = 'OK Préstamo si avala el 30%';

        } else if ((edad < 65) && (ingresos >= 1500)){

            document.getElementById('nombre').innerHTML = nombre;
            document.getElementById('prestamo').innerHTML = 'OK Préstamo si avala el 50%';

        } else if ((edad < 65) && (ingresos < 1500)){

            document.getElementById('nombre').innerHTML = nombre;
            document.getElementById('prestamo').innerHTML = 'Préstamo NO concedido';
        }

    } else {
        window.alert('Ha introducido datos erroneos, por favor correbórelos o acuda a la sucursal más cercana')
    }

}
