const qs = (e) => document.querySelector(e);
let seuVotoPara = qs('.d-1-1 span');
let cargo = qs('.d-1-2');
let ns = qs('.d-1-3');
let desc = qs('.d-1-4');
let lateral = qs('.d-1-right');
let aviso = qs('.d-2');

let numero = '';
let etapaAtual = 0;
let branco = false;
let voto = [];

function comecaEtapa() {
    let etapa = etapas[etapaAtual];
    let nHTML = '';
    numero = '';
    branco = false;

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            nHTML += '<div class="n pisca"></div>';
        } else {
            nHTML += '<div class="n"></div>';
        }
    }
    seuVotoPara.style.display = 'none';
    desc.innerHTML = '';
    lateral.innerHTML = '';
    aviso.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    ns.innerHTML = nHTML;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero == numero) {
            return true;
        } else {
            return false;
        }
    })
    if (candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        desc.innerHTML = `Candidato: ${candidato.nome} <br> Partido: ${candidato.partido}`;
        let fotoHTML = '';
        for (let i in candidato.fotos) {
            if (candidato.fotos[i].small) {
                fotoHTML += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            } else {
                fotoHTML += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }
            lateral.innerHTML = fotoHTML;
        }
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        desc.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }
}

function clicou(n) {
    let casa = qs('.n.pisca');
    if (casa !== null && branco == false) {
        casa.innerHTML = n;
        numero = `${numero}${n}`;
        casa.classList.remove('pisca');

        if (casa.nextElementSibling !== null) {
            casa.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}

function Branco() {
    if (numero == '') {
        branco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        desc.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
        document.querySelector('.n.pisca').classList.remove('pisca');
    } else {
        alert('Para votar em BRANCO, pressione CORRIGE para reiniciar o voto!')
    }
}

function corrige() {
    comecaEtapa();
}

function confirma() {
    let etapa = etapas[etapaAtual];
    let confirmado = false;
    if (branco === true) {
        confirmado = true;
        voto.push({
            cargo: etapa.titulo,
            voto: 'branco'
        })
    } else if (numero.length === etapa.numeros) {
        confirmado = true;
        voto.push({
            cargo: etapa.titulo,
            voto: numero
        })
    }

    if(confirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecaEtapa();
        } else {
            qs('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>';
            console.log(voto);
        }
    }
}

comecaEtapa();