// let form = document.querySelector("form");
// console.log(form.elements[1].type);
// // → number
// console.log(form.elements.number.type);
// // → number
// console.log(form.elements.name.form == form);
// // → true

// form.addEventListener("submit", function(event) {
//   console.log("Saving value", form.elements.value.value);
//   event.preventDefault();
// });

let meals = [];
let totalProtein = 0;

document.getElementById("totalProtein").innerHTML = `${totalProtein}`;
function addMeal(name, protein) {
  const meal = {
    name,
    protein,
    id: Date.now()
  };
  meals.push(meal);
  totalProtein -= protein;
  document.getElementById("totalProtein").innerHTML = `${totalProtein}`;
}

const form = document.getElementById("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const meal = document.getElementById("meal");
  const protein = document.getElementById("protein");

  const name = meal.value.trim();
  const qty = protein.value;
  if (name !== "" && qty !== 0) {
    addMeal(name, qty);
    meal.value = "";
    protein.value = "";
    meal.focus();
  }
});
function printMeals() {
  console.log(meals);
}

const totalPro = document.getElementById("totalPro");
totalPro.addEventListener("submit", event => {
  event.preventDefault();
  const total = document.getElementById("total").value;
  if (total !== 0) {
    totalProtein = total;
  }
  document.getElementById("totalProtein").innerHTML = `${totalProtein}`;
});
