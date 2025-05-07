export default function handleClipboardIcons() {
    let clipboardTimeoutId = null;

    document.querySelectorAll(".clipboard-icon").forEach((element) =>
        element.addEventListener("click", (e) => {
            const clipboardIcon = e.currentTarget;
            const codeBlock = clipboardIcon.parentElement.querySelector(
                "code.language-javascript"
            );
            const code = codeBlock.innerText;
            clearTimeout(clipboardTimeoutId);
            const codeBlockContainer = clipboardIcon.closest(
                "pre.language-javascript"
            );
            codeBlockContainer.classList.add("clicked");
            clipboardTimeoutId = setTimeout(() => {
                codeBlockContainer.classList.remove("clicked");
            }, 1100);
            navigator.clipboard.writeText(code).catch((err) => {
                console.error("Error copying text: ", err);
            });
        })
    );
}
