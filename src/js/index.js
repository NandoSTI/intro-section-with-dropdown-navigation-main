const menu = document.querySelector('.menu');
const dropdown = document.querySelectorAll('.dropdown');

menu.addEventListener('click', () => {
  menu.parentElement.classList.toggle('open');
  document.body.classList.toggle('nav-open');
});

dropdown.forEach(item => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('link-open');
  });
});