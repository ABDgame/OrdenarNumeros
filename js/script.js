//let matrix = shuffleMatrix()
  let matrix = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','','8'],
]

let board = document.querySelector('.board');
let startBtn = document.querySelector('#start');
let firstScreen = document.querySelector('.first-screen');
let startBtnContainer = document.querySelector('.startBtn-container');
let counterElement = document.querySelector('.counter');
let counter = 6;


// Animação de botões
startBtn.addEventListener('mousedown', ()=>{
  startBtn.style.top = '4px';
})
startBtn.addEventListener('mouseup', ()=>{
  startBtn.style.top = '0px';
})

// CONTADOR
let counterId = setInterval(()=>{
  counter--

  if(counter === 0) {
    clearInterval(counterId)
    counterElement.style.display = 'none'
    board.innerHTML ='<p class="game-over"> ACABOU O TEMPO </p>'
  }else{
    counterElement.innerText = counter;
  }
}, 1000)

// BOTÃO JOGAR DE NOVO
startBtn.addEventListener('click', ()=>{
 startBtnContainer.style.display = 'none';
 firstScreen.style.display = 'none';
 counterElement.style.display = 'block';
 // matriz = = shuffleMatrix()
 matrix = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','','8'],
]
drawTokens()
addEventListeners()
})

function drawTokens(){
  board.innerHTML = '';
  matrix.forEach(row => row.forEach(element=> {
    if(element == ''){
       board.innerHTML += `<div class='empty'>${element}</div>` 
    }else{
       board.innerHTML += `<div class='token'>${element}</div>` 
    } 
  }))
}

function addEventListeners(){
  let tokens = document.querySelectorAll('.token')
  tokens.forEach(token => token.
  addEventListener('click', ()=>{
    let actualPosition = searchPosition(token.innerText)
    let emptyPosition = searchPosition('')
    let movement = canItMove(actualPosition, emptyPosition)

    if (movement !== false){
      updateMatrix(token.innerText, actualPosition, emptyPosition)
      
      let result = compareMatrix()

      if(result === true){

        startBtnContainer.style.display = 'block';
        startBtn.innerText = "JOGAR";
        confetti({
          particleCount: 3000,
          spread: 100
        });
      }
      
      drawTokens()
      addEventListeners()
    }

  }))
}

function searchPosition(element){
  let rowIndex = 0;
  let columIndex = 0;
  matrix.forEach((row, index) => {
     let rowElement = row.findIndex(item => item == element)
     if(rowElement !== -1){
       rowIndex = index;
       columIndex = rowElement;
     }
  })
  return [rowIndex, columIndex]
}

function canItMove(actualPosition, emptyPosition){

  if(actualPosition[1]== emptyPosition[1]){

    if(actualPosition[0]-emptyPosition[0] > 1 || actualPosition[0]-emptyPosition[0] <-1){
        return false
    }
    //if(actualPosition[0]-emptyPosition[0] ==-1){
      //return 'down'
    //}else if(actualPosition[0]-emptyPosition[0]==1){
      //return 'up'
    //}else{
     //return 'noMOVE'
    //}
  }else if(actualPosition[0]== emptyPosition[0]){

    if(actualPosition[1]-emptyPosition[1] > 1 ||
      actualPosition[1]-emptyPosition[1] <-1){
        return false
    }
   //if(actualPosition[1]-emptyPosition[1]== -1){
     //return 'right'
  //}else if(actualPosition[1]-emptyPosition[1]==1){
    // return 'left'
    //}else{
   //  return 'noMOVE'
   // }
  }else{
     return false
  }
}

function updateMatrix(element, actualPosition,
  emptyPosition){
   matrix[actualPosition[0]][actualPosition[1]] = ''
   matrix[emptyPosition[0]][emptyPosition[1]] = element
}

function shuffleMatrix(){
   let shuffleMatrix = [
     [],
     [],
     []
   ]


   let array = ['1', '2', '3', '4', '5', '6','7', '8', '']
   let shufleArray = array.sort(()=> Math.random()-0.5)

   let column = 0;
   let row = 0;
   

   shufleArray.forEach(element => {
     shuffleMatrix[row].push(element)
     if(column < 2) {
        column++
     }else{
       column = 0
       row++
     }
         
   })
   return shuffleMatrix
}

function compareMatrix(){
  let counter = 0;
  let finalMatrix = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8',''],
  ]
  matrix.forEach((row, indexRow) => {
    row.forEach((element, indexColumn) =>{
      if(element == finalMatrix[indexRow][indexColumn]){
        counter++
      }
    })
  })
  if (counter == 9){
    return true
  }else{
    return false
  }
}
