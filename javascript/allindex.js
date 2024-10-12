const targetDiv = document.getElementById("allaboutus");
const about = document.getElementById("allab");
const aboutf = document.querySelector("#aboutFbtn");
const alhome = document.getElementById("home-btn");
const flavorBtn = document.getElementById("flavor-fusion-btn");
const homeFbtn = document.querySelector("#homeFbtn");
const targetItem = document.querySelector(".l-main");
const targetFoot = document.querySelector(".footer");
const targetMenu = document.querySelector(".menu-naima");
const targetMenu2 = document.getElementById("menu-btn");
const targetOrder = document.querySelector(".order-landing");
const targetOrder2 = document.getElementById("aboutLink");
const orderHistory = document.querySelector(".ahead");
const anorderlink = document.querySelector(".anorderlink");
const homelink = document.querySelector(".home");
const homelink2 = document.querySelector(".food-fact");
const mediaQuery = window.matchMedia("(max-width: 868px)");
const menuF = document.getElementById("menu-footer-btn");
const orderbtnf = document.querySelector("#order-footer-btn");

about.onclick = function () {
  targetDiv.style.display = "block";
};

about.onclick = function () {
  targetItem.style.display = "none";
  targetFoot.style.display = "block";
  targetMenu.style.display = "none";
  targetDiv.style.display = "block";
  orderHistory.style.display = "none";
  sessionStorage.setItem("currentSection", "about");
};

flavorBtn.onclick = function () {
  alhome.click();
};

alhome.onclick = function () {
  targetDiv.style.display = "none";
  targetFoot.style.display = "block";
  orderHistory.style.display = "none";
  homelink.style.display = "block";
  homelink2.style.display = "block";
};

targetMenu2.onclick = function () {
  targetDiv.style.display = "none";
  targetFoot.style.display = "block";
  orderHistory.style.display = "none";
};

targetOrder2.onclick = function () {
  targetOrder.style.display = "block";
  targetItem.style.display = "block";
  targetMenu.style.display = "none";
  targetDiv.style.display = "none";
  orderHistory.style.display = "none";
};

anorderlink.onclick = function () {
  orderHistory.style.display = "block";
  targetItem.style.display = "none";
};

if (mediaQuery.matches) {
  orderHistory.style.marginTop = "15%";
} else {
  orderHistory.style.marginTop = "10%";
}

aboutf.onclick = function () {
  targetDiv.style.display = "block";
};

aboutf.onclick = function () {
  targetItem.style.display = "none";
  targetFoot.style.display = "block";
  targetMenu.style.display = "none";
  targetDiv.style.display = "block";
  orderHistory.style.display = "none";
};

homeFbtn.onclick = function () {
  targetOrder.style.display = "block";
  targetItem.style.display = "block";
  targetMenu.style.display = "none";
  targetDiv.style.display = "none";
  orderHistory.style.display = "none";
};

menuF.onclick = function () {
  targetDiv.style.display = "none";
  targetFoot.style.display = "block";
  orderHistory.style.display = "none";
};

orderbtnf.onclick = function () {
  targetDiv.style.display = "none";
  targetOrder.style.display = "block";
  targetFoot.style.display = "block";
  orderHistory.style.display = "none";
};

const newstoredSection = sessionStorage?.getItem("currentSection");
if (newstoredSection === "about") {
  targetItem.style.display = "none";
  targetFoot.style.display = "block";
  targetMenu.style.display = "none";
  targetDiv.style.display = "block";
  orderHistory.style.display = "none";
}

// jquery for review
$(document).ready(function () {
  const $carouselContainer = $(".sp-carousel");
  const $slides = $carouselContainer.find(".SP-slider");
  let currentIndex = 0;
  const slideCount = $slides.length;
  let slidesPerView = 3; // Number of reviews to display at a time
  const mediaQueryTablet = window.matchMedia("(max-width: 768px)");
  if (mediaQueryTablet.matches) {
    slidesPerView = 1; // Adjust for tablets
  }

  const autoSlideInterval = 5000; // Interval in milliseconds (e.g., 5 seconds)

  function showSlides(index) {
    $slides.hide();
    for (let i = index; i < index + slidesPerView; i++) {
      $slides.eq(i % slideCount).show();
    }
  }

  function nextSlides() {
    currentIndex = (currentIndex + slidesPerView) % slideCount;
    showSlides(currentIndex);
    activateDot(currentIndex / slidesPerView);
  }

  function prevSlides() {
    currentIndex = (currentIndex - slidesPerView + slideCount) % slideCount;
    showSlides(currentIndex);
    activateDot(currentIndex / slidesPerView);
  }

  function autoSlide() {
    nextSlides();
  }

  function createDots() {
    const dotContainer = $(".carousel-dots");
    for (let i = 0; i < slideCount; i += slidesPerView) {
      const dot = document.createElement("span");
      dot.className = "dot";
      dotContainer.append(dot);
    }
  }

  function activateDot(index) {
    $(".dot").removeClass("active");
    $(".dot").eq(index).addClass("active");
  }

  // Initialize the first set of slides and dots
  showSlides(currentIndex);
  createDots();

  // Set up auto-sliding
  const autoSlideTimer = setInterval(autoSlide, autoSlideInterval);

  // Handle dot clicks
  $(".dot").click(function () {
    clearInterval(autoSlideTimer); // Stop auto-sliding when clicking a dot
    const dotIndex = $(this).index();
    currentIndex = dotIndex * slidesPerView;
    showSlides(currentIndex);
    activateDot(dotIndex);
  });

  // Activate the first dot
  activateDot(0);
});