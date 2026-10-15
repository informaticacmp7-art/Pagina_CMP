// layout.js - Inyecta header y footer automáticamente en todas las páginas
(function() {
  // Cargar el header
  fetch('components/header.html')
    .then(response => response.text())
    .then(html => {
      const headerContainer = document.getElementById('header-container');
      if (headerContainer) {
        headerContainer.innerHTML = html;
        initDropdowns();
        initBtnCita();
        marcarEnlaceActivo();
      }
    })
    .catch(error => console.error('Error cargando header:', error));

  // Cargar el footer
  fetch('components/footer.html')
    .then(response => response.text())
    .then(html => {
      const footerContainer = document.getElementById('footer-container');
      if (footerContainer) {
        footerContainer.innerHTML = html;
      }
    })
    .catch(error => console.error('Error cargando footer:', error));

  // Inicializar dropdowns
  function initDropdowns() {
    document.querySelectorAll('.dropdown .dropbtn').forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;

        document.querySelectorAll('.dropdown').forEach(drop => {
          if (drop !== parent) {
            drop.classList.remove('active');
          }
        });

        parent.classList.toggle('active');
      });
    });

    window.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(drop => {
          drop.classList.remove('active');
        });
      }
    });
  }

  // Botón de cita
  function initBtnCita() {
    const btnCita = document.getElementById('btnCita');
    if (btnCita) {
      btnCita.addEventListener('click', function() {
        alert('📋 Horario de atención:\n\n• Lunes a Viernes: 8:00 AM - 5:00 PM\n• Sábados: Personal mínimo\n• Urgencias y Hospitalización: 24/7\n\n📞 Central: +505 2264-7730');
      });
    }
  }

  // Marcar enlace activo
  function marcarEnlaceActivo() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.style.color = '#007f6e';
        link.style.borderBottom = '2px solid #007f6e';
        link.style.paddingBottom = '4px';
      }
    });
  }
})();