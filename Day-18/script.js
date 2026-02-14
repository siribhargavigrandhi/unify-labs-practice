// ---------------- PET CLASS ----------------

class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this._health = 80;
    this.hunger = 50;
    this.energy = 60;
  }

  // Getter
  get health() {
    return this._health;
  }

  // Setter (keeps health between 0 and 100)
  set health(value) {
    if (value > 100) this._health = 100;
    else if (value < 0) this._health = 0;
    else this._health = value;
  }

  feed() {
    this.hunger -= 10;
    this.health += 5;
    return `${this.name} enjoyed the food! 🍖`;
  }

  play() {
    if (this.energy < 10) {
      return `${this.name} is too tired to play! 😴`;
    }
    this.energy -= 15;
    this.hunger += 10;
    this.health += 5;
    return `${this.name} had fun playing! 🎾`;
  }

  rest() {
    this.energy += 20;
    this.health += 5;
    return `${this.name} feels refreshed! 😴`;
  }

  getStatus() {
    return `
      Health: ${this.health},
      Hunger: ${this.hunger},
      Energy: ${this.energy}
    `;
  }
}

// ---------------- CREATE PET OBJECT ----------------

const myPet = new Pet("Buddy", "Dog");

// ---------------- UI FUNCTIONS ----------------

function updateUI(message = "") {
  document.getElementById("petName").textContent = myPet.name;
  document.getElementById("petType").textContent = "Type: " + myPet.type;
  document.getElementById("health").textContent = myPet.health;
  document.getElementById("hunger").textContent = myPet.hunger;
  document.getElementById("energy").textContent = myPet.energy;
  document.getElementById("statusMessage").textContent = message;
}

function feedPet() {
  const msg = myPet.feed();
  updateUI(msg);
}

function playWithPet() {
  const msg = myPet.play();
  updateUI(msg);
}

function restPet() {
  const msg = myPet.rest();
  updateUI(msg);
}

// Initial load
updateUI("Your pet is ready! 🐾");
