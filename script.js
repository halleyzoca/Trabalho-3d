document.getElementById('btn-coracao').addEventListener('click', function() {
    criarCoracao();
});

function criarCoracao() {
    const container = document.getElementById('container-coracoes');
    const coracao = document.createElement('div');
    
    coracao.classList.add('coracao');
    coracao.innerText = '❤️';
    
    // Posição aleatória na largura da tela
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.bottom = "0";
    
    container.appendChild(coracao);
    
    // Remove o coração da memória depois que a animação acaba
    setTimeout(() => {
        coracao.remove();
    }, 3000);
}
