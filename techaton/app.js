import typeWriter from "./utils/typeWriter.js";
import animateHover from "./utils/menuHover.js";
import handleMenu from "./utils/menu.js";
import setFooterDate from "./utils/footer.js";

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
        setFooterDate(); // set current year in footer
    }

}

new App();