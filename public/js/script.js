/* ================================================
   FILE: js/script.js
   ================================================ */


/* ================================================
   MARQUEE
   ================================================ */
const marqueeSkills = [
  'HTML & CSS',
  'JavaScript',
  'Figma',
  'Canva',
  'UI/UX Design',
  'Responsive Design',
  'Basic Programming',
  'Web Design',
  'Problem Solving'
];

const marqueeTrack = document.getElementById('marqueeTrack');
const marqueeItems = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills, ...marqueeSkills];
marqueeTrack.innerHTML = marqueeItems
  .map(t => `<span class="marquee-item"><span class="marquee-dot"></span>${t}</span>`)
  .join('');


/* ================================================
   THEME TOGGLE
   ================================================ */
function toggleTheme() {
  const html    = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}


/* ================================================
   SMOOTH SCROLL
   ================================================ */
function goTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}


/* ================================================
   SCROLL REVEAL
   ================================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up, .proj-card').forEach(el => revealObserver.observe(el));

// Klik seluruh card buka popup
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('click', () => openPopup(card));
});

document.querySelectorAll('.proj-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 0.08) + 's';
});


/* ================================================
   SKILL BARS
   ================================================ */
const skillBarObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill, .cv-skill-fill').forEach(bar => {
        bar.style.width = (bar.dataset.pct || 0) + '%';
      });
      skillBarObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('#skills, #cv').forEach(section => {
  skillBarObserver.observe(section);
});


/* ================================================
   PROJECT FILTER
   ================================================ */
function filterProj(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.proj-card').forEach(card => {
    const match = cat === 'all' || card.dataset.cat === cat;
    if (match) {
      card.style.display = '';
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => { card.style.display = 'none'; }, 260);
    }
  });
}


/* ================================================
   PORTFOLIO POPUP MODAL
   ================================================ */
function openPopup(card) {
  const overlay  = document.getElementById('popupOverlay');
  const title    = card.dataset.title    || '';
  const desc     = card.dataset.desc     || '';
  const tech     = card.dataset.tech     || '';
  const thumb    = card.dataset.thumb    || '📁';
  const link     = card.dataset.link     || '#';
  const cat      = card.dataset.cat      || '';
  const linkType = card.dataset.linkType || 'drive';
  const imgUrl   = card.dataset.img      || '';

  // Gambar atau emoji
  const popupThumb = document.getElementById('popupThumb');
  if (imgUrl) {
    popupThumb.innerHTML = `<img src="${imgUrl}" alt="${title}" style="width:100%;height:100%;object-fit:cover;object-position:top;">`;
  } else {
    popupThumb.innerHTML = `<span style="font-size:80px">${thumb}</span>`;
  }

  document.getElementById('popupTitle').textContent = title;
  document.getElementById('popupDesc').textContent  = desc;
  document.getElementById('popupCat').textContent   = cat.charAt(0).toUpperCase() + cat.slice(1);

  // Tech tags
  const techContainer = document.getElementById('popupTech');
  techContainer.innerHTML = tech
    .split('·')
    .map(t => t.trim())
    .filter(Boolean)
    .map(t => `<span class="popup-tech-tag">${t}</span>`)
    .join('');

  // Button label
  const btn     = document.getElementById('popupBtn');
  const btnText = document.getElementById('popupBtnText');
  btn.href      = link;

  if (linkType === 'web') {
    btnText.textContent = 'Kunjungi Website';
  } else {
    btnText.textContent = 'Lihat di Google Drive';
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  const overlay = document.getElementById('popupOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function closePopupOutside(e) {
  if (e.target === document.getElementById('popupOverlay')) {
    closePopup();
  }
}

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});


/* ================================================
   ACTIVE NAV
   ================================================ */
const sectionIds = ['home', 'about', 'pendidikan', 'skills', 'portfolio', 'cv', 'contact'];
const bnavBtns   = document.querySelectorAll('.bnav-btn');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 200;
  let activeIndex = 0;

  sectionIds.forEach((id, i) => {
    const section = document.getElementById(id);
    if (section && scrollY >= section.offsetTop) activeIndex = i;
  });

  bnavBtns.forEach((btn, i) => {
    if (i < 6) btn.classList.toggle('active', i === Math.min(activeIndex, 5));
  });
}, { passive: true });


/* ================================================
   ABOUT PHOTO REVEAL
   ================================================ */
const aboutImg = document.querySelector('.about-photo-col img');

if (aboutImg) {
  const fotoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          aboutImg.classList.add('foto-visible');
        }, 200);
        fotoObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fotoObserver.observe(aboutImg);
}