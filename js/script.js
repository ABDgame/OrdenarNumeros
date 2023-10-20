let matrix = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', ''],
]

let board = document.querySelector('.board');

drawTokens()
addEventListeners()


function drawTokens(){
  matrix.forEach(row => row.forEach(element=> {
    if(element == ''){
       board.innerHTML += `<div class='empty'>
       ${element}</div>` 
    }else{
     board.innerHTML += `<div class='token'>
     ${element}</div>` 
    } 
  }))
}



function addEventListeners(){
  let tokens = document.querySelectorAll('.token')
  tokens.forEach(token => token.
  addEventListener('click', ()=>{
    let actualPosition = searchPosition(token.innerText)
    let emptyPosition = searchPosition('')
    let movement = nextMovement(actualPosition, emptyPosition)

  }))
}

function searchPosition(element){
  let rowIndex = 0;
  let columIndex = 0;
  matrix.forEach((row, index) => {
     let rowElement = row.findIndex(item =>
     item == element)
     if(rowElement !== -1){
       rowIndex = index;
       columIndex = rowElement;
     }
  })
  return [rowIndex, columIndex]
}
function nextMovement(actualPosition, emptyPosition){
  console.log(actualPosition[0]-emptyPosition[0])

}

