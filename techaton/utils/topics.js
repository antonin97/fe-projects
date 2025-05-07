export default function handleTopics() {
    document.querySelectorAll(".topic-icon").forEach((el) => {
        el.addEventListener("click", () => {
            const target = document.querySelector("#topics");
            if (target) {
                const offset = -20; // Adjust this value as needed (negative = scroll above)
                const top =
                    target.getBoundingClientRect().top +
                    window.scrollY +
                    offset;

                window.scrollTo({
                    top: top,
                    behavior: "smooth",
                });
            }
        });
    });
}