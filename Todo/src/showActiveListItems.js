import { formatDistance, subDays } from 'date-fns'

function ShowActiveListItems() {
  let listOutput = document.getElementById("items-container");
  //Clear frontend div before repopulating
  listOutput.innerHTML = "";
  let lists = JSON.parse(localStorage.getItem("lists"));
  let activeListIndex = localStorage.getItem("activeList");
  let activeList = lists[activeListIndex];

  if(activeList.items.length == 0) {
    listOutput.innerHTML += "<div>This list is empty</div>";
  }
  for(let i = 0; i < activeList.items.length; i++) {
    let title = activeList.items[i].title;
    let priority = activeList.items[i].priority;
    let status = activeList.items[i].status === true ? "checked" : "";
    let isComplete = activeList.items[i].status === true ? "complete" : "";
    let duedate = activeList.items[i].dueDate == "" ? "When you get a chance" : formatDistance(subDays(new Date(activeList.items[i].dueDate), 0), new Date(), { addSuffix: true });

    listOutput.innerHTML += `<div ${isComplete} class="item-todo" data-prio="${priority}" ><label for="item-${i}"><input ${status} type="checkbox" id="item-${i}"></input>${title}</label><span class="due-date"><strong>Due: </strong>${duedate}</span><button class="btn-radius" id="delete-item" type="text">Delete</button><button class="btn-radius" id="edit-item" type="text">Edit</button></div>`
  }
}

export { ShowActiveListItems }
