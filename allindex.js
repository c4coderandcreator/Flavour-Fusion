

const targetDiv = document.getElementById("allaboutus");
const about = document.getElementById("allab");
const aboutf = document.querySelector("#aboutFbtn")
const alhome = document.getElementById("home-btn");
const flavorBtn = document.getElementById("flavor-fusion-btn");
const homeFbtn = document.querySelector("#homeFbtn")
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
const mediaQuery = window.matchMedia('(max-width: 868px)');
const menuF = document.getElementById("menu-footer-btn");
const orderbtnf = document.querySelector("#order-footer-btn")



    about.onclick = function () {
          targetDiv.style.display = "block";
      };

    about.onclick = function () {
            targetItem.style.display = "none";
            targetFoot.style.display = "block";
            targetMenu.style.display = "none";
            targetDiv.style.display = "block"; 
            orderHistory.style.display = "none";
          };
    flavorBtn.onclick = function () {
      alhome.click()
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
    targetOrder2.onclick = function() {
        targetOrder.style.display = "block";
        targetItem.style.display = "block";
        targetMenu.style.display = "none";
        targetDiv.style.display = "none";
        orderHistory.style.display = "none";
    };
  anorderlink.onclick = function () {
  orderHistory.style.display = "block";
  targetItem.style.display = "none";
 }
 if (mediaQuery.matches) {
  orderHistory.style.marginTop = '15%';
  
} else {
  orderHistory.style.marginTop = '10%';
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

homeFbtn.onclick = function() {
  targetOrder.style.display = "block";
  targetItem.style.display = "block";
  targetMenu.style.display = "none";
  targetDiv.style.display = "none";
  orderHistory.style.display = "none";
};

menuF.onclick = function () {
  targetDiv.style.display = "none";
  targetFoot.style.display = "block";
  orderHistory.style.display = "none";}

  orderbtnf.onclick = function () {
    targetDiv.style.display = "none";
    targetOrder.style.display = "block" 
    targetFoot.style.display = "block";
    orderHistory.style.display = "none"; }

   
    