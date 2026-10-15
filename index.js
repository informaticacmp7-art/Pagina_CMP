// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  
  // Botón de agendar cita
  const btnCita = document.getElementById('btnCita');
  if (btnCita) {
    btnCita.addEventListener('click', function() {
      mostrarNotificacion('📋 Sistema de citas en línea\n\nPara agendar una consulta, comuníquese a la central de citas:\n📞 2255-8800 ext. 2400\n\nHorario: Lunes a Viernes 7:00 AM - 4:00 PM\n\nHospital Militar Escuela - Siempre a su servicio.');
    });
  }

  // Smooth scroll para los enlaces de navegación
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animación de entrada para las tarjetas
  const cards = document.querySelectorAll('.card-premio, .servicio-item');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card);
  });

  // Efecto de escritura para el texto del compromiso (opcional)
  const compromisoText = document.querySelector('.compromiso-block p');
  if (compromisoText && !compromisoText.hasAttribute('data-animated')) {
    compromisoText.setAttribute('data-animated', 'true');
    const originalText = compromisoText.innerHTML;
    compromisoText.style.opacity = '0';
    
    setTimeout(() => {
      compromisoText.style.transition = 'opacity 0.8s ease';
      compromisoText.style.opacity = '1';
    }, 300);
  }

  // Mostrar año actual en copyright
  const copyright = document.querySelector('.copyright p');
  if (copyright) {
    const currentYear = new Date().getFullYear();
    copyright.innerHTML = copyright.innerHTML.replace('2025', currentYear);
  }

  // Efecto hover mejorado para tarjetas
  const allCards = document.querySelectorAll('.card-premio, .servicio-item');
  allCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
    });
  });

  // Simular carga de datos (opcional)
  console.log('🏥 Hospital Militar Escuela - Página cargada exitosamente');
  console.log('✨ Certificaciones: Nivel Diamante | Excelencia en Seguridad | Cuidados Centrados en las Personas');
});

// Función para mostrar notificaciones personalizadas
function mostrarNotificacion(mensaje) {
  // Verificar si el navegador soporta notificaciones
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('Hospital Militar Escuela', {
      body: mensaje.replace(/\n/g, ' '),
      icon: 'https://placehold.co/64x64/006b5e/white?text=HME'
    });
  } else if ('Notification' in window && Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Hospital Militar Escuela', {
          body: mensaje.replace(/\n/g, ' '),
          icon: 'https://placehold.co/64x64/006b5e/white?text=HME'
        });
      } else {
        alert(mensaje);
      }
    });
  } else {
    alert(mensaje);
  }
}

// Efecto parallax suave en el hero (opcional)
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
  }
});

// Validar que todos los elementos importantes existan
document.addEventListener('DOMContentLoaded', function() {
  const requiredElements = ['.top-bar', '.main-nav', '.hero', '.acreditaciones', '.compromiso', '.servicios', '.ubicacion', 'footer'];
  requiredElements.forEach(selector => {
    if (!document.querySelector(selector)) {
      console.warn(`Elemento no encontrado: ${selector}`);
    }
  });
});