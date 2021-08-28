import {productsData} from "./api.js" ;

let itemsContainer = document.querySelector('.items-container')
let cartContainer = document.querySelector('.cart-container')
let quantityText = document.querySelector('.quantityText')
let totalPricePlace = document.querySelector('.totalPricePlace')
//------get api
class Products{
  getProducts(){
    return productsData ;
  }
}

let cart = []
class Ui {
  displayProducts (products){
      let result = ''
      productsData.forEach((items)=>{
            result = result + `<div class="flex-shrink-0 bg-white w-48 h-56 rounded-lg overflow-hidden relative">
            <div class="p-2 mt-2 w-28 h-32 mx-auto relative flex justify-center object-cover">
              <img class="object-cover object-top" src="${items.img}" alt="">
            </div>
            <div class="mx-auto text-center">
              <i class="fas fa-shopping-bag cursor-pointer add-btn mx-auto text-center" data-id="${items.id}"></i>
            </div>


            <div class="bg-white w-full mt-2">
              <p class="text-center leading-tight font-medium  text-xs px-3">${items.title}</p>
            </div>
            <p class="absolute bottom-2 inset-x-0 font-medium text-xs text-center mt-2">$${items.price}</p>
          </div>`
          itemsContainer.innerHTML = result
        })
    }
    getAddBtns(){
      let getAddBtns = document.querySelectorAll('.add-btn')
      let addBtns = [...getAddBtns]
      
      addBtns.forEach((btn)=>{
        const id = btn.dataset.id
        const isInCart = cart.find(p => p.id === id )
        if(isInCart){
          btn.style.color='red'
          btn.disabled = true ;
          btn.style.cursor = 'default'
        }
        btn.addEventListener('click' , (event)=>{
          btn.style.color = 'red'
          // btn.disabled=true
          btn.style.cursor = 'default'
          let addedProduct = Storage.getProducts(id)
          cart = [...cart, {...addedProduct , quantity : 1}]
          Storage.saveCarts(cart)
          this.setTotals(cart)
          this.setCarts(addedProduct)
        })
      })
      this.goToHomeCart()
    }
    goToHomeCart(){
      let goToCart = document.querySelector('.go-to-cart')
      let goToHome = document.querySelector('.go-to-home')
      let homeSection = document.querySelector('#home')
      let cartSection = document.querySelector('#cart')
      goToCart.addEventListener('click' ,  ()=>{
        homeSection.classList.add('hidden')
        cartSection.classList.remove('hidden')
        this.showQT()
      })
      goToHome.addEventListener('click' , ()=>{
        homeSection.classList.remove('hidden')
        cartSection.classList.add('hidden')
      })
    }
    setTotals(cart){
      let tempProducts = 0 
      const totalValue = cart.reduce((acc , curr)=>{
        tempProducts += curr.quantity
        return acc + curr.price*curr.quantity
      },0)
      let totalObject = {
        totalPrice : totalValue ,
        totalQuantity : tempProducts,
      }
      Storage.saveTotality(totalObject)
    }
    setCarts(carts){
      let div = document.createElement('div')
      div.classList.add('cart-item')
      div.innerHTML = `
      <div class="cart-item-info flex space-x-4">
        <div class="flex flex-col w-12 shadow-lg"><img src="${carts.img}" alt=""></div>
      <div class="flex flex-col justify-evenly">
        <p class="opacity-70 text-xs font-semibold">${carts.title}</p>
        <p class="text-sm font-bold">$ ${carts.price}</p>
      </div>
    </div>
    <div class="flex items-end justify-between mt-3">
      <div class="quantity flex h-7  w-20 border-2 rounded">
        <div class="w-1/3 h-full border-r-2 flex justify-center items-center text-gray-700"><i class="fa-minus icon-xs fa text-xs"></i></div>
        <div class="w-1/3 h-full border-r-2 flex justify-center items-center text-gray-700"><p class="font-bold">1</p></div>
        <div class="w-1/3 h-full flex justify-center items-center text-gray-700"><i class="fa-plus icon-xs fa text-xs"></i></div>
      </div>
      <div>
        <i class="fa fa-trash-alt mb-1 text-gray-500 cursor-pointer" data-id="${carts.id}"></i>
      </div>
    </div>`
    cartContainer.appendChild(div)
    }
    showQT(){
      let totality = Storage.getTotality() || []
      totalPricePlace.textContent = totality.totalPrice
      quantityText.textContent = totality.totalQuantity
    }
    setupApp(){
      cart = Storage.getCarts() || []
      cart.forEach(e=>{
        this.setCarts(e)
      })
      this.showQT()
    }

}

class Storage {
    static saveProducts(products){
        localStorage.setItem('prods' , JSON.stringify(products))
    }
    static getProducts (iid){
      let _products = JSON.parse(localStorage.getItem("prods"))
      return _products.find(p => p.id == iid )
    }
    static saveCarts (cart){
      localStorage.setItem('carts', JSON.stringify(cart))
    }
    static getCarts(){
      return JSON.parse(localStorage.getItem('carts'))
    }
    static saveTotality(totalObj){
      localStorage.setItem('totals' , JSON.stringify(totalObj))
    }
    static getTotality(){
      return JSON.parse(localStorage.getItem('totals'))
    }
}

document.addEventListener('DOMContentLoaded' , ()=>{
    let products = new Products()
    let productsData = products.getProducts() ;
    let ui = new Ui()
    ui.setupApp()
    ui.displayProducts(productsData)
    ui.getAddBtns()
    Storage.saveProducts(productsData)
})

