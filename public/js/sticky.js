// alert("Старт")
// console.warn("Sticky Menu")

let navbar = document.querySelector(".navbar");
let menu = document.querySelector("#menu");
let sticky = navbar.offsetTop;

function mySticky() {
  if (window.pageYOffset > sticky) {
  navbar.classList.add("sticky")
  menu.classList.add("stickyColor")
  } else {
  navbar.classList.remove("sticky");
  menu.classList.remove("stickyColor");
  }
}