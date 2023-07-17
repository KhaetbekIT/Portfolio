const nav = document.querySelector(".nav-icon");
const overlay = document.querySelector("#overlay");
const body = document.body;


nav.addEventListener("click", function() {
    nav.classList.toggle("nav-icon--active");
    overlay.classList.toggle("overlay");
    body.classList.toggle("noscroll");
    this.querySelector(".nav-icon__wrapper").classList.toggle("nav-icon__wrapper--active");

});

window.addEventListener("resize", function() {
    nav.classList.remove("nav-icon--active");
    overlay.classList.remove("overlay");
    body.classList.remove("noscroll");
    nav.querySelector(".nav-icon__wrapper").classList.remove("nav-icon__wrapper--active");

});
$(document).ready(() => {
    let containerElement = document.querySelector("#mix-cards");
    let mixer = mixitup(containerElement)
})