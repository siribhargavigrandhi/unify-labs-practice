let products = []


// Load sample products

function loadProducts()
{

products = [

{name:"Laptop",category:"Electronics",price:800,stock:10,featured:false,tags:[]},

{name:"Mobile",category:"Electronics",price:600,stock:0,featured:false,tags:[]},

{name:"Shirt",category:"Clothing",price:300,stock:15,featured:false,tags:[]},

{name:"TV",category:"Electronics",price:900,stock:5,featured:false,tags:[]},

{name:"Table",category:"Furniture",price:400,stock:0,featured:false,tags:[]}

]

display()

}



// Display function

function display()
{

let table=document.getElementById("productTable")

table.innerHTML=""

products.forEach(p=>{

let row=table.insertRow()

row.insertCell(0).innerHTML=p.name

row.insertCell(1).innerHTML=p.category

row.insertCell(2).innerHTML=p.price

row.insertCell(3).innerHTML=p.stock

row.insertCell(4).innerHTML=p.featured

row.insertCell(5).innerHTML=p.tags.join(",")

})

}



// $inc simulation

function increaseElectronicsPrice()
{

products.forEach(p=>{

if(p.category=="Electronics")

{

p.price += 10

}

})

display()

}



// $set simulation

function setFeatured()
{

products.forEach(p=>{

if(p.price > 500)

{

p.featured=true

}

})

display()

}



// $push simulation

function addNewArrival()
{

products.forEach(p=>{

if(p.category=="Electronics")

{

p.tags.push("new-arrival")

}

})

display()

}



// deleteMany simulation

function deleteZeroStock()
{

products=products.filter(p=>p.stock!=0)

display()

}



// countDocuments simulation

function countProducts()
{

document.getElementById("countDisplay").innerHTML=

"Total Products: "+products.length

}