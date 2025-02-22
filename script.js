// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el elemento del encabezado
    const header = document.querySelector('header');

    // Cambia el color de fondo del encabezado al hacer clic
    header.addEventListener('click', function() {
        header.style.backgroundColor = header.style.backgroundColor === 'blue' ? '#333' : 'blue';
    });
});
