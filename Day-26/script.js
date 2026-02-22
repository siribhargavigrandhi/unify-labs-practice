async function loadProducts()
{

try
{

let response = await fetch("http://localhost:3000/products")

let products = await response.json()

let table = document.getElementById("productTable")

table.innerHTML=""

products.forEach(p=>{

let row = table.insertRow()

row.insertCell(0).innerHTML=p.name

row.insertCell(1).innerHTML=p.category

row.insertCell(2).innerHTML=p.price

row.insertCell(3).innerHTML=p.stock

})

}

catch(error)
{

alert("Error fetching products")

}

}