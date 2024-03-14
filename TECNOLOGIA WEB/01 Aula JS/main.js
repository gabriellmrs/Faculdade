//Questão 1
function alterarTexto() {
    var cabecalho = document.getElementById("cabecalho");//conecta a variavel ao h1 do HTML
    cabecalho.innerHTML = "A mágica continua!";//Altera a informação do H1
}

//Questão 2
function alterarCor() {
    var paragrafo = document.getElementById("p-alterarCor");
    paragrafo.style.color = "green";
}

//Questão 3
function ocultarParagrafo() {
    var paragrafo = document.getElementById("meuParagrafo");
    paragrafo.style.display = "none";
}

function mostrarParagrafo() {
    var paragrafo = document.getElementById("meuParagrafo");
    paragrafo.style.display = "block";
}

//Questão 4
function Crescer() {
    var foto = document.getElementById("foto");
    foto.src  = "imagens/foto-adulto-m.png"

    var texto = document.createElement('p');//Adiciona um elemento de paragrafo no HTML
    texto.innerHTML = "Imagem trocada com sucesso!."
    res.appendChild(texto)//Insere o elemento novo "texto"

}

//Questão 5
function tamanho(largura, altura) {//pega os parametros passados pelo onclick
    var imagem = document.getElementById("logoHp");
    imagem.style.width = largura + "px";
    imagem.style.height = altura + "px";
}

//Questão 6

function imagem(linguagem) {
    var imagemGrande = document.getElementById("imagemGrande")
    if(linguagem == 'python') {
        imagemGrande.src = "imagens/Python.png"
        document.body.style.background = "#2596be"
    }
    else if (linguagem == 'javascript') {
        imagemGrande.src = "imagens/JavaScript.png"
        document.body.style.background = "#ffe361"
    }
    else if (linguagem == 'Csharp') {
        imagemGrande.src = "imagens/Csharp.png"
        document.body.style.background = "#953dac"
    }
}