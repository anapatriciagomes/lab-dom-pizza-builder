// Write your Pizza Builder JavaScript in this file.
const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
const mushroomsButton = document.querySelector('.btn.btn-mushrooms');
const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
const sauceButton = document.querySelector('.btn.btn-sauce');
const crustButton = document.querySelector('.btn.btn-crust');

const pepperoniPrice = document.querySelector('.pepperoni-price');
const mushroomsPrice = document.querySelector('.mushrooms-price');
const greenPeppersPrice = document.querySelector('.green-pepper-price');
const saucePrice = document.querySelector('.white-sauce-price');
const glutenFreeCrustPrice = document.querySelector('.gluten-free-price');

const totalPriceText = document.querySelector('.total-price');

// Constants
const basePrice = 10;
let totalPrice = basePrice;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni === true) {
      onePep.style.visibility = 'visible';
      pepperoniPrice.removeAttribute('hidden', 'hidden');
    } else {
      onePep.style.visibility = 'hidden';
      pepperoniPrice.setAttribute('hidden', 'hidden');
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms === true) {
      oneMushroom.style.visibility = 'visible';
      mushroomsPrice.removeAttribute('hidden', 'hidden');
    } else {
      oneMushroom.style.visibility = 'hidden';
      mushroomsPrice.setAttribute('hidden', 'hidden');
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers === true) {
      oneGreenPepper.style.visibility = 'visible';
      greenPeppersPrice.removeAttribute('hidden', 'hidden');
    } else {
      oneGreenPepper.style.visibility = 'hidden';
      greenPeppersPrice.setAttribute('hidden', 'hidden');
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce-white');
  if (state.whiteSauce === true) {
    sauce.style.visibility = 'visible';
    saucePrice.removeAttribute('hidden', 'hidden');
  } else {
    sauce.style.visibility = 'hidden';
    saucePrice.setAttribute('hidden', 'hidden');
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust-gluten-free');
  if (state.glutenFreeCrust === true) {
    crust.style.visibility = 'visible';
    glutenFreeCrustPrice.removeAttribute('hidden', 'hidden');
  } else {
    crust.style.visibility = 'hidden';
    glutenFreeCrustPrice.setAttribute('hidden', 'hidden');
  }
}

function renderButtons() {
  document.querySelectorAll('.btn').forEach((button) => {
    button.classList.toggle('active');
  });
}

function renderPrice() {
  totalPriceText.innerText = `$${totalPrice}`;
  return totalPrice;
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
pepperoniButton.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  if (state.pepperoni === true) {
    totalPrice += ingredients.pepperoni.price;
  } else {
    totalPrice -= ingredients.pepperoni.price;
  }
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
mushroomsButton.addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  if (state.mushrooms === true) {
    totalPrice += ingredients.mushrooms.price;
  } else {
    totalPrice -= ingredients.mushrooms.price;
  }
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
greenPeppersButton.addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
sauceButton.addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  if (state.whiteSauce === true) {
    totalPrice += ingredients.whiteSauce.price;
  } else {
    totalPrice -= ingredients.whiteSauce.price;
  }
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
crustButton.addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if (state.glutenFreeCrust === true) {
    totalPrice += ingredients.glutenFreeCrust.price;
  } else {
    totalPrice -= ingredients.glutenFreeCrust.price;
  }
  renderEverything();
});
