import { listFactory } from './listFactory';
import { regenerateLists } from './regenerateLists';

// Initial event listener config
window.addEventListener('load', function () {
  // handle opening/closing of adding forms
  document.getElementById("add-list").addEventListener("click", openAddListModal);
  document.getElementById("add-list-form-cancel").addEventListener("click", openAddListModal);
  document.getElementById("add-list-item").addEventListener("click", function(evt) {
    this.nextElementSibling.classList.toggle('hidden');
  });
  document.getElementById("add-list-item-form-cancel").addEventListener("click", function(evt) {
    const formItemList = document.querySelector('#add-listItem-form').offsetParent;
    formItemList.classList.toggle('hidden');
  });

  // Add onclick to nav items to set localStorage current active list
  setTimeout(function(){
    const projectLists = document.getElementsByClassName('project-list');

    for(let i = 0;i <= projectLists.length - 1 ; i++) {
      projectLists[i].addEventListener('click', event => {
        let activeListId = event.target.getAttribute("id");
        localStorage.setItem("activeList", activeListId);
        console.log("hi from project-list")


        ShowActiveList();
      })
    }


 }, 100);

  // Handle submit new list form
  var form = document.querySelector("#add-list-form");
  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let title = evt.target[0].value;

    let newListItem = listFactory(title);

    updateStorage(newListItem);
    openAddListModal();
  });

  // Run showLists on window loadto show initial state
  regenerateLists();
})

const ShowActiveList = () => {
  const projectLists = document.getElementsByClassName('project-list');

  for(let i = 0; i < projectLists.length; i++) {
    projectLists[i].classList.remove('active');
  }
  // Set active class onto clicked item as checked by localStorage activeList string
  projectLists[localStorage.getItem("activeList")].classList.add('active');;
}

// Control visibility of the add list form
const openAddListModal = () => {
  const addListForm = document.querySelector('#add-list-form');
  addListForm.classList.toggle('hidden');
  addListForm.classList.toggle('flex');
}

const updateStorage = (item) => {
  localStorage.setItem(localStorage.length, JSON.stringify(item));

  regenerateLists();
}

