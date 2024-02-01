const botao_play_pause = document.getElementById("play-pause");
const audio_capitulo = document.getElementById("audio-capitulo");
const botao_avancar = document.getElementById("proximo");
const botao_voltar = document.getElementById("anterior");
const nome_capitulo = document.getElementById("capitulo")

const numero_Capitulos = 10;
let ta_tocando = 0; 
let capitulo_atual = 1;


function tocar_faixa() {
    audio_capitulo.play();
    botao_play_pause.classList.remove("bi-play-circle-fill");
    botao_play_pause.classList.add("bi-pause-circle-fill");
}
function pausar_faixa() {
    audio_capitulo.pause();
    botao_play_pause.classList.remove("bi-pause-circle-fill");
    botao_play_pause.classList.add("bi-play-circle-fill");
}
function tocar_ou_pausar() {
    if (ta_tocando === 0) {
        tocar_faixa();
        ta_tocando = 1;
    }else{
        pausar_faixa();
        ta_tocando = 0;
    }
}
function trocar_nome_faixa() {
    nome_capitulo.innerText = "Capitulo " +  capitulo_atual;
}
function proxima_faixa() {
    if (capitulo_atual === numero_Capitulos) {
        capitulo_atual = 1;
    }else{
        capitulo_atual = capitulo_atual + 1;
    }

    audio_capitulo.src = "./books/dom-casmurro/" + capitulo_atual + '.mp3';

    tocar_faixa();
    ta_tocando = 1;
    trocar_nome_faixa();
}
function voltar_faixa() {
    if (capitulo_atual === 1) {
        capitulo_atual = numero_Capitulos;
    }else{
        capitulo_atual = capitulo_atual - 1;
    }

    audio_capitulo.src = "./books/dom-casmurro/" + capitulo_atual + '.mp3';

    tocar_faixa();
    ta_tocando = 1;
    trocar_nome_faixa();
}


botao_avancar.addEventListener("click", proxima_faixa);
botao_play_pause.addEventListener("click", tocar_ou_pausar);
botao_voltar.addEventListener("click", voltar_faixa);