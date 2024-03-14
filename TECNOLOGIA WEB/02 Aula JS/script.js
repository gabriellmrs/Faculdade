// Array de nomes de times
const times = ['bahia', 'santos', 'corinthians', 'cruzeiro', 'flamengo', 'Fluminense', 'internacional', 'sao_paulo', 'vitoria', 'vasco'];

// Obtendo a referência ao elemento contêiner
const container = document.getElementById('container');

// Percorrendo o array times
times.forEach(time => {
    // Criando um elemento de imagem
    const img = document.createElement('img');
    // Definindo o atributo src para a imagem correspondente ao time
    img.src = `imagens/${time}.jpg`;
    // Adicionando classe para estilização
    img.classList.add('time-img');
    // Adicionando a imagem ao contêiner
    container.appendChild(img);
});

function verificarTime() {
    const inputTime = document.getElementById('inputTime').value.toLowerCase();
    const mensagemContainer = document.getElementById('mensagem');
    const imagemContainer = document.getElementById('imagemContainer');
    
    if (times.includes(inputTime)) {
        mensagemContainer.textContent = '';
        imagemContainer.innerHTML = `<img src="imagens/${inputTime}.jpg" class="time-img">`;
    } else {
        imagemContainer.innerHTML = '';
        mensagemContainer.textContent = 'Essa time ainda não está no meu catálogo';
    }
}