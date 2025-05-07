export default function handleMenu() {

    const $burgerButton = document.querySelector(".burger-menu");
    const $closeButton = document.querySelector(".close-menu");
    const $menu = document.querySelector(".full-screen-menu");


    window.addEventListener("resize", () => {
        if (window.innerWidth > 950) {
            closeMenu();
        }
    });

    $burgerButton.addEventListener("click", (e) => {
        openMenu();
    });

    $closeButton.addEventListener("click", (e) => {
        closeMenu();
    });

    function openMenu() {
        $menu.classList.add("full-screen-menu-opened");
    }

    function closeMenu() {
        $menu.classList.remove("full-screen-menu-opened");
    }
}