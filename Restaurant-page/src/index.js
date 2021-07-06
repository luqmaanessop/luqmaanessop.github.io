import { homePageContent } from './homepage';
import { loadContactPage } from './contactpage';
import { menuPageContent } from './menupage';
import { carouselThisItems } from './packages/carousel';



window.addEventListener('load', function () {
  homePageSwitch();

  document.getElementById("contact").addEventListener("click", contactPageSwitch);
  document.getElementById("menu").addEventListener("click", menuPageSwitch);
  document.getElementById("home").addEventListener("click", homePageSwitch);
  document.getElementById("menu-toggle").addEventListener("click", toggleMenu);

  initMenuItems();
})

function initMenuItems() {
  let navItems = document.getElementById("main-nav").children;
  const navItemsLength = navItems.length;

  for(let i = 0; i <= navItemsLength - 1 ; i++) {
    navItems[i].addEventListener('click', toggleMenu);
  }
}

function toggleMenu() {
  let mainNav =  document.getElementById("main-nav");
  mainNav.classList.contains("visible") === false ? mainNav.classList.add("visible") : mainNav.classList.remove("visible");
}

function homePageSwitch() {
  const promise = new Promise(function(resolve, reject) {
    const element = document.createElement('div');
    element.innerHTML = homePageContent();

    switchContent(element);

    resolve();
  }).then(function(result) {
      let carousels =  document.querySelectorAll(".carousel-me");
      carouselThisItems(carousels);
  });
}

function contactPageSwitch() {
  loadContactPage();
}

function menuPageSwitch() {
  const element = document.createElement('div');
  element.innerHTML = menuPageContent();

  switchContent(element);
}

function switchContent(element) {
  document.getElementById("content").innerHTML = "";
  document.getElementById("content").appendChild(element);
}
