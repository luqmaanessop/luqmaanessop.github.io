// Player object from factory function
function player(name, identifier, identifierValue) {
  return {
    name,
    identifier,
    identifierValue
  }
}

const playerXinput = document.querySelector("#playerX");
const playerOinput = document.querySelector("#playerO");
let activePlayers = [];
let activePlayer = undefined;

// Handle start game with defined players
document.querySelector('#startGame').addEventListener('click', event => {
  if((playerXinput.value == "") || (playerOinput.value == "")) {
    result.innerHTML = "Please fill in both player names before starting the game";
  } else {
    const playerX = new player(playerXinput.value, playerXinput.getAttribute("data-identifier"), 1);
    const playerO = new player(playerOinput.value, playerOinput.getAttribute("data-identifier"), -1);
    activePlayers = [
      playerX,
      playerO
    ]

    // TODO - clear out player objects and activeplayers array too
    document.querySelectorAll('table td').forEach(item => {
      item.setAttribute("data-play", 0);
    })

    //Set random as first play
    const randomStartValue = activePlayers[Math.round(Math.random())];
    activePlayer = randomStartValue;
    result.innerHTML = `Game has begun: ${playerX.name} vs ${playerO.name}</br> ${activePlayer.name} plays first.
    `;
  }
});

// Data storage structure setup - multidimensional array
let arrGrid = Array(3).fill(0);
let result = document.querySelector("#result");

for(let x = 0; x < arrGrid.length; x++) {
  arrGrid[x] = Array(3).fill(0);
}

const updateBoard = (updatedCell) => {
  if(updatedCell !== undefined) {
    updatedCell.setAttribute("data-play", activePlayer.identifierValue);
  }

  let rows = document.querySelectorAll("table tr");
  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].children;

    for (let j = 0; j < cells.length; j++) {
      arrGrid[i][j] = cells[j].getAttribute("data-play");
    }
  }

  calcFindWinner(arrGrid);
}

const calcFindWinner = (arrGrid) => {
  for(let a = 0; a < arrGrid.length; a++) {
    let rowSum = 0;
    let colSum = 0;

    // Check rows/cols for winner
    for(let b = 0; b < arrGrid.length; b++) {
      rowSum += parseInt(arrGrid[a][b]);
      colSum += parseInt(arrGrid[b][a]);

      if((rowSum == 3) || (colSum == 3) || (rowSum == -3) || (colSum == -3)) {
        stopGame(activePlayer);
        return;
      }
    }
  }

  // Check diagonal winner
  let diagSumBackward = parseInt(arrGrid[0][0]) + parseInt(arrGrid[1][1]) + parseInt(arrGrid[2][2]);
  let diagSumForward = parseInt(arrGrid[0][2]) + parseInt(arrGrid[1][1]) + parseInt(arrGrid[2][0]);
  // Check diagonal winner "/"
  if((diagSumForward == 3) || (diagSumForward == -3) || (diagSumBackward == 3) || (diagSumBackward == -3)) {
    stopGame(activePlayer);
    return;
  }

  // Check for draw - else switch active player
  if(document.querySelectorAll('table td.filled').length == 9) {
    result.innerHTML = "Its a draw";
  } else {
    activePlayer = activePlayer.identifierValue == 1 ? activePlayers[1] : activePlayers[0];
    result.innerHTML = `Player ${activePlayer.name}'s turn`;
  }
}

setTimeout(function(){ updateBoard(); }, 100);

document.querySelector('#reset').addEventListener('click', event => {
  window.location.reload();
});

document.querySelectorAll('table td').forEach(item => {
  item.addEventListener('click', event => {
    if((event.target.classList.contains("filled") == false) && (event.target.classList.contains("paused") == false)) {
      event.target.classList.add("filled");
      updateBoard(event.target);
    }
  })
})

const stopGame = (winner) => {
  result.innerHTML = `${winner.name} wins!`;

  document.querySelectorAll('table td').forEach(item => {
    item.classList.add("paused");
  })

  hightlightTheWinner(winner);
};

const hightlightTheWinner = (winnerPattern) => {
  //TODO
}
