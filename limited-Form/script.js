let userInput = document.querySelector('#userInput')
let passInput = document.querySelector('#passInput')
let userError = document.querySelector('#userError')
let passError = document.querySelector('#passError')
let btn = document.querySelector('button')

function userName() {
    if(userInput.value.length <= 6 ){
        passInput.disabled = true ;
        userError.classList.remove('hidden')
    }else if (userInput.value.length > 5){
        passInput.disabled = false ;
        userError.classList.add('hidden')
    }
}

function pass() {
    if(passInput.value.length > 4){
        passError.classList.add('hidden')
        btn.style.backgroundColor = '#4D49E8'
        btn.classList.remove('cursor-not-allowed')
    }else if(passInput.value.length <= 5){
        passError.classList.remove('hidden')
        btn.style.backgroundColor = '#F43F5E'
        btn.classList.add('cursor-not-allowed')
    }
    console.log(passInput.value.length)
}
