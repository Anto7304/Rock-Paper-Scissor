function subscribe(){
    const buttonElement = document.querySelector('.js-button')

    if (buttonElement.innerText ==='Subscribe'){
        buttonElement.innerHTML ='Subscribed'
        buttonElement.classList.add('is-Subscribe')
    }
    else {
        buttonElement.innerHTML = 'Subscribe'
        buttonElement.classList.remove('is-Subscribe')
    }
}