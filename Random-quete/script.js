let pTag = document.querySelector('.pTag')
let number = document.querySelector('.number')
let quotes = [
    {txt : 'Guess who surprised themselves and changed their minds' , author : 'Samsung'} ,
    {txt : 'Tact is the knack of making a point without making an enemy.'  , author : 'newton'} ,
    {txt : 'I want to put a ding in the universe.' , author : 'steve jobs'} ,
    {txt : `He who has a why to live can bear almost any how.` , author : 'nietzsche'} ,
    {txt : 'Your most unhappy customers are your greatest source of learning.' , author : 'bil gats'} ,
    {txt : `The trick is not to learn to trust your gut feelings, but rather to discipline yourself to ignore them. Stand by your stocks as long as the fundamental story of the company hasn't changed.` , author : 'peter lynch'} ,
    {txt : 'Price is what you pay. Value is what you get. ' , author : 'warren buffett'} ,
    {txt : 'A squirrel dying in front of your house may be more relevant to your interests right now than people dying in Africa.' , author : 'mark zuckerberg'} ,
    {txt : 'If you do build a great experience, customers tell each other about that. Word of mouth is very powerful.' , author : 'jeff bezos'} ,
    {txt : 'Failure is an option here' , author : 'elon musk'} ,
]
function randomBtn () {
    let generator = Math.floor(Math.random()* 10) 
    pTag.textContent = quotes[generator].txt
    number.textContent = quotes[generator].author
}