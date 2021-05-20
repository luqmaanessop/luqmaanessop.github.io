function regenerateLists() {
  let OutputContent = document.getElementById("nav");
  //Clear frontend div before repopulating
  OutputContent.innerHTML = "";

  for(let i = 0; i < localStorage.length; i++) {
    // const key = localStorage.key(i);

    var retrievedObject = localStorage.getItem(i);
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    let object = JSON.parse(retrievedObject);

    // const value = localStorage.getItem(key);
    OutputContent.innerHTML += `<li class="project-list" id=${i}>${object.title}</li>`;
  }
}

export { regenerateLists }
