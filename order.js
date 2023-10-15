//Import Sections
const homeSam = document.getElementById("home");
const homeSam2= document.getElementById("#");
const homeSam3= document.getElementById("order-landing");

//Remove content
function removeContent(){
  homeSam.style.display="none";
  homeSam2.style.display="none";
  homeSam3.style.display="none";
}
function revealContent(){
  homeSam.style.display="block";
  homeSam2.style.display="block";
  homeSam3.style.display="block";
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
const closeSamSec = document.getElementById("close-sam-section")


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
  items.forEach((item) => {
    const quantity = item.querySelector(".quantity");
    quantity.textContent = 0;
    totalPriceDisplay.textContent = `Rs. ${0}`;
  });
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
  const price = parseInt(priceText.split("Rs. ")[1]);
  priceList.push(price);
});

function calculateTotalPrice() {
  totalPrice = 0;
  quantities.forEach((quantity, index) => {
    totalPrice += priceList[index] * parseInt(quantity.textContent);
  });
  totalPriceDisplay.textContent = `Rs. ${totalPrice}`;
}

function Adder(index) {
  quantities[index].textContent = 0;
  addBtns[index].addEventListener("click", () => {
    quantities[index].textContent++;
    calculateTotalPrice();
  });
}

function Subtractor(index) {
  subtractBtns[index].addEventListener("click", () => {
    quantities[index].textContent--;
    if (quantities[index].textContent < 0) {
      quantities[index].textContent = 0;
    }
    calculateTotalPrice();
  });
}

const addBtns = document.querySelectorAll(".add");
const subtractBtns = document.querySelectorAll(".sub");

for (let i = 0; i < addBtns.length; i++) {
  Adder(i);
  Subtractor(i);
}
calculateTotalPrice();

