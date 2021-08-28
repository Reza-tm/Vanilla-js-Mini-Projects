let states = [
    {city : 'Tehran'} , 
    {city : 'َEastAzarbaijan'} , 
    {city : 'West Azarbaijan'} , 
    {city : 'Esfehan'} , 
    {city : 'Alborz'} , 
    {city : 'Ilam'} , 
    {city : 'Booshehr'} , 
    {city : 'south Khorasan'} , 
    {city : 'East khorasan'} , 
    {city : 'West khorasan'} , 
    {city : 'North khorasan'} , 
    {city : 'Fars'} , 
    {city : 'Qazvin'} , 
    {city : 'Kerman'} , 
    {city : 'Kerman Shah'} , 
    {city : 'Golestan'} , 
    {city : 'Mashhad'} , 
    {city : 'Ghom'} , 
]
let filters = '' ;

let cont = document.querySelector('.scroll') ;
let body = document.querySelector('body') ;
let searchInput = document.querySelector('input') ;
let startPClassList = ['md:w-1/2' , 'w-full' , 'text-center' , 'mt-10' , ]
let falseSearch = document.querySelectorAll('.false-search')


states.forEach((e)=>{
    let startP = document.createElement('p')
    startP.textContent=e.city;
    startP.classList.add(...startPClassList)
    cont.append(startP)
})

function renderItem (_products , _filter){
    let trueSearch = _products.filter((e)=>{
        return e.city.toLowerCase().includes(_filter.toLowerCase());
    })
    cont.innerText = ''
    if(trueSearch.length >= 1){
        trueSearch.forEach(element => {
            let p = document.createElement('p') ;
            p.classList.add(...startPClassList)
            p.textContent = element.city ; 
            cont.append(p)
            console.log(p) ;
            falseSearch.forEach((e)=>{
                e.classList.add('hidden')
            })
        });
    }else if (trueSearch.length < 1 ){
        falseSearch.forEach((e)=>{
            e.classList.remove('hidden')
        })
    }
}

function searchFunc() {
    filters = searchInput.value
    renderItem(states , filters)
}
