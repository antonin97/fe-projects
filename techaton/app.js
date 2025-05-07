import typeWriter from "./utils/typeWriter.js";
import animateHover from "./utils/menuHover.js";
import handleMenu from "./utils/menu.js";
import handleClipboardIcons from "./utils/clipboard.js";
import handleTopics from "./utils/topics.js";

import main from "./pages/main.js";

const currentYear = new Date().getFullYear();
document.querySelector(".footer-year").innerText =
    "2025" + (currentYear > 2025 ? ` - ${currentYear}` : "");


handleClipboardIcons(); // clipboard copy effect for code snippets
handleTopics(); // topics click effect

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