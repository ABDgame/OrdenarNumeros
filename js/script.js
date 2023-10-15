let matrix = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', ''],
]

let board = document.querySelector('.board');

function drawTokens(){
  matrix.forEach(row => row.forEach(element
  => {
    board.innerHTML += `<div class='token'>$
    {element}</div>`
  }))
}

drawTokens()



