// Dark mode toggle + dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.getElementById('themeToggle');
const key = 'prefers-dark';
const apply = (dark) => {
  document.documentElement.classList.toggle('dark', dark);
  localStorage.setItem(key, dark ? '1' : '0');
};
const init = () => {
  const saved = localStorage.getItem(key);
  if (saved === null) {
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(prefers);
  } else {
    apply(saved === '1');
  }
};
if (toggle){ init(); toggle.addEventListener('click', () => apply(!document.documentElement.classList.contains('dark'))); }
