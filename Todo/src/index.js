import { listFactory } from './listFactory';
import { listItemFactory } from './listItemFactory';
import { regenerateLists } from './regenerateLists';
import { ShowActiveListItems } from './ShowActiveListItems';
import { clearItemAddForm } from './clearItemAddForm';

// Initial event listener config
window.addEventListener('load', function () {
  // Set default initial list if localStorage is empty on initial app load
  let storage = localStorage.getItem("lists");
  if(!storage) {
    localStorage.setItem("lists", JSON.stringify([
    {
      "title": "General Todo's",
      "items": [],
    }
    ]));
    localStorage.setItem("activeList", "0")
  }

  document.getElementById("destroy").addEventListener("click", function(evt) {
    if (window.confirm("This will destroy EVERYTHING, are you sure? you will be left with an empty general list")) {
      localStorage.clear();
      location.reload();
    }
  });
  // handle opening/closing of adding forms
  document.getElementById("add-list").addEventListener("click", openAddListModal);
  document.getElementById("remove-list").addEventListener("click", removeList);
  document.getElementById("add-list-form-cancel").addEventListener("click", openAddListModal);
  document.getElementById("add-list-item").addEventListener("click", function(evt) {
    openAddListItemModal("add", null);
    displayActiveListInForm();
  });
  document.getElementById("add-list-item-form-cancel").addEventListener("click", closeAddItemForm, false);
  document.getElementById("add-list-item-save").addEventListener("click", handleItemModifySubmit, false);
  document.getElementById("add-list-item-update-save").addEventListener("click", handleItemModifySubmit, false);

  // Add onclick to nav items to set localStorage current active list
  regenerateOnClickProjectLists();

  // Handle submit new list form
  const addListForm = document.getElementById("add-list-form");
  addListForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
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

const openAddListItemModal = (operation, itemId) => {
  const form = document.getElementById("item-form-popup");
  form.classList.toggle('hidden');

  if(itemId) {
    form.setAttribute("data-edit", itemId);
  }

  // call handleItemAddSubmit function conditionally - figure this out
  // Do two seperate submit buttons on the actual item form and toggle visibility as needed from here.
  if(operation === "add") {
    // hide the edit submit button
    document.getElementById("add-list-item-update-save").classList.contains('hidden') === false ? document.getElementById("add-list-item-update-save").classList.add('hidden') : "";
    document.getElementById("add-list-item-save").classList.remove('hidden');
  }
  if(operation === "edit") {
    let moddedList = JSON.parse(localStorage.getItem("lists"));
    let activeListIndex = localStorage.getItem("activeList");

    // Hide and show relevant save buttons
    document.getElementById("add-list-item-save").classList.contains('hidden') === false ? document.getElementById("add-list-item-save").classList.add('hidden') : "";
    document.getElementById("add-list-item-update-save").classList.remove('hidden');

    // Prefill form fields because its an edit
    document.getElementById("item-title").value =
    moddedList[activeListIndex].items[itemId].title;

    document.getElementById("notes").value =
    moddedList[activeListIndex].items[itemId].notes;

    document.getElementById("duedate").value =
    moddedList[activeListIndex].items[itemId].dueDate;

    document.getElementById("priority").value =
    moddedList[activeListIndex].items[itemId].priority;

    document.getElementById("status").checked =
    moddedList[activeListIndex].items[itemId].status;
  }
}

const handleItemDelete = (itemEditId) => {
  if (window.confirm("Do you really want to delete this item?")) {
    // Get localStorage state
    let lists = JSON.parse(localStorage.getItem("lists"));
    let activeListIndex = localStorage.getItem("activeList");
    let activeList = lists[activeListIndex];

    activeList.items.splice(itemEditId, 1);
    lists[activeListIndex] = activeList;

    localStorage.setItem("lists", JSON.stringify(lists));
    regenerateOnClickProjectListItems()

    location.reload();
  }
}

const handleItemModifySubmit = () => {
  const editId = document.getElementById("item-form-popup").getAttribute("data-edit");
  const title = document.getElementById("item-title").value;
  const notes = document.getElementById("notes").value;
  const duedate = document.getElementById("duedate").value;
  const priority = document.getElementById("priority").value;
  const status = document.getElementById("status").checked;

  console.log(typeof(duedate));


  if(!title) {
    alert("Try again - you at least need an item title, the rest you can edit afterwards");

    return;
  }

  // Vars handling localstorage and generating new list item.
  let generatedItem = listItemFactory(title, notes, duedate, priority, status);
  let lists = JSON.parse(localStorage.getItem("lists"));
  let activeListIndex = localStorage.getItem("activeList");
  let activeList = lists[activeListIndex];

  // If there is an edit ID then find and edit, else add new item
  if(editId) {
    activeList.items[editId] = generatedItem;
  } else {
    // Add new item
    activeList.items.push(generatedItem);
  }
  // Update localStorage
  lists[activeListIndex] = activeList;
  localStorage.setItem("lists", JSON.stringify(lists));

  // Clear and close Item add form
  closeAddItemForm();
  ShowActiveListItems();
  regenerateOnClickProjectListItems()
}

const closeAddItemForm = () => {
  const formItemList = document.querySelector('#add-listItem-form').offsetParent;
  formItemList.classList.toggle('hidden');

  clearItemAddForm();
}

const displayActiveListInForm = () => {
  const listName = document.getElementById("list-name");
  // fetch active list
  let lists = JSON.parse(localStorage.getItem("lists"));
  let activeListIndex = localStorage.getItem("activeList");
  let activeListTitle = lists[activeListIndex].title;
  listName.textContent = `Active list: ${activeListTitle}`;
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

function regenerateOnClickProjectListItems() {
  setTimeout( function() {
    const projectListItems = document.getElementsByClassName('item-todo');

    for(let i = 0;i <= projectListItems.length - 1 ; i++) {
      projectListItems[i].removeEventListener('click', handleOnClickProjectListItems);
    }

    for(let i = 0;i <= projectListItems.length - 1 ; i++) {
      projectListItems[i].addEventListener('click', handleOnClickProjectListItems);
    }
  }, 100);
}

const handleOnClickProjectListItems = (e) => {
  // if edit button is clicked  - reopen the item add form with prefilled fields
  // attach node to form call to distinguish its and edit not an add
  if((e.target.id === "edit-item") || (e.target.id === "delete-item")) {
    let itemEditId = e.target.parentNode.children[0].children[0].id.substring(e.target.parentNode.children[0].children[0].id.length -1);

    if(e.target.id === "delete-item") {
      handleItemDelete(itemEditId);
    }
    if(e.target.id === "edit-item")  {
      openAddListItemModal("edit", itemEditId);
    }
  }
  if (e.target.nodeName === "LABEL") {
    let status = !(e.target.children[0].checked);
    let itemId = e.target.children[0].id.substring(e.target.children[0].id.length - 1);
    let moddedList = JSON.parse(localStorage.getItem("lists"));
    let activeListIndex = localStorage.getItem("activeList");

    // Find target list item in active list - update its status and commit to localStorage
    moddedList[activeListIndex].items[itemId].status = status;
    localStorage.setItem("lists", JSON.stringify(moddedList));
    location.reload();
  } else {
    // Stop propagation on the input click itself
    e.stopPropagation();
    return false;
  }
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
    projectLists[localStorage.getItem("activeList")].classList.add('active');
  }

  ShowActiveListItems();
  regenerateOnClickProjectListItems();
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
