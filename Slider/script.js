
let currIndex = 1 ;

function pict(indexNum){
    currIndex = indexNum ;
    let picutres = document.getElementsByClassName('picutre')
    let dots = document.querySelectorAll('.dot')
    let dotArr = [... dots]
    if (currIndex > picutres.length){
        currIndex = 1
    }
    if (currIndex < 1){
        currIndex = picutres.length
    }

    for (x=0 ; x<picutres.length ; x++){
        picutres[x].style.display = 'none'
        picutres[x].classList.add('animate__animated')
        dots[x].classList.remove('active')
    }
    picutres[currIndex-1].classList.add('animate__bounceIn')
    picutres[currIndex -1 ].style.display = 'block'
    dots[currIndex -1].classList.add('active')

} 


pict(1)