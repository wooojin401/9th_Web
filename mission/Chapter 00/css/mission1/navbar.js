function getCurrentPath() {
  const path = window.location.pathname;
  if (path === '/' || path === '' || path.endsWith('/index.html') ||
      path.endsWith('/navbar.html') || path.endsWith('/mission1/index.html') ||
      path.endsWith('/mission1/navbar.html')) {
    return '/';
  }
  return path;
}

function setActiveByPath(path) {
  document.querySelectorAll('.nav__button, .nav__button--icon').forEach(btn => {
    if (btn.dataset.path === path)
      btn.classList.add('nav__button--active', 'active');
    else
      btn.classList.remove('nav__button--active', 'active');
  });
  document.querySelectorAll('.sidebar__link').forEach(a => {
    if (a.dataset.path === path)
      a.classList.add('sidebar__link--active', 'active');
    else
      a.classList.remove('sidebar__link--active', 'active');
  });
}

setActiveByPath(getCurrentPath());

window.addEventListener('popstate', () => {
  setActiveByPath(getCurrentPath());
});

function handleMenuClick(e) {
  e.preventDefault();
  const path = this.dataset.path;
  if (getCurrentPath() !== path) {
    window.history.pushState({}, '', path);
    setActiveByPath(path);
  }
  closeSidebar();
}

document.querySelectorAll('.nav__button, .nav__button--icon').forEach(btn => {
  btn.addEventListener('click', handleMenuClick);
});

document.querySelectorAll('.sidebar__link').forEach(a => {
  a.addEventListener('click', handleMenuClick);
});

const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('navOverlay');
const btnOpen = document.getElementById('navHamburger');
const btnClose = document.getElementById('sidebarClose');

function openSidebar() {
  sidebar.classList.add('is-open');
  overlay.classList.add('is-open');
  btnOpen.setAttribute('aria-expanded', 'true');
  sidebar.setAttribute('aria-hidden', 'false');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  sidebar.classList.remove('is-open');
  overlay.classList.remove('is-open');
  btnOpen.setAttribute('aria-expanded', 'false');
  sidebar.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
btnOpen.addEventListener('click', openSidebar);
btnClose.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});
