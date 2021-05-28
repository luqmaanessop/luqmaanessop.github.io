function ShowActiveListItems() {
  let listOutput = document.getElementById("items-container");
  //Clear frontend div before repopulating
  listOutput.innerHTML = "";
  let lists = JSON.parse(localStorage.getItem("lists"));
  let activeListIndex = localStorage.getItem("activeList");
  let activeList = lists[activeListIndex];

  for(let i = 0; i < activeList.items.length; i++) {
    console.log(activeList.items[i]);
    let title = activeList.items[i].title;
    let priority = activeList.items[i].priority;
    let status = activeList.items[i].status == "on" ? "" : "checked";
    let duedate = activeList.items[i].dueDate == "" ? "When you get a chance" : activeList.items[i].dueDate;

    listOutput.innerHTML += `<div class="item-todo" data-prio="${priority}" ><label for="item-${i}"><input ${status} type="checkbox" id="item-${i}"></input>${title}</label><span><strong>Due: </strong>${duedate}</span><button class="btn-radius" id="edit-item" type="text">Edit</button></div>`
  }
}

export { ShowActiveListItems }
