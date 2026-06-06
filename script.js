const input = document.querySelector('#nombre-input');
const saludoDinamico = document.querySelector('#saludo-dinamico');

input.addEventListener('input', () => {
    saludoDinamico.textContent = `Hola, ${input.value}!`;
});

const lista = document.querySelector('#lista-habilidades');
const boton = document.querySelector('#btn-agregar');
const inputHabilidad = document.querySelector('#input-habilidad');

boton.addEventListener('click', () => {
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = inputHabilidad.value;
    lista.appendChild(nuevoItem);
});
