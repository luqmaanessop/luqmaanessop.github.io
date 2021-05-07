const updateDisplay = (list) => {
  var listArray = Object.entries(list);

  //fetch results and uns et it for the new list
  const display = document.getElementById('result');
  display.innerHTML = "";

  for(let x = 0; x <= listArray.length - 1; x++) {
    book = document.createElement('div');
    book.className = "bookCard " + (listArray[x][1].read == true ? "read" : "unread");
    book.setAttribute("data-book-number", x);
    book.innerHTML = "<h3>" + listArray[x][1].title + "</h3></br>" + "<span>Author: </span><p>" + listArray[x][1].author + "</p></br>" + "<span>Pages: </span><p>" + listArray[x][1].pages + "</p></br>" + "<button onclick='updateDeleteUtil(this," + '"delete")' + "' class='delete'>Delete</button>" + "<label class='switch'><input type='checkbox' onchange='updateDeleteUtil(this," + '"update")' + "' class='action-update-read'><span class='slider'>read</span></label>";
    display.appendChild(book);
  }
}

// Open and close add form functionality
function toggleForm() {
  let form = document.getElementById("myForm");
  form.style.display == "block" ? form.style.display = "none" : form.style.display = "block";
}

let summaryToggler = document.querySelector("#toggle-summary");
summaryToggler.addEventListener("click", function(evt) {
  this.classList.contains("clicked") === false ? this.classList.add("clicked") : this.classList.remove("clicked");
});

// Handle submit book form
var form = document.querySelector("#myForm form");
form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  let title = evt.target[0].value;
  let author = evt.target[1].value;
  let pages = evt.target[2].value;
  let read = evt.target[3].checked;

  let newBookie = new bookFactory(title, author, pages, read);
  updateDeleteUtil(newBookie, "add");
});

var firebaseConfig = {
  databaseURL: "https://library-app-a67b4-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyBucnTNh_wL5XJEaByWht2uqTM8Qj7GWJk",
  authDomain: "library-app-a67b4.firebaseapp.com",
  projectId: "library-app-a67b4",
  storageBucket: "library-app-a67b4.appspot.com",
  messagingSenderId: "890983854296",
  appId: "1:890983854296:web:5d6e8fcd1daa4ab014e7ad",
  measurementId: "G-2PFXGGL6M4"
};

// Initialize firebase and set eyes to the root /books
firebase.initializeApp(firebaseConfig);
const dbRefObject = firebase.database().ref('/books/');
// Sync object changes - and listens to any change in db data
// This handler is very important as it listens to constant changes to the db and gets triggered to update display whether CREATE/DELETE/UPDATE
dbRefObject.on('value', snap => {
  var dbState = snap.val();

  dbState ? updateDisplay(dbState) : updateDisplay("");
})

class bookFactory {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
};

const populateSummary = () => {
  dbRefObject.once('value', snap => {
    const summaryStats = document.getElementById('stats');
    const Library = Object.entries(snap.val());

    let findBiggestBook = function(Library) {
      let biggestBook = 0;

      for(let i = 0;i <= Library.length - 1 ; i++) {
        biggestBook = Library[i][1].pages > biggestBook ? Library[i][1].pages : biggestBook;
      }

      return biggestBook;
    }

    console.log(findBiggestBook(Library));
    let bookNumber = Library.length;

    summaryStats.innerHTML = "<span>Number of books: </span>" + bookNumber + "</br>" +
    "test" ;
  });
};

populateSummary();

function updateDeleteUtil(bookie, operation) {
  let pos = 0;

  if((operation == "update") || (operation == "delete")) {
    pos = bookie.closest(".bookCard").getAttribute("data-book-number");
  }

  dbRefObject.once('value', snap => {
    let updateItemId = Object.entries(snap.val())[pos][0];
    let updateItemReadState = !Object.entries(snap.val())[pos][1].read;
    let title = Object.entries(snap.val())[pos][1].title;
    let author = Object.entries(snap.val())[pos][1].author;
    let pages = Object.entries(snap.val())[pos][1].pages;
    var updates = {};

    // If add to library
    if(operation == "add") {
      // Get a key for a new Book.
      var newPostKey = firebase.database().ref().child('books').push().key;
      // Write the new book data
      var updates = {};
      updates['/books/' + newPostKey] = bookie;
    }
    // If update readme state
    if(operation == "update") {
      updates['/books/' + updateItemId] = {
        read: updateItemReadState,
        title: title,
        author: author,
        pages: pages,
      };
    }
    // If delete
    if(operation == "delete") {
      if (window.confirm("Do you really want to delete?")) {
        let deleteItemId = Object.entries(snap.val())[pos][0];
        var updates = {};
        updates['/books/' + deleteItemId] = null;
      }
    }

  return firebase.database().ref().update(updates);
  })

  populateSummary();
}
