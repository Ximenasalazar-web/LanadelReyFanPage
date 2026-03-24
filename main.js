// ══════════════════════════════════════
//  LANA DEL REY — LUMINESCENT
//  main.js
// ══════════════════════════════════════

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background = 'rgba(10,6,8,0.92)';
    } else {
      navbar.style.background = 'rgba(10,6,8,0.65)';
    }
  });
}

// Animación de entrada para las cards
function animateOnScroll() {
  const cards = document.querySelectorAll('.card, .album-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

document.addEventListener('DOMContentLoaded', animateOnScroll);
