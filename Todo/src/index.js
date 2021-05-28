import { listFactory } from './listFactory';
import { listItemFactory } from './listItemFactory';
import { regenerateLists } from './regenerateLists';
import { ShowActiveListItems } from './ShowActiveListItems';

// Initial event listener config
window.addEventListener('load', function () {
  // Set default initial list if localStorage is empty on initial app load
  let storage = localStorage.getItem("lists");
  if(!storage) {
    localStorage.setItem("lists", JSON.stringify([
    {
      "title": "Default",
      "items": [],
    }
    ]))
  }

  document.getElementById("destroy").addEventListener("click", function(evt) {
    localStorage.clear();
    location.reload();
  });
  // handle opening/closing of adding forms
  document.getElementById("add-list").addEventListener("click", openAddListModal);
  document.getElementById("remove-list").addEventListener("click", removeList);
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
    // console.log(evt);
    let title = evt.target[0].value;

    let newListItem = listFactory(title);

    addList(newListItem);
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
  // let activeListInStorage = localStorage.getItem("activeList");

  let lists = JSON.parse(localStorage.getItem("lists"));
  let activeListIndex = localStorage.getItem("activeList");
  let activeList = lists[activeListIndex];
  // console.log(activeList);

  // let moddedList = JSON.parse(localStorage.getItem(activeListIndex));
  // modify items by adding to array
  activeList.items.push(generatedItem);
  console.log("activeList.items");
  console.log(activeList.items);
  // console.log(activeList);
  lists[activeListIndex] = activeList;
  // localStorage.setItem(activeListInStorage, JSON.stringify(moddedList));
  localStorage.setItem("lists", JSON.stringify(lists));
  // Clear and close Item add form
  clearItemAddForm();
  closeAddItemForm();
  ShowActiveListItems();
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
  let lists = JSON.parse(localStorage.getItem("lists"));
  let activeListIndex = localStorage.getItem("activeList");
  let activeListTitle = lists[activeListIndex].title;
  // let activeList = JSON.parse([localStorage.getItem(localStorage.getItem("activeList"))]).title;
  listName.textContent = `Adding a new item to ${activeListTitle}'s list`;
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

function regenerateOnClickProjectListItems () {
  setTimeout(function(){
    // TODO - get all the lists, iterate through them one by one and add onclick to each of their items in their item Array, might need two for loops here, when this is done - then you can handle the onclick on the item to update the status property and update local storage, then force a window reload to test it.


    // const projectLists = document.getElementsByClassName('project-list');

    // for(let i = 0;i <= projectLists.length - 1 ; i++) {
    //   projectLists[i].removeEventListener('click', handleOnClickProjectList );
    // }

    // for(let i = 0;i <= projectLists.length - 1 ; i++) {
    //   projectLists[i].addEventListener('click', handleOnClickProjectList);
    // }
  }, 100);
}

const handleOnClickProjectList = (e) => {
  // console.log("clicked");
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
    projectLists[localStorage.getItem("activeList")].classList.add('active');
  }

  // console.log("imhere");
  ShowActiveListItems();
}

// Control visibility of the add list form
const openAddListModal = () => {
  const addListForm = document.querySelector('#add-list-form');
  addListForm.classList.toggle('hidden');
  addListForm.classList.toggle('flex');
}

const removeList = () => {
  // Check if you really want to delete
  if (window.confirm("Do you really want to delete?")) {
    // Get active list, can only delete the list that is active - then splice it out and reset the list in localstorage
    let activeList = localStorage.getItem("activeList");
    let moddedList = JSON.parse(localStorage.getItem("lists"));
    moddedList.splice(activeList, 1);
    // resave to localStorage
    localStorage.setItem("lists", JSON.stringify(moddedList));
    // set active list to last list item
    localStorage.setItem("activeList", moddedList.length - 1);

    // Refresh frontend
    regenerateLists();
    regenerateOnClickProjectLists();
    ShowActiveList();
  }
}

const addList = (item) => {
  // get lists from localStorage, push new item in and regenerate frontend
  let moddedList = JSON.parse(localStorage.getItem("lists"));
  moddedList.push(item);
  localStorage.setItem("lists", JSON.stringify(moddedList));

  localStorage.setItem("activeList", moddedList.length - 1);
  regenerateLists();
  ShowActiveList();
}
