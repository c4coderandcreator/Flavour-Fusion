/*====================Landing Page and Navbar Code by Navuuu====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    console.log({toggleId, navId});
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
            const body = document.body;
            if (nav.classList.contains('show-menu')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'visible';
            }
            // body.classList.toggle('hide-overflow');
            // document.body.style.overflowY = 'hidden';
        })
    }
}
showMenu('nav-toggle','nav-menu')
const navLink = document.querySelectorAll('.nav__link');
console.log(navLink);
function linkAction(){
    console.log("linkAction called")
    const navMenu = document.getElementById('nav-menu')
    console.log("linkAction called: ", navMenu);
    navMenu.classList.remove('show-menu');
    document.body.style.overflow = 'visible';
}
navLink.forEach(n => n.addEventListener('click', linkAction))
const sections = document.querySelectorAll('section[id]')


/*==================== Scroll Top ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

