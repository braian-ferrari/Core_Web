// Selecciona todos los elementos que quieres observar
const elements = document.querySelectorAll('.scroll-element');

// Configura Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Añade la clase "show" cuando el elemento sea visible
      entry.target.classList.add('show');
    } else {
      // Opcional: elimina la clase cuando el elemento sale de la vista
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2, // El elemento es visible si al menos el 10% está en el viewport
});

// Observa cada elemento
elements.forEach((el) => observer.observe(el));
