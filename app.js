document.addEventListener('DOMContentLoaded', () => {

    // 1. Definir la fecha de inicio
    const fechaInicio = new Date('2025-08-30T00:00:00'); 
    // 2. Obtener los elementos HTML
    const contadorElemento = document.getElementById('contador-tiempo');
    const fechaInicioElemento = document.querySelector('.fecha-inicio');
    const botonMostrarContador = document.querySelector('.boton-mostrar-contador');
    const contenedorContador = document.getElementById('contador-contenedor');

    // 3. Crear la función para actualizar el contador
    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        contadorElemento.textContent = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos juntos ❤️`;
    }

    // 4. Manejar el clic del botón
    botonMostrarContador.addEventListener('click', (e) => {
        e.preventDefault(); // Evita la recarga de la página
        
        contenedorContador.classList.remove('oculto');
        botonMostrarContador.style.display = 'none'; // Oculta el botón
        
        // Formatear la fecha de inicio en el mensaje
        const fechaFormateada = fechaInicio.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        fechaInicioElemento.textContent = `Desde el: ${fechaFormateada}`;

        // Iniciar el contador
        setInterval(actualizarContador, 1000);
        actualizarContador();
    });
});