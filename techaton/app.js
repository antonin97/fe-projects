import typeWriter from "./utils/typeWriter.js";
import animateHover from "./utils/menuHover.js";
import handleMenu from "./utils/menu.js";

const currentYear = new Date().getFullYear();
document.querySelector(".footer-year").innerText =
    "2025" + (currentYear > 2025 ? ` - ${currentYear}` : "");


import Router from "./router.js";
class App {
    constructor() {
        this.init()
        new Router();
    }

    init() {
        typeWriter(); // techaton logo typewriter effect
        animateHover(); // navbar hover effect
        handleMenu(); // burger menu open/close/close on resize effect
    }

}

new App();