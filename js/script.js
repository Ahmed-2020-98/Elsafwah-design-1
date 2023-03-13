const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const Heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');
const preloader = document.querySelector('.loader-container');
const menuIcon = document.querySelector('header .icon');
const navbar = document.querySelector('header .navbar');

const images = [
  'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80',
  'https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',

];
const heading = ['Welcome Message', 'Second Message', 'Another Message'];
const descriptions = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimuspossimus voluptates',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimuspossimus voluptates? Quasi',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimuspossimus voluptates? Quasi',
];

//slider ID
let id = 0;

// the slider Function
function slide(id) {
  slider.style.backgroundImage = `url(${images[id]})`;
  slider.classList.add('image-fade');
  setTimeout(() => {
    slider.classList.remove('image-fade');
  }, 6000);

  Heading.innerText = heading[id];
  description.innerText = descriptions[id];
}

arrLeft.addEventListener('click', () => {
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  console.log(id);
  slide(id);
});

// arrRight.addEventListener("click", () => {
//   id++;
//   if (id > images.length - 1) {
//     id = 0;
//   }
//   slide(id);
// });

setInterval(() => {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slide(id);
}, 6000);

// Start preloader
function preloader1() {
  preloader.classList.add('remove-loader');
}

function fadeInPreLoader() {
  setTimeout(preloader1, 2000);
}
window.onload = fadeInPreLoader;
// end preloader

//menu
let isMenu = false;
menuIcon.addEventListener('click', () => {
  isMenu = !isMenu;
  console.log(isMenu);
  if (isMenu) {
    navbar.classList.toggle('toggle-navbar');
  }
});
