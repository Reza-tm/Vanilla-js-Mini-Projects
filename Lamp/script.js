// variable
let btn = document.getElementById('Btn')
let btn2 = document.getElementById('Btn2')

let color = document.querySelector('#color')
let color2 = document.querySelector('#color2')

let reset = document.querySelector('#reset')
let resetText = document.querySelector('#resetItem')
let body = document.querySelector('body')

function changeColor(){
    color.style.transform = "translateX(150px)"
    setTimeout(()=>{
        color.style.transform = "rotate(0deg)"
        body.style.backgroundColor = '#6EE7B7'
        btn.style.backgroundColor = '#4B5563'
        btn.style.color = 'white'
        btn2.style.backgroundColor = '#EC4899'
    },500)
}


function changeColor2(){
    color2.style.transform = "translateX(-150px)"
    setTimeout(()=>{
        color2.style.transform = "rotate(0deg)"
        body.style.backgroundColor = '#F472B6'
        btn2.style.backgroundColor = '#4B5563'
        btn2.style.color = 'white'
        btn.style.backgroundColor = '#34D399'
    },500)
}

function reseter(){
    resetText.style.transform="translatey(-150px)"
    setTimeout(()=>{
        resetText.style.transform="translatey(0)"
        btn.style.backgroundColor = '#34D399'
        btn2.style.backgroundColor = '#F472B6'
        body.style.backgroundColor = '#4B5563'
    },500)
}