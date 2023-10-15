/* ------------ MenuPage By Naima -------------*/
// Page hide and show
const homeBtn = document.querySelector("#home-btn"),
      menuBtn = document.querySelector("#menu-btn"),
      menuFbtn = document.querySelector("#menu-footer-btn"),
      main = document.querySelector(".l-main"),
      menuNaima = document.querySelector(".menu-naima");

menuBtn.addEventListener("click", function(){
    main.style.display="none";
    menuNaima.style.display="block";
    homeBtn.classList.remove("active-link");
    menuBtn.classList.add("active-link");
})

homeBtn.addEventListener("click", function(){
    menuNaima.style.display="none";
    main.style.display="block";
    menuBtn.classList.remove("active-link");
    homeBtn.classList.add("active-link");
})


// Summer Sale
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Menu Buttons
const menuButtons = document.querySelectorAll(".menu-btn");
const menuSlides = document.querySelectorAll(".m-items-slide");

menuButtons.forEach(button => {
    button.addEventListener("click", function() {
        menuButtons.forEach(btn => btn.classList.remove('menu-clicked-btn'));
        button.classList.add('menu-clicked-btn');

        const targetSlideId = button.getAttribute("data-target");
        menuSlides.forEach(slide => slide.style.display = "none");
        
        const targetSlide = document.querySelector(`.${targetSlideId}`);
        if (targetSlide) {
            targetSlide.style.display = "block";
        }
    });
});

// Dropdown Menu
const dropdown = document.querySelector('.dropdown'),
      select = dropdown.querySelector('.select'),
      caret = dropdown.querySelector('.caret'),
      menu_dd = dropdown.querySelector('.menu-dd'),
      options = dropdown.querySelectorAll('.menu-dd li'),
      selected = dropdown.querySelector('.selected');

select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu_dd.classList.toggle('menu-open');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu_dd.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active-menu');
        });
        option.classList.add('active-menu');

        const slideId = option.getAttribute('data-target');
        const slides = document.querySelectorAll('.m-items-slide');
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        const selectedSlide = document.querySelector(`.${slideId}`);
        if (selectedSlide) {
            selectedSlide.style.display = 'block';
        }
    });
});


// Footer Linking by Navuuu

menuFbtn.addEventListener("click", function(){
    main.style.display="none";
    menuNaima.style.display="block";
    homeBtn.classList.remove("active-link");
    menuFbtn.classList.add("active-link");
})

homeBtn.addEventListener("click", function(){
    menuNaima.style.display="none";
    main.style.display="block";
    menuFbtn.classList.remove("active-link");
    homeBtn.classList.add("active-link");
})

const orderFbtn = document.querySelector("#order-footer-btn")

orderFbtn.addEventListener("click", function(){
    menuNaima.style.display="none";
    main.style.display="block";
    menuFbtn.classList.remove("active-link");
    homeBtn.classList.add("active-link");
})