function subscribe(){
    const buttonElement = document.querySelector('.js-button')

    if (buttonElement.innerText ==='Subscribe'){
        buttonElement.innerHTML ='Subscribed'
    }
    else {
        buttonElement.innerHTML = 'Subscribe'
    }
}