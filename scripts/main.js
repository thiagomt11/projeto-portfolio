const botao = document.getElementById('meu-botao');
const body = document.body;

const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

function temaEscuro(tipo){
    if (tipo){
        body.classList.add('escuro');
        botao.innerHTML = '<i class="fas fa-sun"></i>';
    }
    else{
        body.classList.remove('escuro');
        botao.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

botao.addEventListener('click', () => {
    const isescuro = body.classList.toggle('escuro');
    temaEscuro(isescuro);
    localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

//Scroll suave para links de navegação
const links = document.querySelectorAll('#menu ul a.link');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if(destino){
            const headerHeight = document.querySelector('header').offsetHeight;
            const destinoPosicao = destino.offsetTop - headerHeight - 20; // Ajuste de 20px para espaçamento
            window.scrollTo({
                top: destinoPosicao,
                behavior: 'smooth'
            });
        }
    });
});
