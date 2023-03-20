// Seleccionar todos los botones y párrafos
var botones = document.querySelectorAll('.btn');
var flecha = document.querySelectorAll('.img-arrow');
var contenido = document.querySelectorAll('.contenido');

// Agregar evento de clic a cada botón
botones.forEach((btn, index) => {
    btn.addEventListener('click', () => {
    // Mostrar u ocultar el párrafo correspondiente ademas de agregar las clases para invertir la imagen
    if (contenido[index].style.display === 'none') {
        contenido[index].style.display = 'block';
        botones[index].classList.add('activo');
        flecha[index].classList.add('arrow-invertido');
    } else {
      contenido[index].style.display = 'none';
      botones[index].classList.remove('activo');
      flecha[index].classList.remove('arrow-invertido');
    }
  });
}); 