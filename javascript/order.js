//Import Sections
const homeSam = document.getElementById("home");
const homeSam2 = document.getElementById("#");
const homeSam3 = document.getElementById("order-landing");

//Remove content
function removeContent() {
  homeSam.style.display = "none";
  homeSam2.style.display = "none";
  homeSam3.style.display = "none";
}
function revealContent() {
  homeSam.style.display = "block";
  homeSam2.style.display = "block";
  homeSam3.style.display = "block";
}

//Search bar functionality
const searchSAM = () => {
  const searchbox = document
    .getElementById("search-box-sam")
    .value.trim()
    .toUpperCase();
  const foodItems = document.getElementById("food-items-sam");
  const foodContents = foodItems.querySelectorAll(".food-content-sam");
  const foodNames = foodItems.getElementsByTagName("h3");

  for (let i = 0; i < foodNames.length; i++) {
    let textValue = foodNames[i].textContent.trim().toUpperCase();
    if (textValue.indexOf(searchbox) > -1) {
      foodContents[i].style.display = "";
    } else {
      foodContents[i].style.display = "none";
    }
  }
};
// Order page pop-up functionality
const order = document.getElementById("order-now-sam");
const content = document.getElementById("sam");
const reset = document.getElementById("reset-sam");
const closeSamSec = document.getElementById("close-sam-section");

const selectedOrders = {
  "Caprese Starter": [0, 10.3],
  "Israeli Starter": [0, 12.3],
  "Roll Ball Starter": [0, 19.39],
  "Organic Mix Starter": [0, 60.3],
  "Quinoa Starter": [0, 21.1],
  "Asparagus Starter": [0, 41.1],
  "Asian Salad": [0, 20.4],
  "Spinach Salad": [0, 17.1],
  "Mexican Salad": [0, 11.47],
  "Quinoa Salad": [0, 91.3],
  "Tabbouleh Salad": [0, 56.25],
  "Lentil Salad": [0, 31.91],
  "Pantua Dessert": [0, 60.5],
  "Panna Dessert": [0, 32.2],
  "Pecan Pie": [0, 41.97],
  "Fruit Dessert": [0, 19.2],
  "Pineapple Dessert": [0, 21.1],
  "Chocolate Dessert": [0, 41.1],
  "Butternut Soup": [0, 10.3],
  "Italian Mix Soup": [0, 12.3],
  "Hot Pasta Soup": [0, 19.39],
  "Miso Soup": [0, 60.3],
  "Thai Soup": [0, 69.55],
  "Tomato Soup": [0, 21.31],
  "Mixed Spaghetti": [0, 10.3],
  "Spicy Spaghetti": [0, 12.3],
  "Creamy Spaghetti": [0, 19.39],
  "Simple Spaghetti": [0, 60.3],
  "Cheesy Spaghetti": [0, 21.1],
  "Roasted Spaghetti": [0, 41.1],
  "Saffron Shake": [0, 10.3],
  "Orange Juice": [0, 12.3],
  "Strawberry Juice": [0, 19.39],
  "Avocado Smoothie": [0, 60.3],
  "Malted Drink": [0, 21.1],
  "Special Juice": [0, 41.1],
};

const orderNumbers = {
  0: "Caprese Starter",
  1: "Israeli Starter",
  2: "Roll Ball Starter",
  3: "Organic Mix Starter",
  4: "Quinoa Starter",
  5: "Asparagus Starter",
  6: "Asian Salad",
  7: "Spinach Salad",
  8: "Mexican Salad",
  9: "Quinoa Salad",
  10: "Tabbouleh Salad",
  11: "Lentil Salad",
  12: "Pantua Dessert",
  13: "Panna Dessert",
  14: "Pecan Pie",
  15: "Fruit Dessert",
  16: "Pineapple Dessert",
  17: "Chocolate Dessert",
  18: "Butternut Soup",
  19: "Italian Mix Soup",
  20: "Hot Pasta Soup",
  21: "Miso Soup",
  22: "Thai Soup",
  23: "Tomato Soup",
  24: "Mixed Spaghetti",
  25: "Spicy Spaghetti",
  26: "Creamy Spaghetti",
  27: "Simple Spaghetti",
  28: "Cheesy Spaghetti",
  29: "Roasted Spaghetti",
  30: "Saffron Shake",
  31: "Orange Juice",
  32: "Strawberry Juice",
  33: "Avocado Smoothie",
  34: "Malted Drink",
  35: "Special Juice",
};

