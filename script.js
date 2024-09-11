document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.use, #img-imagem-ref');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(imageContainer);
});
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('#img-imagem-rec');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(imageContainer);
});
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
document.addEventListener("DOMContentLoaded", function() {
    const loginBar = document.getElementById('login-bar');

    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem('loggedIn');

    if (!isLoggedIn) {
        // Se não estiver logado, exibe a barra de login
        loginBar.classList.add('active');
    }

    // Função de login
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificação simples (pode ser substituída por uma validação mais robusta)
        if (username === "usuario" && password === "senha123") {
            localStorage.setItem('loggedIn', 'true');
            loginBar.classList.remove('active');
            alert('Login bem-sucedido!');
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
    });

    // Função de registro (simulada)
    function register() {
        alert('Função de cadastro ainda não implementada.');
    }
});
