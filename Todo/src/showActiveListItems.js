function ShowActiveListItems() {
  let listOutput = document.getElementById("items-container");
  //Clear frontend div before repopulating
  listOutput.innerHTML = "";
  let object = localStorage.getItem(localStorage.getItem("activeList"));
  let items = JSON.parse(object).items;

  items.forEach((item, index) => {
    let priority = item.priority;
    let status = item.status == "on" ? "" : "checked";
    let duedate = item.dueDate == "" ? "When you get a chance" : item.dueDate;

    listOutput.innerHTML += `<div class="item-todo" data-prio="${priority}" ><label for="item-${index}"><input ${status} type="checkbox" id="item-${index}"></input>${item.title}</label><span><strong>Due: </strong>${duedate}</span><button class="btn-radius" id="edit-item" type="text">Edit</button></div>`
  });
}

export { ShowActiveListItems }
