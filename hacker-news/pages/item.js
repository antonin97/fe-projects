const base = "https://node-hnapi.herokuapp.com";
const root = document.querySelector("#content-container");

import Article from "../components/Article.js";
import Comment from "../components/Comment.js";

export default async function item(id) {
    const response = await fetch(`${base}/item/${id}`);
    const item = await response.json();

    const articleHTML = Article(item);
    const divider = `<hr>`;
    const articles = item.comments.map(comment => Comment(comment)).join("");

    root.innerHTML = articleHTML + divider + articles;
}
