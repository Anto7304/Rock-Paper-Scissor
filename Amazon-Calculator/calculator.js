function calculate(){
    const inputElement = document.querySelector('.js-input')
    let cost =Number(inputElement.value) 

    if (cost <40){
        
        console.log(cost = cost + 10)
    }

    document.querySelector('.js-cost').innerHTML = `$${cost}`
}

function handleKey(event){
    if (event.key === 'Enter'){
        calculate()
    }
}