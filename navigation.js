const header = document.querySelector('header');
const toggle = header.querySelector('.menu-toggle');
const navigation = header.querySelector('nav');
header.classList.add('menu-ready');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('span').textContent = open ? '×' : '☰';
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
header.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
