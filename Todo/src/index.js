// import { openListModal } from './openListModal';

window.addEventListener('load', function () {
  document.getElementById("add-list").addEventListener("click", openAddListModal);
  document.getElementById("add-list-form-cancel").addEventListener("click", openAddListModal);
})

const openAddListModal = () => {
  var addListForm = document.querySelector('#add-list-form')
  addListForm.classList.toggle('hidden');
}
