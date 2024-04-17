// criando progrma com JQuery

let pontos = 0;

$(document).ready(function(){
    let divPontos = document.getElementById('recorde');
    divPontos.innerHTML ='<p>Olá o seu recorde é de '+pontos+' pontos.</p>';

    $('#addPontos').click(function(){//se fosse um ponto no lugar de # ele chamaria uma classe //.click o usuario clicar no icone
        pontos++;
        divPontos.innerHTML = "<p> Olá seu recorde subiu para <b> "+ pontos +"</b> pontos</p>";//divPontos esta no camelcase porque no js não usa caractere especial para separar
    });
});