

// function for computer move 
function compMove (){
    const randomNumber = Math.random()

    let computerMove =''

    if (randomNumber >= 0 && randomNumber <1/3){
        computerMove ='Rock'
    }

    else if (randomNumber >= 1/3 && randomNumber<2/3){
        computerMove = 'Paper'
    }

    else if(randomNumber >= 2/3 && randomNumber<1){
        computerMove = 'Scissor'
    }

    return computerMove;
}

// score object for storing the resulst
let score = JSON.parse(localStorage.getItem('scores')) || {
    Win: 0,
    Draw: 0,
    Loose: 0
}

updateScore()


let isAutoPlaying = false;
let setIntervalId= ''
const autoPlayButton = document.querySelector('.Auto-play');
function autoPlay(){
    
    
    if (!isAutoPlaying){
        setIntervalId=setInterval(function(){
            const selected = compMove()
            humanMove(selected);
        }, 1000)
        isAutoPlaying = true;
        autoPlayButton.innerHTML= 'Stop Playing'

      
    }else {
        clearInterval(setIntervalId)
        autoPlayButton.innerHTML = 'Auto Playing'
        isAutoPlaying=false
        autoPlay.classList.remove
        
    }

    
}
// human move function
function humanMove(selected){
    const choice =compMove()
    

    let result = ''
    if (selected === "Rock"){
        if (choice === 'Scissor'){
            result = "Winner"
        }
        else if (choice === 'Rock'){
            result = "Draw"
        }
        else if (choice === 'Paper'){
            result = 'Looser'
        }
    }

    else if (selected === 'Scissor'){
        if (choice === 'Rock'){
            result = 'Looser'
        }
        else if (choice === 'Paper'){
            result = 'Winner'
        }
        else if (choice === 'Scissor'){
            result = 'Draw'
        }
    } 

    else if (selected === 'Paper'){
        if (choice === 'Scissor'){
            result = 'Looser'
        }
        else if (choice === 'Rock') {
            result = 'Winner'
        }
        else if (choice === 'Paper'){
            result = 'Draw'
        }
    }

    //uupdating the scores in the object i.e win loose draw
    if (result === 'Looser'){
        score.Loose +=1
    }
    else if (result === 'Draw'){
        score.Draw +=1
    }

    else if(result === 'Winner') {
        score.Win +=1
    }
// set the results in the local storage
    localStorage.setItem('scores', JSON.stringify(score))


     document.querySelector('.js-results').innerHTML = `win: ${score.Win}, Draw: ${score.Draw}, Loose: ${score.Loose}`



     document.querySelector('.js-score').innerHTML = `${result}`

     document.querySelector('.js-move').innerHTML = `You <img class="image-move"src="./image/${selected}-emoji.png"> : <img class="image-move"src="./image/${choice}-emoji.png"> computer`

}

function updateScore(){
    document.querySelector('.js-results').innerHTML = `win: ${score.Win}, Draw: ${score.Draw}, Loose: ${score.Loose}`
}
 // Reset function
function Reset(){
    score={
   Win: 0,
   Draw: 0,
    Loose: 0

   
}
   
   localStorage.removeItem
   updateScore()

   clear()

   // it stop the auto play when you click the  Reset
      clearInterval(setIntervalId)
        autoPlayButton.innerHTML = 'Auto Playing'
        isAutoPlaying=false
        autoPlay.classList.remove
        
}

function clear(){
    const scoreParagraph = document.querySelector('.js-score')
    const moveParagraph = document.querySelector('.js-move')
    


    scoreParagraph.classList.add('reset-all-scores')
    moveParagraph.classList.add('reset-all-moves')
    
 
}
function returnResult(){
        const scoreParagraph = document.querySelector('.js-score')
    const moveParagraph = document.querySelector('.js-move')
    


    scoreParagraph.classList.remove('reset-all-scores')
    moveParagraph.classList.remove('reset-all-moves')
}


// function to change the name of auto play button to stop


