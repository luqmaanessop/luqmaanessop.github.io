function regenerateLists() {
  let nav = document.getElementById("nav");
  //Clear frontend div before repopulating
  nav.innerHTML = "";

  const listsInStorage = JSON.parse(localStorage.getItem("lists"));
  for(let i = 0; i <= listsInStorage.length - 1 ; i++) {
    var object = listsInStorage[i];

    if(object) {
      nav.innerHTML += `<li class="project-list" id=${i}>${object.title}</li>`
    }
  }
}

export { regenerateLists }
