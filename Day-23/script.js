function addIntern()
{

let name = document.getElementById("name").value;

let role = document.getElementById("role").value;

let date = document.getElementById("date").value;


if(name=="" || role=="" || date=="")
{

alert("Please fill all fields");

return;

}


let table = document.getElementById("internTable");


let row = table.insertRow();


row.insertCell(0).innerHTML = name;

row.insertCell(1).innerHTML = role;

row.insertCell(2).innerHTML = date;


document.getElementById("name").value="";

document.getElementById("role").value="";

document.getElementById("date").value="";

}