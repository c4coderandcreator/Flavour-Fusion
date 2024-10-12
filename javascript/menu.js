/* ------------ MenuPage By Naima -------------*/
// Page hide and show
const homeBtn = document.querySelector("#home-btn"),
  menuBtn = document.querySelector("#menu-btn"),
  menuFbtn = document.querySelector("#menu-footer-btn"),
  main = document.querySelector(".l-main"),
  menuNaima = document.querySelector(".menu-naima");

menuBtn.addEventListener("click", function () {
  main.style.display = "none";
  menuNaima.style.display = "block";
  homeBtn.classList.remove("active-link");
  menuBtn.classList.add("active-link");
  sessionStorage.setItem("currentSection", "menu");
});

const storedSection = sessionStorage.getItem("currentSection");

if (storedSection === "menu") {
  main.style.display = "none";
  menuNaima.style.display = "block";
  homeBtn.classList.remove("active-link");
  menuBtn.classList.add("active-link");
}

homeBtn.addEventListener("click", function () {
  menuNaima.style.display = "none";
  main.style.display = "block";
  menuBtn.classList.remove("active-link");
  homeBtn.classList.add("active-link");
  sessionStorage.setItem("currentSection", "home");
});

// Summer Sale
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop : true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiperContainer = document.querySelector(".mySwiper");

// on mouse enter this function stops the slider
swiperContainer.addEventListener("mouseenter", function () {
  swiper.autoplay.stop();
});

//on mouse leave this function starts the slider
swiperContainer.addEventListener("mouseleave", function () {
  swiper.autoplay.start();
});

// Menu Buttons
const menuButtons = document.querySelectorAll(".menu-btn");
const menuSlides = document.querySelectorAll(".m-items-slide");

menuButtons.forEach((button) => {
  button.addEventListener("click", function () {
    menuButtons.forEach((btn) => btn.classList.remove("menu-clicked-btn"));
    button.classList.add("menu-clicked-btn");

    const targetSlideId = button.getAttribute("data-target");
    menuSlides.forEach((slide) => (slide.style.display = "none"));

    const targetSlide = document.querySelector(`.${targetSlideId}`);
    if (targetSlide) {
      targetSlide.style.display = "block";
    }
  });
});

// Dropdown Menu
const dropdown = document.querySelector(".dropdown"),
  select = dropdown.querySelector(".select"),
  caret = dropdown.querySelector(".caret"),
  menu_dd = dropdown.querySelector(".menu-dd"),
  options = dropdown.querySelectorAll(".menu-dd li"),
  selected = dropdown.querySelector(".selected");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("caret-rotate");
  menu_dd.classList.toggle("menu-open");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerText = option.innerText;
    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");
    menu_dd.classList.remove("menu-open");
    options.forEach((option) => {
      option.classList.remove("active-menu");
    });
    option.classList.add("active-menu");

    const slideId = option.getAttribute("data-target");
    const slides = document.querySelectorAll(".m-items-slide");
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    const selectedSlide = document.querySelector(`.${slideId}`);
    if (selectedSlide) {
      selectedSlide.style.display = "block";
    }
  });
});

// Menu Likes by A.H.M. ANNUR

let likedDishes = [];
const dishes = document.querySelectorAll(".dish");

// Like a dish
function addHeartIconToDish(dish) {
  //check before adding
  //because this can lead to multiple hearts being added due to events
  const heartIcon = dish.querySelector(".bx.bxs-heart");
  if (!heartIcon) {
    const newHeartIcon = document.createElement("i");
    newHeartIcon.className = "bx bxs-heart";
    dish.appendChild(newHeartIcon);
  }
}

// Unlike a dish
function addHoverHeartIconToDish(dish) {
  //check before adding hover
  //because this can lead to multiple hearts being added due to events
  const heartIcon = dish.querySelector(".bx.bx-heart");
  if (!heartIcon) {
    const newHeartIcon = document.createElement("i");
    newHeartIcon.className = "bx bx-heart";
    dish.appendChild(newHeartIcon);
  }
}

// Hover dish
function removeHeartIconFromDish(dish) {
  const heartIcon = dish.querySelector(".bxs-heart");
  if (heartIcon) {
    dish.removeChild(heartIcon);
  }
}

// Unhovered dish
function removeHoverHeartIconFromDish(dish) {
  const heartIcon = dish.querySelector(".bx-heart");
  if (heartIcon) {
    dish.removeChild(heartIcon);
  }
}

// Update the dishes status
function handleLikedDishesChange() {
  dishes.forEach((dish) => {
    const dishName = dish.querySelector(".dish-name");
    if (dishName) {
      if (likedDishes.includes(dishName.innerText)) {
        addHeartIconToDish(dish);
      } else {
        removeHeartIconFromDish(dish);
      }
    }
  });
}

dishes.forEach((dish) => {
  dish.addEventListener("mouseover", function () {
    if (likedDishes.length > 1) {
      return;
    }
    const dishName = dish.querySelector(".dish-name");
    // checking if dish is liked
    // if not liked, hover like icon
    if (dishName && likedDishes.includes(dishName.innerText)) {
      return;
    }
    addHoverHeartIconToDish(dish);
  });

  dish.addEventListener("mouseout", function () {
    removeHoverHeartIconFromDish(dish);
  });

  dish.addEventListener("click", function () {
    const dishName = dish.querySelector(".dish-name");
    if (dishName) {
      if (likedDishes.includes(dishName.innerText)) {
        likedDishes = likedDishes.filter((name) => name != dishName.innerText);
        removeHeartIconFromDish(dish);
        document.dispatchEvent(new Event("likedDishesChanged"));
      } else {
        if (likedDishes.length > 1) {
          // Already 2 items added to liked Dishes
          return;
        } else {
          likedDishes = [...likedDishes, dishName.innerText];
          addHeartIconToDish(dish);
          //dispatching an event when new dishes are added
          document.dispatchEvent(new Event("likedDishesChanged"));
        }
      }
    }
  });
});

// Adding an event listener that listens for changes in liked Dishes
document.addEventListener("likedDishesChanged", handleLikedDishesChange);

// Footer Linking by Navuuu

menuFbtn.addEventListener("click", function () {
  main.style.display = "none";
  menuNaima.style.display = "block";
  homeBtn.classList.remove("active-link");
  menuFbtn.classList.add("active-link");
});

homeBtn.addEventListener("click", function () {
  menuNaima.style.display = "none";
  main.style.display = "block";
  menuFbtn.classList.remove("active-link");
  homeBtn.classList.add("active-link");
});

const orderFbtn = document.querySelector("#order-footer-btn");

orderFbtn.addEventListener("click", function () {
  menuNaima.style.display = "none";
  main.style.display = "block";
  menuFbtn.classList.remove("active-link");
  homeBtn.classList.add("active-link");
});