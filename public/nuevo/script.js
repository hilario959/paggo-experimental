// Nav scroll state
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
});

// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Generic tab groups
document.querySelectorAll('[data-tabs]').forEach(group => {
  const buttons = group.querySelectorAll('[data-tab]');
  const panels = group.querySelectorAll('[data-panel]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      group.querySelector(`[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    });
  });
});

// Carousel arrows (Elige cómo aceptar pagos)
document.querySelectorAll('.carousel-head').forEach(head => {
  const section = head.closest('section');
  const arrows = head.querySelectorAll('[data-carousel-dir]');
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const track = section.querySelector('.tab-panel.active .product-grid-full');
      if (!track) return;
      const tileWidth = track.querySelector('.product-tile')?.offsetWidth || 340;
      track.scrollBy({ left: (tileWidth + 4) * parseInt(arrow.dataset.carouselDir, 10), behavior: 'smooth' });
    });
  });
});

// Fee calculator (4.83% comisión, IVA incluido)
const RATE = 0.0483;
const calcInput = document.getElementById('calc-amount');
const calcResult = document.getElementById('calc-result');
const calcFee = document.getElementById('calc-fee');
const calcNet = document.getElementById('calc-net-line');

function formatQ(n) {
  return 'Q ' + n.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function updateCalc() {
  const raw = parseFloat(calcInput.value.replace(/,/g, '')) || 0;
  const fee = raw * RATE;
  const net = raw - fee;
  calcResult.textContent = formatQ(net);
  calcFee.textContent = formatQ(fee);
  calcNet.textContent = formatQ(raw);
}
if (calcInput) {
  calcInput.addEventListener('input', updateCalc);
  updateCalc();
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Smooth active state for pillar-linked scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const tabTarget = a.dataset.tabTarget;
        if (tabTarget) {
          const tabBtn = target.querySelector(`[data-tab="${tabTarget}"]`);
          if (tabBtn) tabBtn.click();
        }
        window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
        mobileMenu.classList.remove('open');
      }
    }
  });
});
