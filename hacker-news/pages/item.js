const base = "https://node-hnapi.herokuapp.com";
const root = document.querySelector("#content-container");

import Article from "../components/Article.js";
import Comment from "../components/Comment.js";
import store from "../store.js";
import { getIsFavorite } from "../utils.js";

export default async function itemFunc(id) {
    const response = await fetch(`${base}/item/${id}`);
    const item = await response.json();

    const articleHTML = Article({ ...item, isFavorite: getIsFavorite(item.id) });
    const divider = `<hr>`;
    const articles = item.comments.map(comment => Comment(comment)).join("");

    root.innerHTML = articleHTML + divider + articles;

    const favoriteButtons = document.querySelectorAll(".favorite");

    favoriteButtons.forEach((button) => {
        button.addEventListener("click", async function () {
            const article = JSON.parse(decodeURIComponent(button.dataset.item));
            store.dispatch({
                type: article.isFavorite ? "REMOVE" : "ADD",
                payload: { ...article, isFavorite: !article.isFavorite },
            });
            await itemFunc(id);
        });
    });
}
