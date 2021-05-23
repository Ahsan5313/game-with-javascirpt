

const player1score = document.getElementById('player1score');

const player2score = document.getElementById('player2score');

const winingScoreDisplay = document.querySelector('p span')

const inputScore = document.getElementById('inputScore');

const player1btn = document.getElementById('player1btn');

const player2btn = document.getElementById('player2btn');

const resetBtn = document.getElementById('resetBtn');

let p1score = 0;
let p2score = 0;
let winingScore = 5;

let gameOver = false;

function wining(oldScore,winingScore){
    
    if(oldScore == winingScore){
      
        if(p1score == winingScore){

            player1score.style.color= 'green'

        }
        else{

            player2score.style.color ='green'
        }
        gameOver = true;

 
      player1btn.setAttribute('disabled', 'disabled')
      player2btn.setAttribute('disabled', 'disabled');
  }

}

function reset(){

    p1score = 0;
    p2score = 0;
    gameOver = false;
    player1score.innerHTML= 0;
    player2score.innerHTML= 0;
    player1score.style.color= '';
    player2score.style.color = '';
    player1btn.removeAttribute('disabled');
    player2btn.removeAttribute('disabled');
}

player1btn.addEventListener('click' , () =>{

    if(!gameOver){
        p1score ++;
    
        wining(p1score,winingScore )
    }
     
      player1score.innerHTML = p1score;
  
});

player2btn.addEventListener('click', () => {

    if(!gameOver){

        p2score ++;
        wining(p2score,winingScore )
}

    player2score.innerHTML= p2score;
});



inputScore.addEventListener('change', () => {

    console.log(typeof inputScore.value);
    winingScoreDisplay.textContent= inputScore.value;
    winingScore =Number(inputScore.value);
    inputScore.value = '';
    reset()
    
});

resetBtn.addEventListener('click', reset)