const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const searchInput = document.getElementById('searchInput');
const updatesList = document.getElementById('updatesList');

const smoothScrollTo = (hash) => {
  if (!hash || !hash.startsWith('#')) return;

  // Logo / Home should return to the real top of the page so the
  // Important Notice, official strip, header, and hero are all visible.
  if (hash === '#home' || hash === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const target = document.querySelector(hash);
  if (!target) return;
  const headerHeight = document.querySelector('.main-header')?.offsetHeight || 90;
  const offset = headerHeight + 16;
  const top = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - offset);
  window.scrollTo({ top, behavior: 'smooth' });
};

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const hash = link.getAttribute('href');
    if (hash?.startsWith('#')) {
      event.preventDefault();

      document.querySelectorAll('nav a[href^="#"]').forEach((item) => {
        item.classList.toggle('active', item === link);
      });

      smoothScrollTo(hash);
      navLinks.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  if (link.closest('nav')) return;
  link.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScrollTo(link.getAttribute('href'));
  });
});

const navItems = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('main section[id]');

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navItems.forEach((item) => {
        item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
      });
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => activeObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll('.reveal-section').forEach((section) => {
  revealObserver.observe(section);
});

searchInput?.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase().trim();
  const cards = updatesList?.querySelectorAll('.announcement') || [];
  cards.forEach((card) => {
    const content = `${card.dataset.title || ''} ${card.textContent || ''}`.toLowerCase();
    card.classList.toggle('hidden', query && !content.includes(query));
  });
});

// Professional header scroll state and stable first-load reveal
const mainHeader = document.querySelector('.main-header');
const updateHeaderState = () => {
  if (!mainHeader) return;
  mainHeader.classList.toggle('header-scrolled', window.scrollY > 18);
};

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

window.addEventListener('load', () => {
  document.querySelectorAll('.reveal-section').forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      section.classList.add('is-visible');
    }
  });
});

// Document search and filters
const documentSearch = document.getElementById('documentSearch');
const recordsList = document.getElementById('recordsList');
const docFilterButtons = document.querySelectorAll('.doc-filter');
let activeDocumentFilter = 'all';

const applyDocumentFilters = () => {
  const query = (documentSearch?.value || '').toLowerCase().trim();
  const records = recordsList?.querySelectorAll('.record-item') || [];

  records.forEach((record) => {
    const type = record.dataset.type || '';
    const text = `${record.dataset.title || ''} ${record.textContent || ''}`.toLowerCase();
    const matchesType = activeDocumentFilter === 'all' || type === activeDocumentFilter;
    const matchesSearch = !query || text.includes(query);
    record.classList.toggle('hidden', !(matchesType && matchesSearch));
  });
};

docFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeDocumentFilter = button.dataset.filter || 'all';
    docFilterButtons.forEach((item) => item.classList.toggle('active', item === button));
    applyDocumentFilters();
  });
});

documentSearch?.addEventListener('input', applyDocumentFilters);


// Announcement banner: rotating, clickable, and dismissible
const announcementBar = document.getElementById('announcementBar');
const announcementMessage = document.getElementById('announcementMessage');
const announcementClose = document.getElementById('announcementClose');

const announcementItems = [
  {
    text: 'General Assembly on May 17, 2026 | Attendance is highly encouraged',
    link: '#announcements'
  },
  {
    text: 'HOA Statements will be released and sent starting May 6, 2026',
    link: '#payments'
  },
  {
    text: 'Please fill out the HOA Census Form for updated community records',
    link: '#forms'
  }
];

let announcementIndex = 0;
const announcementClosed = localStorage.getItem('tmgAnnouncementClosed') === 'true';

if (announcementBar && announcementClosed) {
  announcementBar.classList.add('is-hidden');
}

const showAnnouncement = () => {
  if (!announcementMessage || !announcementItems.length) return;
  const item = announcementItems[announcementIndex];
  announcementMessage.textContent = item.text;
  announcementMessage.setAttribute('href', item.link);
  announcementIndex = (announcementIndex + 1) % announcementItems.length;
};

showAnnouncement();
setInterval(showAnnouncement, 4500);

announcementClose?.addEventListener('click', () => {
  announcementBar?.classList.add('is-hidden');
  localStorage.setItem('tmgAnnouncementClosed', 'true');
});

// Final polish: transition enhancement only, no content changes
(() => {
  const staggerSelectors = [
    '.card', '.announcement', '.project-card', '.board-card', '.document-card',
    '.record-item', '.contact-photo-card', '.payment-card', '.form-card', '.quick-card', '.stat'
  ].join(',');

  document.querySelectorAll('.reveal-section').forEach((section) => {
    section.querySelectorAll(staggerSelectors).forEach((item, index) => {
      item.style.setProperty('--stagger', String(Math.min(index, 10)));
    });
  });

  const hero = document.querySelector('.hero');
  const heroPanel = document.querySelector('.hero-quick-panel');
  const heroContent = document.querySelector('.hero-content');

  if (hero && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('mousemove', (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      if (heroPanel) {
        heroPanel.style.transform = `translate3d(${x * 10}px, ${y * 8}px, 0)`;
      }
      if (heroContent) {
        heroContent.style.transform = `translate3d(${x * -5}px, ${y * -4}px, 0)`;
      }
    }, { passive: true });

    hero.addEventListener('mouseleave', () => {
      if (heroPanel) heroPanel.style.transform = '';
      if (heroContent) heroContent.style.transform = '';
    });
  }
})();
