import { listFactory } from './listFactory';
import { listItemFactory } from './listItemFactory';
import { regenerateLists } from './regenerateLists';

// Initial event listener config
window.addEventListener('load', function () {
  // handle opening/closing of adding forms
  document.getElementById("add-list").addEventListener("click", openAddListModal);
  document.getElementById("add-list-form-cancel").addEventListener("click", openAddListModal);
  document.getElementById("add-list-item").addEventListener("click", function(evt) {
    this.nextElementSibling.classList.toggle('hidden');

    displayActiveListInForm();
  });
  document.getElementById("add-list-item-form-cancel").addEventListener("click", closeAddItemForm, false);
  document.getElementById("add-list-item-save").addEventListener("click", handleItemAddSubmit, false);
  // Add onclick to nav items to set localStorage current active list
  regenerateOnClickProjectLists();

  // Handle submit new list form
  const addListForm = document.getElementById("add-list-form");
  addListForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    console.log(evt);
    let title = evt.target[0].value;

    let newListItem = listFactory(title);

    updateStorage(newListItem);
    regenerateOnClickProjectLists();
    // close after adding new list
    openAddListModal();
  });

  // Run showLists on window loadto show initial state
  regenerateLists();
  ShowActiveList();
})

const handleItemAddSubmit = () => {
  const title = document.getElementById("item-title").value;
  const notes = document.getElementById("notes").value;
  const duedate = document.getElementById("duedate").value;
  const priority = document.getElementById("priority").value;
  const status = document.getElementById("status").value;

  let generatedItem = listItemFactory(title, notes, duedate, priority, status);
  // fetch active list item, modify it and put it back in localstorage
  let activeListInStorage = localStorage.getItem("activeList");
  let moddedList = JSON.parse(localStorage.getItem(activeListInStorage));
  // modify items by adding to array
  moddedList.items.push(generatedItem);
  localStorage.setItem(activeListInStorage, JSON.stringify(moddedList));

  // Clear and close Item add form
  clearItemAddForm();
  closeAddItemForm();
}

const closeAddItemForm = () => {
  const formItemList = document.querySelector('#add-listItem-form').offsetParent;
  formItemList.classList.toggle('hidden');
}

const clearItemAddForm = () => {
  document.getElementById("item-title").value = "";
  document.getElementById("notes").value = "";
  document.getElementById("duedate").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("status").value = "";
}

const displayActiveListInForm = () => {
  const listName = document.getElementById("list-name");
  // fetch active list
  let activeList = JSON.parse([localStorage.getItem(localStorage.getItem("activeList"))]).title;
  listName.textContent = `Adding a new item to ${activeList}'s list`;
}

function regenerateOnClickProjectLists() {
  // Add onclick to nav items to set localStorage current active list
  setTimeout(function(){
    const projectLists = document.getElementsByClassName('project-list');

    for(let i = 0;i <= projectLists.length - 1 ; i++) {
      projectLists[i].removeEventListener('click', handleOnClickProjectList );
    }

    for(let i = 0;i <= projectLists.length - 1 ; i++) {
      projectLists[i].addEventListener('click', handleOnClickProjectList);
    }
  }, 100);
}

const handleOnClickProjectList = (e) => {
  // fetch clicked list, set the localStorage activeList key to it and run ShowActiveList to add the css class to display its activeness
  let activeListId = e.target.getAttribute("id");
  localStorage.setItem("activeList", activeListId);
  ShowActiveList();
}

const ShowActiveList = () => {
  const projectLists = document.getElementsByClassName('project-list');

  if(projectLists.length > 0) {
    for(let i = 0; i < projectLists.length; i++) {
      projectLists[i].classList.remove('active');
    }
    // Set active class onto clicked item as checked by localStorage activeList string
    projectLists[localStorage.getItem("activeList")].classList.add('active');;
  }

  ShowActiveListItems();
}

const ShowActiveListItems = () => {
  let listOutput = document.getElementById("items-container");
  //Clear frontend div before repopulating
  listOutput.innerHTML = "";
  let object = localStorage.getItem(localStorage.getItem("activeList"));
  let items = JSON.parse(object).items;

  items.forEach(item => {
    console.log(item);
    listOutput.innerHTML += `<li class="item-todo">${item.title}</li>`
  });
}

// Control visibility of the add list form
const openAddListModal = () => {
  const addListForm = document.querySelector('#add-list-form');
  addListForm.classList.toggle('hidden');
  addListForm.classList.toggle('flex');
}

const updateStorage = (item) => {
  let key = localStorage.length == 0 ? 0 : localStorage.length - 1;
  let value = JSON.stringify(item);

  localStorage.setItem("activeList", key);
  localStorage.setItem(key, value);

  regenerateLists();
  ShowActiveList();
}

