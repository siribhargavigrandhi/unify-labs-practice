//////////////////////////////////////////////////
// STATE MODULE
//////////////////////////////////////////////////

const State = {

data: [],

favorites:
JSON.parse(localStorage.getItem("favorites"))
|| [],

theme:
localStorage.getItem("theme")
|| "light"

};

//////////////////////////////////////////////////
// API MODULE
//////////////////////////////////////////////////

const API = {

async fetchData() {

try {

showLoading(true);

const res =
await fetch(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20"
);

const data =
await res.json();

State.data = data;

UI.render(data);

}
catch {

showError("Failed to fetch data");

}
finally {

showLoading(false);

}

}

};

//////////////////////////////////////////////////
// UI MODULE
//////////////////////////////////////////////////

const UI = {

render(data) {

const container =
document.getElementById("container");

container.innerHTML =
data.map(item => `

<div class="card">

<h3>${item.name}</h3>

<p>$${item.current_price}</p>

<button onclick="toggleFavorite('${item.id}')">

⭐ Favorite

</button>

</div>

`).join("");

},

renderFavorites() {

const favContainer =
document.getElementById("favorites");

const favData =
State.data.filter(item =>
State.favorites.includes(item.id)
);

favContainer.innerHTML =
favData.map(item => `

<div class="card">

<h3>${item.name}</h3>

<p>$${item.current_price}</p>

</div>

`).join("");

}

};

//////////////////////////////////////////////////
// APP MODULE
//////////////////////////////////////////////////

function toggleFavorite(id) {

if(State.favorites.includes(id))

State.favorites =
State.favorites.filter(f => f !== id);

else

State.favorites.push(id);

localStorage.setItem(
"favorites",
JSON.stringify(State.favorites)
);

UI.renderFavorites();

}

//////////////////////////////////////////////////
// SEARCH
//////////////////////////////////////////////////

document
.getElementById("search")
.oninput = e => {

const value =
e.target.value.toLowerCase();

const filtered =
State.data.filter(item =>
item.name.toLowerCase()
.includes(value)
);

UI.render(filtered);

};

//////////////////////////////////////////////////
// SORT
//////////////////////////////////////////////////

document
.getElementById("sort")
.onchange = e => {

const sorted =
[...State.data].sort((a,b)=>

e.target.value === "price"

? a.current_price
- b.current_price

: a.name.localeCompare(b.name)

);

UI.render(sorted);

};

//////////////////////////////////////////////////
// THEME
//////////////////////////////////////////////////

document
.getElementById("themeToggle")
.onclick = () => {

State.theme =
State.theme === "light"
? "dark"
: "light";

document.body.className =
State.theme;

localStorage.setItem(
"theme",
State.theme
);

};

//////////////////////////////////////////////////
// LOADING
//////////////////////////////////////////////////

function showLoading(show){

document
.getElementById("loading")
.style.display =
show ? "block":"none";

}

//////////////////////////////////////////////////
// ERROR
//////////////////////////////////////////////////

function showError(msg){

document
.getElementById("error")
.textContent = msg;

}

//////////////////////////////////////////////////
// INIT
//////////////////////////////////////////////////

document.body.className =
State.theme;

API.fetchData();

UI.renderFavorites();
