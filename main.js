const navBar = document.querySelector('#nav');
const closeBar = document.querySelector('#close_bar');
const menuOption = document.querySelector('.menu_options');
const search = document.querySelector('#search');
const searchBox = document.querySelector('.search_box');

navBar.addEventListener('click', () => {
  menuOption.classList.add('visible');
});
closeBar.addEventListener('click', () => {
  menuOption.classList.remove('visible');
});
search.addEventListener('click', () => {
  searchBox.classList.toggle('visible');
});
