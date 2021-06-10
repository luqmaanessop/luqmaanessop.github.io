function clearItemAddForm() {
  document.getElementById("item-form-popup").removeAttribute("data-edit");
  document.getElementById("item-title").value = "";
  document.getElementById("notes").value = "";
  document.getElementById("duedate").value = "";
  document.getElementById("priority").value = "Low";
  document.getElementById("status").checked = false;
}

export { clearItemAddForm }
