window.addEventListener('load', function () {
    if(localStorage.getItem('version') !== '1.0.1') {
        localStorage.setItem('version', '1.0.1');
        location.reload(true);  // Forzar la recarga sin usar la caché
    }
});



// CÓDIGO PARA REDIRIGIR AL COMIENZO DE LA PÁGINA

function redirectToTop() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.location.href = '#';
  }
  
  window.onload = function() {
    redirectToTop();
  }
  
  
  
//CÓDIGO OVERLAY//

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    const currentRight = sidebar.style.right;

    // Si el sidebar está oculto, lo mostramos junto con el overlay
    if (currentRight === "-250px" || currentRight === "") {
        sidebar.style.right = "0";
        overlay.style.display = "block";
        body.classList.add('no-scroll'); // Deshabilitar desplazamiento
    } else {
        // Si el sidebar está visible, lo ocultamos junto con el overlay
        sidebar.style.right = "-250px";
        overlay.style.display = "none";
        body.classList.remove('no-scroll'); // Habilitar desplazamiento
    }
}
// Seleccionar los elementos del sidebar y overlay
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger');

// Función para mostrar el sidebar y overlay
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');  // Muestra el sidebar
    overlay.classList.add('active');  // Muestra el overlay
    document.body.classList.add('no-scroll'); // Bloquea el scroll de la página
});

// Función para ocultar el sidebar y overlay cuando se hace clic en el overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Oculta el sidebar
    overlay.classList.remove('active'); // Oculta el overlay
    document.body.classList.remove('no-scroll'); // Desbloquea el scroll de la página
});



hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');  // Muestra el sidebar
    overlay.classList.add('active');  // Muestra el overlay
    document.body.classList.add('no-scroll'); // Bloquea el scroll de la página
});




// Obtener el modal y la imagen
const modal = document.querySelector('.popup-imagen');
const modalImage = modal.querySelector('img');

// Abrir el modal con la imagen seleccionada
function openModal(event) {
    // Obtener la fuente de la imagen que se hace clic
    const imgSrc = event.target.src;

    // Establecer la fuente de la imagen dentro del modal
    modalImage.src = imgSrc;

    // Mostrar el modal
    modal.classList.add('show');

    // Deshabilitar el desplazamiento de la página
    document.body.classList.add('modal-open');
}

// Cerrar el modal cuando se hace clic en cualquier parte del modal
function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open'); // Habilitar el desplazamiento en la página
}

// Agregar un evento de clic a cada imagen de la galería para abrir el modal
document.querySelectorAll('.image img').forEach(img => {
    img.addEventListener('click', openModal);
});

// Cerrar el modal cuando se hace clic en el modal
modal.addEventListener('click', closeModal);


