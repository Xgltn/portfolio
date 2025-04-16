const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
