import { listFactory } from './listFactory';
import { regenerateLists } from './regenerateLists';

// Initial event listener config
window.addEventListener('load', function () {
  document.getElementById("add-list").addEventListener("click", openAddListModal);
  document.getElementById("add-list-form-cancel").addEventListener("click", openAddListModal);

  // Handle submit book form
  var form = document.querySelector("#add-list-form");
  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let title = evt.target[0].value;

    let newListItem = listFactory(title);
    // console.log(newListItem);

    updateStorage(newListItem);
  });

  // Run showLists on window loadto show initial state
  regenerateLists();
})

// Control visibility of the add list form
const openAddListModal = () => {
  const addListForm = document.querySelector('#add-list-form');
  addListForm.classList.toggle('hidden');
  addListForm.classList.toggle('flex');
}

const updateStorage = (item) => {
  localStorage.setItem(localStorage.length, item.getTitle());

  regenerateLists();
}

