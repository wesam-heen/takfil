//for menu bar transition
const menu = document.querySelector(".menu-icon");
const navBar = document.querySelector(".nav-bar");
const menuSpan = document.querySelectorAll(".menu-icon span");

menu.addEventListener("click", () => {
  navBar.classList.toggle("nav-bar-hide");
  menu.classList.toggle("open");
});

// for slide in about us
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 3000);
};

// for select text in about us page
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const output = document.getElementById("output");

button1.addEventListener("click", () => {
  output.innerHTML = ` <div class="icon">
  <i class="fa-solid fa-bullhorn fa-2x"></i>
</div>
Follow your true passion for increasing the profits of your business`;
});

button2.addEventListener("click", () => {
  output.innerHTML = `<div class='icon'><i class="fa-solid fa-wand-magic-sparkles fa-2x"></i></div>  From the world of creativity, we strive to make our mark through the best designs
    `;
});

button3.addEventListener("click", () => {
  output.innerHTML = `<div class='icon'><i class="fa-solid fa-shield-halved fa-2x"></i></div> We provide you with continuous support throughout the week and on several social media platforms`;
});
button4.addEventListener("click", () => {
  output.innerHTML = `<div class='icon'><i class="fa-solid fa-file fa-2x"></i> </div> Services at a level that exceeds your expectations to facilitate you to clear all procedures with various government and private entities`;
});
button5.addEventListener("click", () => {
  output.innerHTML = `<div class='icon'><i class="fa-solid fa-users-gear fa-2x"></i></div>We use the most powerful analytical tools SEO including Sumrch and google analysts`;
});
button6.addEventListener("click", () => {
  output.innerHTML = `<div class='icon'><i class="fa-solid fa-chart-line fa-2x"></i></div>We follow and analyze the results of your 24/7 ad to improve its performance.`;
});
button7.addEventListener("click", () => {
  output.innerHTML = `<div class='icon'><i class="fa-brands fa-searchengin fa-2x"></i></div> Raise your site ranking on various famous Google and Ping engines `;
});
button8.addEventListener("click", () => {
  output.innerHTML = `
    <div class='icon'><i class="fa-solid fa-lightbulb fa-2x"></i></div>
    We always develop new mechanisms and skills in e-marketing `;
});

let buttons = document.querySelectorAll(".our-services .buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});
