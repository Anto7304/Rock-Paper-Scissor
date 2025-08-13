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
 alert (`computer selected ${choice}.You selected ${selected}.Results ${result}`)
}