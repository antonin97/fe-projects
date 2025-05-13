import handleClipboardIcons from "../utils/clipboard.js";
import articles from "../data/articles.js";

export default function article() {
    let article = articles[0];

    // create hero img + title
    const heroHTML = `
                    <div class="current-article-hero">
                        <h2 class="current-article-title">
                            ${article.title}
                        </h2>
                        <img
                        class="current-article-img"
                        src=${article.heroImg}
                        alt=${article.heroImgAlt}
                        />
                    </div>`;

    // generate article content
    const contentHTML = article.content.map((item) => {
            switch (item.type) {
                case "p":
                    return `<p>${item.text}</p>`;
                case "h3":
                    return `<h3>${item.text}</h3>`;
                case "hr":
                    return `<hr>`;
                case "code":
                    return `<pre><code class="language-${item.language || "javascript"}">${item.text}</code><i class="fa-solid fa-clipboard clipboard-icon"></i></pre>`;
                default:
                    return "";
            }
    }).join("");

    // insert the HTML
    document.querySelector("#page-contents").innerHTML = `
            <article class="current-article-container">
                ${heroHTML}
                <div class="current-article-content">
                    ${contentHTML}
                </div>
            </article>
`;

    handleClipboardIcons(); // clipboard copy effect for code snippets
    Prism.highlightAll(); // higligh all codesnippets with Prism.js
}
