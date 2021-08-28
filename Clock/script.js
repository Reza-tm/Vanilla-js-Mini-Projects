const mainDeg = 6 ;
const hourLine =30
const hour = document.querySelector('.hr')
const minute = document.querySelector('.mn')
const second = document.querySelector('.sc')
const classicHour = document.querySelector('#classicHour')
const classicMinute = document.querySelector('#classicMinute')
const classicWeek = document.querySelector('#classicWeek')
const classicDay = document.querySelector('#classicDay')
const classicMonth = document.querySelector('#classicMonth')

setInterval(()=>{
    let day = new Date() ;
    let weekDay;
    let month;
    switch(day.getDay()){
        case 1 :
            weekDay = 'Mon'
            break;
        case 2 :
            weekDay = 'Tue'
            break; 
        case 3 : 
            weekDay = 'Wed'
            break ;
        case 4 : 
            weekDay = 'Thu'
            break ; 
        case 5 :
            weekDay = 'Fri'
            break; 
        case 6 :
            weekDay = 'Sat'
            break ; 
        case 0 :
            weekDay = 'Sun'
    }
    switch(day.getMonth()){
        case 0 :
            month = 'Jan'
            break ; 
        case 1 : 
            month = 'Feb'
            break;
        case 2 :
            month = 'Mar'
            break ; 
        case 3 :
            month = 'Apr'
            break ; 
        case 4 : 
            month = 'May'
            break ;
        case 5 :
            month = "Jun"
            break;
        case 6 :
            month = 'Jul'
            break ; 
        case 7 :
            month = 'Aug'
            break ; 
        case 8 :
            month = 'Sep'
            break;
        case 9 :
            month = 'Oct'
            break ;
        case 10 : 
            month = 'Nov'
            break;
        case 11 :
            month = 'Dec'
            break
    }
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * mainDeg ;
    let ss = day.getSeconds() * mainDeg ; 
    hour.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
    minute.style.transform = `rotateZ(${mm}deg)`
    second.style.transform = `rotateZ(${ss}deg)`
    
    if(day.getHours() < 10){
        classicHour.innerHTML ='0' + day.getHours()
    }else{
        classicHour.innerHTML =day.getHours()
    }
    
    if(day.getMinutes() < 10){
        classicMinute.innerHTML ='0' + day.getMinutes()
    }else{
        classicMinute.innerHTML =day.getMinutes()
    }
    
    classicWeek.innerHTML = weekDay
    classicDay.innerHTML = day.getDate()
    classicMonth.innerHTML = month
})

//--------------------------------------------------------Selection\
let birthSection = document.querySelector('.birth')
let clockSection = document.querySelector('.clock')
let clockselect = document.querySelector('#clock')
let birthselect = document.querySelector('#birth')
function clockFunc(){
    clockSection.classList.add('active')
    birthSection.classList.remove('actived')
    clockselect.classList.remove('hidden')
    birthselect.classList.add('hidden')
}

function birthFunc() {
    clockSection.classList.remove('active')
    birthSection.classList.add('actived')
    clockselect.classList.add('hidden')
    birthselect.classList.remove('hidden')
}

//--------------------------------------------------------- Birth Day
let modalMonths = document.querySelectorAll('.monthPack')
let empty = document.querySelector('.empy')
let modalSection = document.querySelector('.modal')
let monthWrapper = document.querySelector('.months')

for(let idSeter of modalMonths){
    idSeter.id = idSeter.children[0].textContent;
}

console.log();
empty.addEventListener('dragover' , dragOver)
empty.addEventListener('dragenter' , dragEnter)
empty.addEventListener('dragleave' , dragLeave)
empty.addEventListener('drop' , ddrop)

for (let modalMonth of modalMonths){
    modalMonth.addEventListener('dragstart' , dragStart)
    modalMonth.addEventListener('dragend' , dragEnd)
}


function dragStart(e) {
    this.style.opacity = '50%'
    var matn = this.innerHTML
    e.dataTransfer.setData("ElementId" , e.target.id)
}

function dragEnd(e){
    this.style.opacity = '100%'
}

function dragEnter(e){
}

function dragLeave(e){
}

function dragOver (e){
    e.preventDefault()
}

function ddrop(e) {
    let idGeter = e.dataTransfer.getData("ElementId")
    this.append(document.getElementById(idGeter).children[0])
    this.classList.add('mamad')
    monthWrapper.style.opacity = '0'
    modalSection.style.height = '65px' ;
    setTimeout(()=>{
        monthWrapper.style.display = 'none'
    } , 180)

    setTimeout(()=>{
        empty.style.opacity='0'
        modalSection.style.height = '8.5rem' ;
    },1000)

    setTimeout(()=>{
        let hh = document.querySelector('.hh')
        hh.style.display='flex'
        hh.style.opacity='1'
        empty.style.display = 'none'
    },1100)
}


let dayInput = document.querySelector('#dayinput') 
dayInput.value = 1
function setDay() {
    // console.log(empty.children[0].textContent);
    console.log(dayInput.value);
    let birthMonth = empty.children[0].textContent
    let birthDay =dayInput.value
    let hh = document.querySelector('.hh')
    hh.style.opacity = '0'
    setTimeout(()=>{
        hh.style.display='none'
    } , 400)
    modalSection.style.height='20rem'
    setTimeout(lastResult , 500)
}

let birthTimer = document.querySelector('.birthTimer')
function lastResult (){
    birthTimer.classList.remove('hidden')
    let untilDay = document.querySelector('.Days')
    let untilHours = document.querySelector('.Hours')
    let untilMinutes = document.querySelector('.Minutes')
    let untilSeconds = document.querySelector('.Seconds')
    let  currDate = new Date()
    let nextyear = currDate.getFullYear() + 1;
    let nextDate = new Date(`${empty.children[0].textContent} ${dayInput.value} , ${nextyear}`)
    // let mame = new Date()
    let diff = nextDate-currDate ;
    let seconds = Math.floor(diff / 1000)% 60 ;
    untilSeconds.textContent=seconds
    let minutes = Math.floor(diff / 60000) %60 ;
    untilMinutes.textContent=minutes
    let hours = Math.floor(diff/60000/60) % 24;
    untilHours.textContent=hours
    let dayz = Math.floor(diff/(1000*60*60*24))%365;
    untilDay.textContent = dayz
    setInterval(lastResult , 1000) ; 
}