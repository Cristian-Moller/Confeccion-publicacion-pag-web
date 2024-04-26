document.getElementById('cajas').addEventListener('mouseover', estilos, false);
document.getElementById('cajas').addEventListener('mouseout', sinEstilos, false);



function estilos(e) {
    
    let identificador = e.target.id;

    console.log(identificador);

    if (identificador == 'img1'){
        
        document.getElementById('caja1').style.width = '45%';
        document.getElementById('caja1').style.height = '45%';
        document.getElementById('caja1').style.border = '3px solid magenta';
        document.getElementById('caja1').style.borderRadius = '2vh';
        document.getElementById('caja1').style.boxShadow = '5px 5px 5px green';
        document.getElementById('img1').style.borderRadius = '2vh';


    } else if (identificador == 'img2'){
        
        document.getElementById('caja2').style.width = '45%';
        document.getElementById('caja2').style.height = '45%';
        document.getElementById('caja2').style.border = '3px solid magenta';
        document.getElementById('caja2').style.borderRadius = '2vh';
        document.getElementById('caja2').style.boxShadow = '5px 5px 5px green';
        document.getElementById('img2').style.borderRadius = '2vh';

    } else if (identificador == 'img3'){
        
        document.getElementById('caja3').style.width = '45%';
        document.getElementById('caja3').style.height = '45%';
        document.getElementById('caja3').style.border = '3px solid magenta';
        document.getElementById('caja3').style.borderRadius = '2vh';
        document.getElementById('caja3').style.boxShadow = '5px 5px 5px green';
        document.getElementById('img3').style.borderRadius = '2vh';

    } else if (identificador == 'img4'){
        
        document.getElementById('caja4').style.width = '45%';
        document.getElementById('caja4').style.height = '45%';
        document.getElementById('caja4').style.border = '3px solid magenta';
        document.getElementById('caja4').style.borderRadius = '2vh';
        document.getElementById('caja4').style.boxShadow = '5px 5px 5px green';
        document.getElementById('img4').style.borderRadius = '2vh';
    }
}

function sinEstilos(e) {
    
    let identificador = e.target.id;

    console.log(identificador);

    if (identificador == 'img1'){
        
        document.getElementById('caja1').style.width = '35%';
        document.getElementById('caja1').style.height = '35%';
        document.getElementById('caja1').style.border = '1px dashed red';
        document.getElementById('caja1').style.borderRadius = '0vh';
        document.getElementById('caja1').style.boxShadow = 'none';
        document.getElementById('img1').style.borderRadius = '0vh';

    } else if (identificador == 'img2'){
        
        document.getElementById('caja2').style.width = '35%';
        document.getElementById('caja2').style.height = '35%';
        document.getElementById('caja2').style.border = '1px dashed red';
        document.getElementById('caja2').style.borderRadius = '0vh';
        document.getElementById('caja2').style.boxShadow = 'none';
        document.getElementById('img2').style.borderRadius = '0vh';

    } else if (identificador == 'img3'){
        
        document.getElementById('caja3').style.width = '35%';
        document.getElementById('caja3').style.height = '35%';
        document.getElementById('caja3').style.border = '1px dashed red';
        document.getElementById('caja3').style.borderRadius = '0vh';
        document.getElementById('caja3').style.boxShadow = 'none';
        document.getElementById('img3').style.borderRadius = '0vh';

    } else if (identificador == 'img4'){
        
        document.getElementById('caja4').style.width = '35%';
        document.getElementById('caja4').style.height = '35%';
        document.getElementById('caja4').style.border = '1px dashed red';
        document.getElementById('caja4').style.borderRadius = '0vh';
        document.getElementById('caja4').style.boxShadow = 'none';
        document.getElementById('img4').style.borderRadius = '0vh';
    }
}