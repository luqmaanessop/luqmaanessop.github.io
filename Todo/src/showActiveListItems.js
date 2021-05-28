function ShowActiveListItems() {
  let listOutput = document.getElementById("items-container");
  //Clear frontend div before repopulating
  listOutput.innerHTML = "";
  let lists = JSON.parse(localStorage.getItem("lists"));
  let activeListIndex = localStorage.getItem("activeList");
  let activeList = lists[activeListIndex];

  // console.log(lists);
  // console.log(activeListIndex);
  // console.log(activeList);

  // activeList.items.forEach((item, index) => {
    // console.log(item);
  //   let priority = item.priority;
  //   let status = item.status == "on" ? "" : "checked";
  //   let duedate = item.dueDate == "" ? "When you get a chance" : item.dueDate;

  //   listOutput.innerHTML += `<div class="item-todo" data-prio="${priority}" ><label for="item-${index}"><input ${status} type="checkbox" id="item-${index}"></input>${item.title}</label><span><strong>Due: </strong>${duedate}</span><button class="btn-radius" id="edit-item" type="text">Edit</button></div>`
  // });
}

export { ShowActiveListItems }
