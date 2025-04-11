const navLinks = document.querySelectorAll(".nav-item-link");
const navList = document.querySelector(".full-screen-menu");



export default async function animateHover() {
    let currentActive = null;
    let animationQueue = Promise.resolve();

    navLinks.forEach((link, index) => {
        link.addEventListener("mouseenter", (e) => {
            const currentLink = e.currentTarget;
            animationQueue = animationQueue
                .then(async () => {

                    if (currentActive && currentActive !== currentLink) {
                        await animateTransition(currentActive, currentLink);
                    } else {
                        await animateInitialState(currentLink, index);
                    }
                    currentActive = currentLink;
                })
                .catch(() => {}); // Prevent unhandled rejections
        });
    });

    navList.addEventListener("mouseleave", (e) => {
        animationQueue = animationQueue
        .then(() => {
            [...navLinks].forEach((link) => {
                const underline = link.querySelector(":scope > .underline-div");
                underline.animate([{ left: "-2%" }, { right: "-2%" }], {
                    duration: 1,
                    fill: "forwards",
                });
                underline.classList.remove("underline");
            });
            setTimeout(() => {
                currentActive = null;
            }, 0);
        });

    });
}

/* Animation Functions (unchanged) */
async function animateTransition(prevLink, currentLink) {
    const prevUnderline = prevLink.querySelector(":scope > .underline-div");
    const currentUnderline = currentLink.querySelector(
        ":scope > .underline-div"
    );

    const prevRect = prevLink.getBoundingClientRect();
    const newRect = currentLink.getBoundingClientRect();
    const direction = newRect.left > prevRect.left ? "ltr" : "rtl";

    const prevAnim = prevUnderline.animate(
        direction === "rtl"
            ? [{ right: "-2%" }, { right: "102%" }]
            : [{ left: "-2%" }, { left: "102%" }],
        { duration: 140, fill: "forwards" }
    );

    const currentAnim = currentUnderline.animate(
        direction === "rtl"
            ? [{ left: "102%" }, { left: "-2%" }]
            : [{ right: "102%" }, { right: "-2%" }],
        { duration: 140, fill: "forwards" }
    );

    await Promise.all([prevAnim.finished, currentAnim.finished]);
}

async function animateInitialState(link, indexCurrent) {
    navLinks.forEach((link, index) => {
        const underline = link.querySelector(":scope > .underline-div");
        underline.classList.add("underline");
        if (index < indexCurrent) {
            underline.animate([{ left: "-2%" }, { left: "102%" }], {
                duration: 0,
                fill: "forwards",
            });
        } else if (index > indexCurrent) {
            underline.animate([{ right: "-2%" }, { right: "102%" }], {
                duration: 0,
                fill: "forwards",
            });
        } else {
            underline.animate([{ right: "-2%", left: "-2%" }], {
                duration: 0,
                fill: "forwards",
        })
        }
    });
}
