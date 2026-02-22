const API = "http://localhost:3000/products"



// LOAD PRODUCTS

async function loadProducts()
{

let res = await fetch(API)

let products = await res.json()

let table = document.getElementById("productTable")

table.innerHTML=""

products.forEach(p=>{

let row = table.insertRow()

row.insertCell(0).innerHTML=p._id

row.insertCell(1).innerHTML=p.name

row.insertCell(2).innerHTML=p.price

row.insertCell(3).innerHTML=p.stock

})

}



// ADD PRODUCT (POST)

async function addProduct()
{

let name=document.getElementById("name").value

let price=document.getElementById("price").value

let stock=document.getElementById("stock").value


await fetch(API,
{

method:"POST",

headers:
{

"Content-Type":"application/json"

},

body:JSON.stringify(
{

name,
price:Number(price),
stock:Number(stock)

})

})

alert("Product Added")

loadProducts()

}



// UPDATE STOCK (PATCH)

async function updateStock()
{

let id=document.getElementById("updateId").value

let stock=document.getElementById("updateStock").value


await fetch(API+"/"+id,
{

method:"PATCH",

headers:
{

"Content-Type":"application/json"

},

body:JSON.stringify(
{

stock:Number(stock)

})

})

alert("Stock Updated")

loadProducts()

}



// DELETE PRODUCT

async function deleteProduct()
{

let id=document.getElementById("deleteId").value


await fetch(API+"/"+id,
{

method:"DELETE"

})

alert("Product Deleted")

loadProducts()

}