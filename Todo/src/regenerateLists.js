function regenerateLists() {
  let OutputContent = document.getElementById("content");
  //Clear frontend div before repopulating
  OutputContent.innerHTML = "";

  for(let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    OutputContent.innerHTML += `<div class="project-list" id=${key}>${value}</div>`;
  }
}

export { regenerateLists }
