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
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQZtG6HWPSnPdkvmVfNadUqUTW2DHhjnK9A&usqp=CAU',
  'https://www.dcsmasr.com/images/jf/360/%D9%85%D9%88%D9%82%D8%B9/%D9%81%D9%8A%D9%84%D8%A7%20%D9%85%D8%A7%D9%83%D8%B3%D9%8A%D9%85/%D8%AF%D9%8A_%D8%B3%D9%8A_%D8%A5%D8%B3_%D9%85%D8%B5%D8%B1_%D8%AA%D8%B4%D8%B7%D9%8A%D8%A8_%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D9%81%D9%8A%D9%84%D8%A7_%D9%85%D8%A7%D9%83%D8%B3%D9%8A%D9%85_4.webp',

];
const heading = ['نحن نقدم لك ما تستحق', 'عيش الرفاهية الفندقية', 'تصميمات تجعل عيناك تتألق'];
const descriptions = [
  '',
  '',
  '',
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

arrRight.addEventListener("click", () => {
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
let allBtn = document.getElementById("all");
let inter = document.getElementById("interior1");
let webBtn = document.getElementById("web");
let graphicBtn = document.getElementById("graphic");
let vectorBtn = document.getElementById("vector");
let vectorBtn1 = document.getElementById("vector1");
let allBtns = Array.from(document.querySelectorAll(".top .right a"));

let graphicSec = document.getElementById("DesSec");
let interior = document.getElementById("interior");
let vectorSec = document.getElementById("VecSec");
let vectorSec1 = document.getElementById("VecSec1");
let webSec = document.getElementById("WebSec");
// let allSec = interior.innerHTML + webSec.innerHTML + graphicSec.innerHTML + vectorSec.innerHTML + vectorSec1.innerHTML ;

// all function
allBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    inter.classList.remove("active");
    webBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    vectorBtn1.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "none";
    webSec.style.display = "none";
    vectorSec.style.display = "none";
    vectorSec1.style.display = "block";
    interior.style.display = "none";
});
inter.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    webBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    vectorBtn1.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "none";
    webSec.style.display = "none";
    vectorSec.style.display = "none";
    vectorSec1.style.display = "none";
    interior.style.display = "block";
});
// vector function
vectorBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    inter.classList.remove("active");
    webBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn1.classList.remove("active");

    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "none";
    webSec.style.display = "none";
    vectorSec.style.display = "block";
    vectorSec1.style.display = "none";
    interior.style.display = "none";

});
// vector1 function
vectorBtn1.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    inter.classList.remove("active");
    webBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "none";
    webSec.style.display = "none";
    vectorSec1.style.display = "block";
    vectorSec.style.display = "none";
    interior.style.display = "none";


});
// graphic function
graphicBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    inter.classList.remove("active");
    webBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    vectorBtn1.classList.remove("active");
    
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "block";
    webSec.style.display = "none";
    vectorSec.style.display = "none";
    vectorSec1.style.display = "none";
    interior.style.display = "none";



});
// web function
webBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    inter.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    vectorBtn1.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    // show imgs
    graphicSec.style.display = "none";
    webSec.style.display = "block";
    vectorSec.style.display = "none";
    interior.style.display = "none";


});


// whats app 
window.onscroll = () => {
  if (this.scrollY <= 220) {
    document.getElementById("whatsApp").style.display = "none";
  }
  else{
    document.getElementById("whatsApp").style.display = "block";
  
  }
}