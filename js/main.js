//for menu bar transition
const menu = document.querySelector(".menu-icon");
const navBar = document.querySelector(".nav-bar");
const menuSpan = document.querySelectorAll(".menu-icon span");

menu.addEventListener("click", () => {
  navBar.classList.toggle("nav-bar-hide");
  menu.classList.toggle("open");
});

let form = document.querySelector(".form-contact");
form.addEventListener("submit", () => {
  e.preventDefault();
});


// forms.map((form) => {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//   });
//   console.log(form);
// });
