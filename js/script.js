// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona a barra de navegação pelo ID usado em index.html
    const navbar = document.getElementById('navbar');

    // Adiciona evento que monitora quando o usuário rola a página
    window.addEventListener('scroll', () => {

        // Se a navbar não existir, interrompe o código para evitar erro
        if (!navbar) return;

        // Ativa ou desativa a classe .scrolled do CSS de acordo com o scroll
        // Essa classe altera padding e background em css/style.css
        navbar.classList.toggle('scrolled', window.scrollY > 100);

    });

});