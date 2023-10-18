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


  }))
}

function searchPosition(element){
  matrix.forEach((row, index) => {
     let rowElement = row.findIndex(item =>
     item == element)
  })
}


