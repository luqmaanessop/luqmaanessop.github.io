function regenerateLists() {
  let OutputContent = document.getElementById("nav");
  //Clear frontend div before repopulating
  OutputContent.innerHTML = "";

  for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    OutputContent.innerHTML += `<li class="project-list" id=${key}>${value}</li>`;
  }
}

export { regenerateLists }
