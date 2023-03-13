/* 
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    passo 1 - dar um jeito de pegar o elemento html dos botoes

    passo 2 - dar um jeito de identificar o clique do usuario no botão
    
    passo 3 - desmarcar o botão selecionado anteriormente

    passo 4 - marcar o botão clicando como se estivesse selecionada

    passo 5 - esconder a imagem anterior

    passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//passo 1 - dar um jeito de pegar o elemento html dos botoes
const { botoesCarrossel, imagens } = pegarElementosDoHtml();

//passo 2 - dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    //passo 3 - desmarcar o botão selecionado anteriormente
    desativarBotaoSelecionado();

    //passo 4 - marcar o botão clicando como se estivesse selecionada
    selecionarBotaoCarrossel(botao);

    //passo 5 - esconder a imagem anterior
    esconderImagemAtiva();

    //passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    mostrarImagemDeFundo(indice);
  });
});
function pegarElementosDoHtml() {
  const botoesCarrossel = document.querySelectorAll(".botao");
  const imagens = document.querySelectorAll(".imagem");
  return { botoesCarrossel, imagens };
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
