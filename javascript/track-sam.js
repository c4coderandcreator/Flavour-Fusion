const trackReveal=document.getElementById('reveal-track-section');
const trackSection=document.getElementById('track-container-sam');
const closeTrack=document.getElementById('close-track-section');

trackReveal.addEventListener('click',()=>{
    trackSection.classList.add('active-sam');
    removeContent();
});

closeTrack.addEventListener('click',()=>{
    trackSection.classList.remove('active-sam');
    revealContent();
});


function removeSamSection(){
    trackSection.classList.remove('active-sam');
    content.classList.remove("active-sam");
    revealContent();
}
document.getElementById("menu-btn").addEventListener("click", () => {
    removeSamSection();
    });
document.getElementById("home-btn").addEventListener("click", () => {
    removeSamSection();
    });
document.getElementById("allab").addEventListener("click", () => {
    removeSamSection();
    });
document.getElementById("aboutLink").addEventListener("click", () => {
    removeSamSection();
    });
document.getElementById("sign-in-btn").addEventListener("click", () => {
    removeSamSection();
    });

   
