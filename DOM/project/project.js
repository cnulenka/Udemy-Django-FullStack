//Restart Game Button
var restart = document.querySelector("#restartButton")
// Grabs all the squares
var squares = document.querySelectorAll('td')
// Clear all the squares

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard)

// Check the squares marker

function changeMarker(){
  if(this.textContent === '')
  {
    this.textContent = 'X'
  }
  else if (this.textContent === 'X') {
    this.textContent = 'O'
  }
  else {
    this.textContent = ''
  }
}


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker)
}

// Event Listeners for all squares
