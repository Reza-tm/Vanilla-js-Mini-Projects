let sectionSelection = document.querySelector('.section')
let boolian = document.querySelector('.boolian')
let part = document.querySelector('.part')
let tehranOptions = [
    'Cinema' , 'Estakhr' , 'Metro'
]
let ghomOptions = [
     'Masjed' , 'Mono Rail'
]
let rashtOptions = [
    'Good weather' , 'Goog people' , 'Best kebab'
]

function selectFunc() {
        console.log((sectionSelection.selectedIndex))
    if(sectionSelection.selectedIndex == 1){
        part.innerHTML = ''
         tehranOptions.forEach((e)=>{
             let options = document.createElement('option')
             options.textContent = e
             options.classList.add('font-semibold')
             options.value = e
             part.append(options)
         })
    }else if(sectionSelection.selectedIndex == 2){
        part.innerHTML=''
        ghomOptions.forEach((e)=>{
            let options = document.createElement('option')
            options.textContent = e
            options.classList.add('font-semibold')
            options.value = e
            part.append(options)
        })
    }else if(sectionSelection.selectedIndex == 3){
        part.innerHTML=''
        rashtOptions.forEach((e)=>{
            let options = document.createElement('option')
            options.textContent = e
            options.classList.add('font-semibold')
            options.value = e
            part.append(options)
        })
    }
    
}
function activeBoolian() {
    sectionSelection.options[0].disabled=true
    part.disabled = false
}