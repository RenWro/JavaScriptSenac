/*
* Programa - menu responsivo + modal PopUp
* Autoria: Ren Wrobleski
* Licença: GNU
* Data: 11/04/2024
* versão: V1.0
 */

//Menu Responsivo usando função

function menu(){
    let menu = document.getElementById("menu");
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}

//Modal PopUp

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

//function nomeDaFuncao (parametroDaFuncao){}
//funcao privada ou local não precisa ser nomeada, então function () - parênteses vazio
modalBtn.addEventListener("click", function (){
    modal.classList.add("open-modal")
});

// função privada ao objeto da classe, onde irá adicionar uma nova classe via evento click
modalBtn.addEventListener("click", function (){
    modal.classList.remove("open-modal");
});

//função privada ao objeto da classe no qual irá remover uma classe via evento click
closeBtn.addEventListener("click", function (){
    modal.classList.remove("open-modal")
});


/*
O método addEventListener() em JavaScript é usado para ouvir eventos em elementos do DOM (Document Object Model).
Ele permite que você especifique uma função que será chamada sempre que o evento especificado for disparado no elemento
alvo. Essa abordagem é fundamental para implementar interações dinâmicas em páginas web, permitindo que o código responda
a ações do usuário como cliques, pressionamentos de tecla, movimentos do mouse, e muito mais.


Antes do addEventListener se tornar amplamente suportado, uma maneira comum de atribuir ouvintes de eventos a
elementos era através da definição direta de propriedades de eventos no elemento, como onclick, onmouseover, etc.
O segundo evento substituiria o primeiro, apenas ele sendo acionado quando o elemento fosse
clicado. Isso limitava a capacidade de ter múltiplas reações ao mesmo tipo de evento no mesmo elemento

Vantagens do addEventListener

- Flexibilidade: Permite adicionar múltiplos ouvintes de eventos ao mesmo elemento, sem sobrescrever os existentes.
- Controle Fino: Oferece a opção de capturar eventos na fase de captura ou na fase de bolha.
- Melhor Organização: Facilita a organização do código relacionado ao tratamento de eventos e a separação da lógica
de apresentação da lógica de interação.

Sobre a flexibilidade:
Essa flexibilidade é extremamente útil em aplicações web complexas onde diferentes partes do código
(muitas vezes desenvolvidas por diferentes pessoas ou equipes) precisam reagir ao mesmo evento. Por exemplo:
   - Um botão pode precisar executar uma ação principal, como enviar um formulário, mas também pode precisar rastrear
   cliques para análise ou modificar algum outro elemento da interface baseado na ação.
   - Em bibliotecas ou frameworks, onde você não quer interferir nos ouvintes de eventos adicionados por quem usa
   sua biblioteca.

 */

