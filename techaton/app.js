import typeWriter from "./utils/typeWriter.js";
import animateHover from "./utils/menuHover.js";
const burgerButton = document.querySelector(".burger-menu")
const closeButton = document.querySelector(".close-menu");
const menu = document.querySelector(".full-screen-menu");

window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
        closeMenu();
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
    document.body.style.overflow = "visible";
}

document.querySelectorAll(".topic-icon").forEach((el) => {
    el.addEventListener("click", () => {
        const target = document.querySelector("#topics");
        if (target) {
             const offset = -20; // Adjust this value as needed (negative = scroll above)
             const top =
                 target.getBoundingClientRect().top + window.scrollY + offset;

             window.scrollTo({
                 top: top,
                 behavior: "smooth",
             });
        }
    });
});

// animation functions
typeWriter()
animateHover()


















