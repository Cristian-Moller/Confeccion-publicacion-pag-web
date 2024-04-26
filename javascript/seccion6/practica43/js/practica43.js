document.getElementById('pelicula').addEventListener('click', verVideo, false);
document.getElementById('play').addEventListener('click', iniciarVideo, false);
document.getElementById('pause').addEventListener('click', pausarVideo, false);
document.getElementById('stop').addEventListener('click', pararVideo, false);

function verVideo(e) {
    let video = e.target.value;
    console.log(video);

    if (video == 'monsterinc'){
        elegirVideo();
        document.getElementById('video').innerHTML = `<source src="/javascript/seccion6/practica43/videos/monsterinc.mp4" type="video/mp4">`;
    } else if (video == 'toysstory'){
        elegirVideo();
        document.getElementById('video').innerHTML = `<source src="/javascript/seccion6/practica43/videos/toysstory.mp4" type="video/mp4">`;
    } else if (video == 'comosedice'){
        elegirVideo();
        document.getElementById('video').innerHTML = `<source src="/javascript/seccion6/practica43/videos/comosedice.mp4" type="video/mp4">`;
    } else if (video == 'perrochistoso'){
        elegirVideo();
        document.getElementById('video').innerHTML = `<source src="/javascript/seccion6/practica43/videos/perrochistoso.mp4" type="video/mp4">`;
    }
}

function iniciarVideo(){
    let iniciar_video = document.getElementById('video');
    iniciar_video.play();
}

function pausarVideo(){
    let pausar_video = document.getElementById('video');
    pausar_video.pause();
}

function pararVideo(){
    let parar_video = document.getElementById('video');
    parar_video.pause();
    parar_video.currentTime = 0;
    elegirVideo();
}

function elegirVideo(){
    document.getElementById('caja2').innerHTML = '';
    document.getElementById('caja2').innerHTML = '<video id="video" width="100%" height="100%" controls poster="/javascript/seccion6/practica43/imagenes/video.png"> </video>';
    document.getElementById('pelicula').value = '';
}