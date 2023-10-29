// Write your Pizza Builder JavaScript in this file.
const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
const mushroomsButton = document.querySelector('.btn.btn-mushrooms');
const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
const sauceButton = document.querySelector('.btn.btn-sauce');
const crustButton = document.querySelector('.btn.btn-crust');

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
      document.querySelector('.pepperoni-price').style.visibility = 'visible';
      totalPrice += ingredients.pepperoni.price;
    } else {
      onePep.style.visibility = 'hidden';
      totalPrice -= ingredients.pepperoni.price;
      document.querySelector('.pepperoni-price').style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms === true) {
      oneMushroom.style.visibility = 'visible';
      document.querySelector('.mushrooms-price').style.visibility = 'visible';
      totalPrice += ingredients.mushrooms.price;
    } else {
      oneMushroom.style.visibility = 'hidden';
      document.querySelector('.mushrooms-price').style.visibility = 'hidden';
      totalPrice -= ingredients.mushrooms.price;
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers === true) {
      oneGreenPepper.style.visibility = 'visible';
      document.querySelector('.green-pepper-price').style.visibility =
        'visible';
      totalPrice += ingredients.greenPeppers.price;
    } else {
      oneGreenPepper.style.visibility = 'hidden';
      document.querySelector('.green-pepper-price').style.visibility = 'hidden';
      totalPrice -= ingredients.greenPeppers.price;
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce-white');
  if (state.whiteSauce === true) {
    sauce.style.visibility = 'visible';
    document.querySelector('.white-sauce-price').style.visibility = 'visible';
    totalPrice += ingredients.whiteSauce.price;
  } else {
    sauce.style.visibility = 'hidden';
    document.querySelector('.white-sauce-price').style.visibility = 'hidden';
    totalPrice -= ingredients.whiteSauce.price;
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust-gluten-free');
  if (state.glutenFreeCrust === true) {
    crust.style.visibility = 'visible';
    document.querySelector('gluten-free-price').style.visibility = 'visible';
    totalPrice += ingredients.glutenFreeCrust.price;
  } else {
    crust.style.visibility = 'hidden';
    document.querySelector('gluten-free-price').style.visibility = 'hidden';
    totalPrice -= ingredients.glutenFreeCrust.price;
  }
}

function renderButtons() {
  document.querySelectorAll('active').forEach((button) => {
    button.classList.toggle('active');
  });
}

function renderPrice() {
  return totalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
pepperoniButton.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
mushroomsButton.addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
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
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
crustButton.addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
