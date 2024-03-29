const slider = document.querySelector('.image-slider');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const Heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');
const preloader = document.querySelector('.loader-container');
const menuIcon = document.querySelector('header .icon');
const navbar = document.querySelector('header .navbar');
const bars = document.querySelector('header .icon .icons');
const xmark = document.querySelector('header .icon .xmark');

const images = [
  'https://socialbuildingz.com/sites/default/files/styles/new_slideshow_style/public/stories/WhatsApp%20Image%202019-07-14%20at%2010.20.48%20PM%20%281%29.jpeg?itok=bCVZLG0r',
  '../images/heading/200.jpg',
  '../images/heading/5.jpg',
];
const heading = ['خدمات التصميم', ' خدمات التنفيذ ', ' خدمات الإشراف '];
const descriptions = [
  '  تصميمات تجعل عيناك تتألق  ',
  '    فريق من أمهر العمال والمشرفين علي قدر عالي من الاحترافية   ',
  '   خدمات الاشراف الهندسي المتكامل  ',
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

arrRight.addEventListener('click', () => {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slide(id);
});

setInterval(() => {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slide(id);
}, 6000);

// Start preloader
// function preloader1() {
//   preloader.classList.add('remove-loader');
// }

// function fadeInPreLoader() {
//   setTimeout(preloader1, 2000);
// }
// window.onload = fadeInPreLoader;
// end preloader

//menu
let isMenu = false;
menuIcon.addEventListener('click', () => {
  isMenu = !isMenu;
  console.log(isMenu);
  if (isMenu) {
    navbar.classList.toggle('toggle-navbar');
    bars.classList.toggle('xmark');
  }
});

// =====================  PORTFLIO  =====================
let allBtn = document.getElementById('all');
let inter = document.getElementById('interior1');
let webBtn = document.getElementById('web');
let graphicBtn = document.getElementById('graphic');
let vectorBtn = document.getElementById('vector');
let vectorBtn1 = document.getElementById('vector1');
let allBtns = Array.from(document.querySelectorAll('.top .right a'));

let graphicSec = document.getElementById('DesSec');
let interior = document.getElementById('interior');
let vectorSec = document.getElementById('VecSec');
let vectorSec1 = document.getElementById('VecSec1');
let webSec = document.getElementById('WebSec');
// let allSec = interior.innerHTML + webSec.innerHTML + graphicSec.innerHTML + vectorSec.innerHTML + vectorSec1.innerHTML ;

// all function
allBtn.addEventListener('click', (btn) => {
  //remove bg from all btns
  inter.classList.remove('active');
  webBtn.classList.remove('active');
  graphicBtn.classList.remove('active');
  vectorBtn.classList.remove('active');
  vectorBtn1.classList.remove('active');
  // add a bg to selected btn
  btn.target.classList.add('active');
  // show imgs
  graphicSec.style.display = 'none';
  webSec.style.display = 'none';
  vectorSec.style.display = 'none';
  vectorSec1.style.display = 'block';
  interior.style.display = 'none';
});
inter.addEventListener('click', (btn) => {
  //remove bg from all btns
  allBtn.classList.remove('active');
  webBtn.classList.remove('active');
  graphicBtn.classList.remove('active');
  vectorBtn.classList.remove('active');
  vectorBtn1.classList.remove('active');
  // add a bg to selected btn
  btn.target.classList.add('active');
  // show imgs
  graphicSec.style.display = 'none';
  webSec.style.display = 'none';
  vectorSec.style.display = 'none';
  vectorSec1.style.display = 'none';
  interior.style.display = 'block';
});
// vector function
vectorBtn.addEventListener('click', (btn) => {
  //remove bg from all btns
  allBtn.classList.remove('active');
  inter.classList.remove('active');
  webBtn.classList.remove('active');
  graphicBtn.classList.remove('active');
  vectorBtn1.classList.remove('active');

  // add a bg to selected btn
  btn.target.classList.add('active');
  // show imgs
  graphicSec.style.display = 'none';
  webSec.style.display = 'none';
  vectorSec.style.display = 'block';
  vectorSec1.style.display = 'none';
  interior.style.display = 'none';
});
// vector1 function
vectorBtn1.addEventListener('click', (btn) => {
  //remove bg from all btns
  allBtn.classList.remove('active');
  inter.classList.remove('active');
  webBtn.classList.remove('active');
  vectorBtn.classList.remove('active');
  graphicBtn.classList.remove('active');
  // add a bg to selected btn
  btn.target.classList.add('active');
  // show imgs
  graphicSec.style.display = 'none';
  webSec.style.display = 'none';
  vectorSec1.style.display = 'block';
  vectorSec.style.display = 'none';
  interior.style.display = 'none';
});
// graphic function
graphicBtn.addEventListener('click', (btn) => {
  //remove bg from all btns
  allBtn.classList.remove('active');
  inter.classList.remove('active');
  webBtn.classList.remove('active');
  vectorBtn.classList.remove('active');
  vectorBtn1.classList.remove('active');

  // add a bg to selected btn
  btn.target.classList.add('active');
  // show imgs
  graphicSec.style.display = 'block';
  webSec.style.display = 'none';
  vectorSec.style.display = 'none';
  vectorSec1.style.display = 'none';
  interior.style.display = 'none';
});
// web function
webBtn.addEventListener('click', (btn) => {
  //remove bg from all btns
  allBtn.classList.remove('active');
  inter.classList.remove('active');
  graphicBtn.classList.remove('active');
  vectorBtn.classList.remove('active');
  vectorBtn1.classList.remove('active');
  // add a bg to selected btn
  btn.target.classList.add('active');
  // show imgs
  graphicSec.style.display = 'none';
  webSec.style.display = 'block';
  vectorSec.style.display = 'none';
  interior.style.display = 'none';
});

// whats app
window.onscroll = () => {
  if (this.scrollY <= 220) {
    document.getElementById('whatsApp').style.display = 'none';
  } else {
    document.getElementById('whatsApp').style.display = 'block';
  }
};
