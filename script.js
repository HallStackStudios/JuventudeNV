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
document.addEventListener('DOMContentLoaded', function() {
    const loginBar = document.getElementById('login-bar');

    // Exibe a barra de login se o usuário não estiver logado
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        loginBar.classList.add('active');
    }

    // Função de login
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verifica se o usuário existe no localStorage
        const storedUser = localStorage.getItem(username);

        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.password === password) {
                localStorage.setItem('loggedInUser', username);
                loginBar.classList.remove('active');
                alert(`Bem-vindo, ${username}!`);
            } else {
                alert('Senha incorreta.');
            }
        } else {
            alert('Usuário não encontrado.');
        }
    });

    // Função de registro
    window.register = function() {
        const username = prompt('Digite seu primeiro nome:');
        const password = prompt('Digite uma senha:');
        
        // Verifica se o usuário já existe
        if (localStorage.getItem(username)) {
            alert('Usuário já existe. Tente outro nome de usuário.');
        } else {
            const userData = {
                username: username,
                password: password
            };
            localStorage.setItem(username, JSON.stringify(userData));
            alert('Usuário cadastrado com sucesso!');
        }
    };
});
