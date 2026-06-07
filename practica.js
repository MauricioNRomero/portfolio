const contador = document.querySelector('#contador');
const btnSumar = document.querySelector('#btn-sumar');
const btnRestar = document.querySelector('#btn-restar');

let cuenta = 0;

btnSumar.addEventListener('click', () => {
    cuenta = cuenta + 1;
    contador.textContent = cuenta;
    if (cuenta === 0) {
        contador.classList.add('rojo');
    } else {
        contador.classList.remove('rojo');
    }
});
btnRestar.addEventListener('click', () => {
    if (cuenta > 0) {
        cuenta = cuenta - 1;
        contador.textContent = cuenta;
    }
    if (cuenta === 0) {
        contador.classList.add('rojo');
    } else {
        contador.classList.remove('rojo');
    }
});
