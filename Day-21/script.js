// SETTINGS MODULE

const Settings = {

key: "userSettings",

save(settings) {

localStorage.setItem(
this.key,
JSON.stringify(settings)
);

},

load() {

const data =
localStorage.getItem(this.key);

return data

? JSON.parse(data)

: {

theme: "light",

language: "English"

};

}

};


// MAIN APP

const themeBtn =
document.getElementById("themeToggle");

const languageSelect =
document.getElementById("languageSelect");

const status =
document.getElementById("status");


// Load settings

let userSettings =
Settings.load();


// Apply settings

function applySettings() {

document.body.className =
userSettings.theme;

languageSelect.value =
userSettings.language;

status.textContent =
"Theme: "
+ userSettings.theme
+ " | Language: "
+ userSettings.language;

}


// Toggle Theme

themeBtn.onclick = function () {

userSettings.theme =
userSettings.theme === "light"
? "dark"
: "light";

Settings.save(userSettings);

applySettings();

};


// Change Language

languageSelect.onchange =
function () {

userSettings.language =
languageSelect.value;

Settings.save(userSettings);

applySettings();

};


// Initial Load

applySettings();
