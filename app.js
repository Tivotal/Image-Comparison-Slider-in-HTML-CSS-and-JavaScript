/* Created by Tivotal */

let img = document.querySelector(".img2");
let slider = document.querySelector(".slider input");
let dragLine = document.querySelector(".drag-line");

slider.oninput = () => {
  let sliderVal = slider.value;

  dragLine.style.left = sliderVal + "%";

  img.style.width = sliderVal + "%";
};
