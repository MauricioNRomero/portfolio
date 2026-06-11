const boton = document.querySelector('#btn-chiste');
const setup = document.querySelector('#setup');
const punchline = document.querySelector('#punchline');

const obtenerChiste = async () => {
    try {
        const respuesta = await fetch(
            'https://official-joke-api.appspot.com/random_joke',
        );
        const chiste = await respuesta.json();
        setup.textContent = chiste.setup;
        punchline.textContent = chiste.punchline;
    } catch (error) {
        setup.textContent = 'Error al obtener el chiste';
        console.log(error);
    }
};

boton.addEventListener('click', obtenerChiste);
