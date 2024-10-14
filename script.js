document.addEventListener('DOMContentLoaded', () => {
    const topBar = document.querySelector('#top-bar');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible2');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observar a top-bar para a animação
    observer.observe(topBar);

    // Observar imagens para a animação
    images.forEach(image => {
        observer.observe(image);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const topBar = document.getElementById('top-bar');

    // Função para animar o top-bar
    function showTopBar() {
        topBar.classList.add('visible2'); // Adiciona a classe 'visible' para o top-bar
    }

    // Chama a função para exibir o top-bar após um pequeno atraso
    setTimeout(showTopBar, 500); // Ajuste o tempo de atraso conforme necessário
});
document.addEventListener('DOMContentLoaded', () => {
    const topBar = document.querySelector('.slin-bar');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible2');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observar a top-bar para a animação
    observer.observe(topBar);

    // Observar imagens para a animação
    images.forEach(image => {
        observer.observe(image);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const topBar = document.getElementById('slin-bar');

    // Função para animar o top-bar
    function showTopBar() {
        topBar.classList.add('visible2'); // Adiciona a classe 'visible' para o top-bar
    }

    // Chama a função para exibir o top-bar após um pequeno atraso
    setTimeout(showTopBar, 500); // Ajuste o tempo de atraso conforme necessário
});