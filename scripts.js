// Exemplo de interatividade: mostrar/esconder formulário de contato
const botaoContato = document.querySelector('a[href="#contato"]');
const formularioContato = document.querySelector('section#contato');

botaoContato.addEventListener('click', () => {
 formularioContato.style.display = formularioContato.style.display === 'block' ? 'none' : 'block';
});
