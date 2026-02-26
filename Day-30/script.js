let products = []

let cart = JSON.parse(localStorage.getItem("cart")) || []

const API = "http://localhost:3000/api/products"



fetchProducts()


function fetchProducts(){

fetch(API)

.then(res=>res.json())

.then(data=>{

products=data

displayProducts(products)

})

}



function displayProducts(list){

const container=document.getElementById("productContainer")

container.innerHTML=""

list.forEach(p=>{

container.innerHTML+=`

<div class="card">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<p>${p.category}</p>

<button onclick="addToCart('${p._id}')">Add to Cart</button>

</div>

`

})

}



function addToCart(id){

const product=products.find(p=>p._id==id)

cart.push(product)

localStorage.setItem("cart",JSON.stringify(cart))

updateCartCount()

}



function updateCartCount(){

document.getElementById("cartCount").innerText=cart.length

}

updateCartCount()



// SEARCH

document.getElementById("search").addEventListener("input",(e)=>{

const value=e.target.value.toLowerCase()

const filtered=products.filter(p=>p.name.toLowerCase().includes(value))

displayProducts(filtered)

})




// CATEGORY FILTER

document.getElementById("categoryFilter").addEventListener("change",(e)=>{

const value=e.target.value

const filtered=value?

products.filter(p=>p.category==value):products

displayProducts(filtered)

})




// CART

function openCart(){

document.getElementById("cartModal").style.display="block"

displayCart()

}



function closeCart(){

document.getElementById("cartModal").style.display="none"

}



function displayCart(){

const container=document.getElementById("cartItems")

container.innerHTML=""

let total=0

cart.forEach(p=>{

total+=p.price

container.innerHTML+=`

<p>${p.name} - ₹${p.price}</p>

`

})

document.getElementById("totalPrice").innerText=total

}




// CHECKOUT

function checkout(){

const name=prompt("Enter name")

const address=prompt("Enter address")

const email=prompt("Enter email")

const order={

name,

address,

email,

items:cart

}


fetch("http://localhost:3000/api/orders",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(order)

})

.then(res=>res.json())

.then(()=>{

alert("Order placed")

cart=[]

localStorage.removeItem("cart")

updateCartCount()

closeCart()

})

}