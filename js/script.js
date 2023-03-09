const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const Heading = document.querySelector(".caption h1");
const description = document.querySelector(".caption p");

const images = ["design1.jpg", "design2.jpg", "design3.jpg"];
const heading = ["Text one", "Text two", "Text three"];
const descriptions = [
  "description one",
  "description two",
  "description three",
];

//slider ID
let id = 0;


// the slider Function
function slide(id) {
  slider.style.backgroundImage = `url(../images/${images[id]})`;
  slider.classList.add("image-fade");
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 1000);

  Heading.innerText = heading[id];
  description.innerText = descriptions[id];
}

arrLeft.addEventListener("click", () => {
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

// setInterval(() => {
//     id++;
//     if (id > images.length - 1) {
//         id = 0;
//       }
//       slide(id);
//     },3000)
