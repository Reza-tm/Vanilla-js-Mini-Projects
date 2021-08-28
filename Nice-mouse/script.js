
function kolangAnimation(event) {
    let kolang = document.createElement('div')
    kolang.classList.add("circle")
    document.body.append(kolang)
    kolang.style.left = event.clientX + 'px'
    kolang.style.top = event.clientY + 'px'
    kolang.style.left = kolang.offsetLeft - 0 + 'px'
    kolang.style.top = kolang.offsetTop - 0 + 'px'
    setInterval( kolang.classList.add('op0') , 10)
    setInterval(()=>{kolang.remove()} , 500)
}