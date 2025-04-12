import typeWriter from "./utils/typeWriter.js";
import animateHover from "./utils/menuHover.js";
const burgerButton = document.querySelector(".burger-menu")
const closeButton = document.querySelector(".close-menu");
const menu = document.querySelector(".full-screen-menu");

window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
        const menu = document.querySelector(".full-screen-menu");
        menu.classList.remove("full-screen-menu-opened");
    }
});

burgerButton.addEventListener("click", (e) => {
    openMenu();
})

closeButton.addEventListener("click", (e) => {
    closeMenu();
});

function openMenu() {
    menu.classList.add("full-screen-menu-opened");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    menu.classList.remove("full-screen-menu-opened");
}

// animation functions
typeWriter()
animateHover()


















