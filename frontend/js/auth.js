
/* ================================
   Script de Autenticação - auth.js
   
   Controla a alternância entre
   os formulários de login e cadastro
   ================================ */

// Seleciona o elemento contáiner principal
const container = document.getElementById('container');

// Seleciona o botão para mudar para o formulário de registro/cadastro
const registerBtn = document.getElementById('register');

// Seleciona o botão para mudar para o formulário de login
const loginBtn = document.getElementById('login');

// Listener para o botão de registro
// Adiciona a classe 'active' para mostrar o formulário de cadastro
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

// Listener para o botão de login
// Remove a classe 'active' para mostrar o formulário de login
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
