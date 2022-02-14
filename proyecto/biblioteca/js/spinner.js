const formularios = document.querySelectorAll('form');

formularios.forEach((formulario) => {
    formulario.addEventListener('submit', function(e) {
        console.log('hola');
        let spinner = document.createElement('div');
        spinner.classList.add('spinner');
        document.querySelector('.spinner-container').appendChild(spinner);
    });
});