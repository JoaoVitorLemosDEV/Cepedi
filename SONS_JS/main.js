// function tocaSomPom(){
//     document.querySelector('#som_tecla_pom').play();
// }
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

// function tocaSomClap(){
//     document.querySelector('#som_tecla_clap').play();
// }
// document.querySelector('.tecla_clap').onclick = tocaSomClap;

// function tocaSomTim(){
//     document.querySelector('#som_tecla_tim').play();
// }
// document.querySelector('.tecla_tim').onclick = tocaSomTim;

// function tocaSomPuff(){
//     document.querySelector('#som_tecla_puff').play();
// }
// document.querySelector('.tecla_puff').onclick = tocaSomPuff;   

// function tocaSomSplash(){
//     document.querySelector('#som_tecla_splash').play();
// }
// document.querySelector('.tecla_splash').onclick = tocaSomSplash;

// function tocaSomToim(){
//     document.querySelector('#som_tecla_toim').play();
// }
// document.querySelector('.tecla_toim').onclick = tocaSomToim;

// function tocaSomPsh(){
//     document.querySelector('#som_tecla_psh').play();
// }
// document.querySelector('.tecla_psh').onclick = tocaSomPsh;

// function tocaSomTic(){
//     document.querySelector('#som_tecla_tic').play();
// }
// document.querySelector('.tecla_tic').onclick = tocaSomTic;

// function tocaSomTom(){
//     document.querySelector('#som_tecla_tom').play();
// }
// document.querySelector('.tecla_tom').onclick = tocaSomTom;


// -------------------------------------------------------------------------------------

const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("Elemento não encontrado");
    }
}

for (let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
}