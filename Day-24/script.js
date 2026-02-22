let products = []


function loadProducts()
{

products = [

{
name: "Laptop",
category: "Electronics",
price: 80000,
stock: 10,
specs:
{
color: "Gray",
weight: "2kg"
}
},

{
name: "Mobile",
category: "Electronics",
price: 50000,
stock: 20,
specs:
{
color: "Black",
weight: "200g"
}
},

{
name: "Sofa",
category: "Furniture",
price: 30000,
stock: 5,
specs:
{
color: "Brown",
weight: "25kg"
}
}
,

{
name: "T-Shirt",
category: "Clothing",
price: 1000,
stock: 50,
specs:
{
color: "Blue",
weight: "150g"
}
}
,

{
name: "Table",
category: "Furniture",
price: 15000,
stock: 7,
specs:
{
color: "White",
weight: "10kg"
}
}

]

display(products)

}


function display(data)
{

let table = document.getElementById("productTable")

table.innerHTML = ""

data.forEach(product =>

{

let row = table.insertRow()

row.insertCell(0).innerHTML = product.name

row.insertCell(1).innerHTML = product.category

row.insertCell(2).innerHTML = product.price

row.insertCell(3).innerHTML = product.stock

row.insertCell(4).innerHTML = product.specs.color

row.insertCell(5).innerHTML = product.specs.weight

})

}


function showElectronics()
{

let result = products.filter(p => p.category == "Electronics")

display(result)

}


function showTop2()
{

let result = products

.sort((a,b) => b.price - a.price)

.slice(0,2)

display(result)

}