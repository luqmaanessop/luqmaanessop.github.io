function regenerateLists() {
  let nav = document.getElementById("nav");
  //Clear frontend div before repopulating
  nav.innerHTML = "";

  // Length -1 because using extra space in localStorage to store activelist value
  for(let i = 0; i <= localStorage.length - 1 ; i++) {
    var retrievedObject = localStorage.getItem(i);
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
    let object = JSON.parse(retrievedObject);

    if(object) {
      nav.innerHTML += `<li class="project-list" id=${i}>${object.title}</li>`
    }
  }
}

export { regenerateLists }
