import { homePageContent } from './homepage';
import { loadContactPage } from './contactpage';
import { menuPageContent } from './menupage';


window.addEventListener('load', function () {

  homePageSwitch();

  document.getElementById("contact").addEventListener("click", contactPageSwitch);
  document.getElementById("menu").addEventListener("click", menuPageSwitch);
  document.getElementById("home").addEventListener("click", homePageSwitch);
  document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
})

function toggleMenu() {
  let mainNav =  document.getElementById("main-nav");
  mainNav.classList.contains("visible") === false ? mainNav.classList.add("visible") : mainNav.classList.remove("visible");
}

function homePageSwitch() {
  const element = document.createElement('div');
  element.innerHTML = homePageContent();

  switchContent(element);
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