function displaySelectedOrders() {
  const selectedOrder = document.getElementById("selected-orders");
  selectedOrder.innerHTML = `
    <div class='selected-order-heading'>
      <span>Sr.No</span>
      <span>Item</span>
      <span>Qt</span>
      <span>Price</span>
  </div>
  `;
  let index = 1;
  for (const key in selectedOrders) {
    if (selectedOrders.hasOwnProperty(key)) {
      const value = selectedOrders[key];
      if (value[0] > 0) {
        selectedOrder.innerHTML += `
          <div class='selected-order-box'>
            <span>${index}</span>  
            <span>${key}</span>  
            <span>${value[0]}</span>  
            <span>${value[1] * value[0].toFixed(2)}</span>  
          </div>
        `;
        index++;
      }
    }
  }
}

closeSamSec.addEventListener("click", () => {
  content.classList.remove("active-sam");
  revealContent();
});

order.addEventListener("click", () => {
  content.classList.add("active-sam");
  removeContent();
});

reset.addEventListener("click", () => {
  content.classList.remove("active-sam");
  revealContent();
});

// Add to cart functionality
const items = document.querySelectorAll(".item-sam");
//Reset Cart
const resetButton = document.getElementById("reset-cart-sam");
function resetCart() {
  items.forEach((item, index) => {
    const quantity = item.querySelector(".quantity");
    quantity.textContent = 0;
    totalPriceDisplay.textContent = `$ ${0}`;
    const itemName = orderNumbers[index];
    selectedOrders[itemName][0] = 0;
  });
  displaySelectedOrders(); // Update the displayed orders after resetting
  calculateTotalPrice(); // Recalculate the total price after resetting
}

resetButton.addEventListener("click", () => {
  resetCart();
});

//Checkout adder
const foodItems = document.querySelectorAll(
  ".food-content-sam .description-sam p"
);
const quantities = document.querySelectorAll(".food-content-sam .quantity");

const priceList = [];
const totalPriceDisplay = document.getElementById("totalPrice");
let totalPrice = 0;

foodItems.forEach((item) => {
  const priceText = item.textContent.trim();
  const price = parseFloat(priceText.split("$ ")[1]).toFixed(2);
  priceList.push(price);
});

function calculateTotalPrice() {
  totalPrice = 0;
  quantities.forEach((quantity, index) => {
    totalPrice += priceList[index] * parseInt(quantity.textContent);
  });
  totalPriceDisplay.textContent = `$ ${totalPrice.toFixed(2)}`;
}

function Adder(index) {
  quantities[index].textContent = 0;
  addBtns[index].addEventListener("click", () => {
    quantities[index].textContent++;
    selectedOrders[orderNumbers[index]][0]++;
    calculateTotalPrice();
    displaySelectedOrders();
  });
}

function Subtractor(index) {
  subtractBtns[index].addEventListener("click", () => {
    quantities[index].textContent--;
    selectedOrders[orderNumbers[index]][0]--;
    if (quantities[index].textContent < 0) {
      quantities[index].textContent = 0;
      selectedOrders[orderNumbers[index]][0] = 0;
    }
    calculateTotalPrice();
    displaySelectedOrders();
  });
}

const addBtns = document.querySelectorAll(".add");
const subtractBtns = document.querySelectorAll(".sub");

for (let i = 0; i < addBtns.length; i++) {
  Adder(i);
  Subtractor(i);
}
calculateTotalPrice();

const navOrder = document.getElementById("aboutLink");

navOrder.addEventListener("click", () => {
  sessionStorage.setItem("currentSection", "home");
});
