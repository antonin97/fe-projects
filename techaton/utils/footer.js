export default function setFooterDate() {
    const currentYear = new Date().getFullYear();
    document.querySelector(".footer-year").innerText =
        "2025" + (currentYear > 2025 ? ` - ${currentYear}` : "");
}
