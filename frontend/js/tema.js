/* ================================
   Script de Tema - tema.js
   
   Gerencia o sistema de tema claro/escuro
   Persiste a preferência no localStorage
   ================================ */

// Seleciona o botão do tema
const btnTema = document.getElementById('btnTema');

// Seleciona o elemento HTML raiz
const htmlElement = document.documentElement;

// Seleciona o elemento body para aplicar as classes de tema
const body = document.body;

// Seleciona o ícone dentro do botão para alterná-lo entre lua e sol
const iconTema = btnTema.querySelector('i');

/**
 * Carrega a preferência de tema salva anteriormente
 * Se não houver preferência salva, verifica a preferência do sistema operacional
 */
function carregarTema() {
    // Tenta obter o tema salvo no localStorage
    const temaSalvo = localStorage.getItem('tema');
    
    if (temaSalvo === 'dark') {
        // Se foram salvado 'dark', ativa o tema escuro
        ativarTemaEscuro();
    } else {
        // Se não houver preferência salva, verifica a preferência do sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            ativarTemaEscuro();
        }
    }
}

/**
 * Ativa o tema escuro
 * - Adiciona a classe 'dark-theme' ao body
 * - Muda o ícone de lua para sol
 * - Salva a preferência no localStorage
 */
function ativarTemaEscuro() {
    // Adiciona a classe que aplica os estilos do tema escuro
    body.classList.add('dark-theme');
    
    // Remove o ícone de lua
    iconTema.classList.remove('fa-moon');
    
    // Adiciona o ícone de sol para indicar que pode alternar para claro
    iconTema.classList.add('fa-sun');
    
    // Salva a preferência no localStorage para persisti-la
    localStorage.setItem('tema', 'dark');
}

/**
 * Desativa o tema escuro (volta ao claro)
 * - Remove a classe 'dark-theme' do body
 * - Muda o ícone de sol para lua
 * - Salva a preferência no localStorage
 */
function desativarTemaEscuro() {
    // Remove a classe que aplica os estilos do tema escuro
    body.classList.remove('dark-theme');
    
    // Adiciona o ícone de lua para indicar que pode alternar para escuro
    iconTema.classList.add('fa-moon');
    
    // Remove o ícone de sol
    iconTema.classList.remove('fa-sun');
    
    // Salva a preferência no localStorage
    localStorage.setItem('tema', 'light');
}

/**
 * Listener para o botão de tema
 * Alterna entre tema claro e escuro quando clicado
 */
btnTema.addEventListener('click', () => {
    // Verifica se o tema escuro está ativo
    if (body.classList.contains('dark-theme')) {
        // Se estiver ativo, desativa (volta ao claro)
        desativarTemaEscuro();
    } else {
        // Se estiver inativo, ativa (vai para escuro)
        ativarTemaEscuro();
    }
});

// Carrega o tema salvo ou a preferência do sistema ao iniciar a página
carregarTema();