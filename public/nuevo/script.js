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
mobileMenu.querySelectorAll('[data-mobile-group]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.mobile-menu-group').classList.toggle('open');
  });
});

// Acordeón + imagen (páginas de tipo de negocio)
document.querySelectorAll('[data-accordion]').forEach(acc => {
  const items = acc.querySelectorAll('.accordion-feature-item');
  items.forEach((item, i) => {
    item.querySelector('button').addEventListener('click', () => {
      const wasActive = item.classList.contains('active');
      items.forEach(other => other.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
      const img = item.dataset.image;
      const imageEl = acc.querySelector('.accordion-feature-image img');
      if (img && imageEl && !wasActive) imageEl.src = img;
    });
    if (i === 0) item.classList.add('active');
  });
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

// Monto -> WhatsApp (financiamiento)
document.querySelectorAll('[data-amount-whatsapp]').forEach(box => {
  const input = box.querySelector('input');
  const btn = box.querySelector('[data-amount-whatsapp-btn]');
  const phone = box.dataset.whatsappPhone;
  const template = box.dataset.whatsappTemplate;
  btn.addEventListener('click', () => {
    const amount = input.value.trim();
    const text = template.replace('{amount}', amount || '___');
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  });
});

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
