export default function typeWriter() {


    const title = document.querySelector("h1");
    const cursor = document.querySelector(".cursor");


    const text = "techaton";

    const times = Array.from(
        { length: text.length },
        () => Math.floor(Math.random() * 350) + 100
    );

    const timesSum = times.reduce((acc, val) => acc + val, 0);

    function addLetter(i) {
        const letter = text.charAt(i);
        title.textContent = text.substring(0, i + 1);
    }

    for (let i = 0; i < text.length; i++) {
        setTimeout(
            addLetter,
            times.slice(0, i).reduce((acc, val) => acc + val, 0),
            i
        );
    }

    setTimeout(() => {
        const blinkAnim = cursor.animate(
            [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }],
            { duration: 700, iterations: 3 }
        );

        // When blink finishes, start squish
        blinkAnim.onfinish = () => {
            const squishAnim = cursor.animate(
                [
                    { transform: "scaleY(1)", opacity: 1 },
                    { transform: "scaleY(0)", opacity: 0 },
                ],
                { duration: 300, fill: "forwards" }
            );
        };
    }, timesSum);
}

