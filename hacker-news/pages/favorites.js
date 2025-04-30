
const base = "https://node-hnapi.herokuapp.com";
const root = document.querySelector("#content-container");

import Article from "../components/Article.js";
import store from "../store.js";
import { getIsFavorite } from "../utils.js";

export default function favorites() {
    const articles = store.getState();

    root.innerHTML = articles
        .map((article, index) =>
            Article(
                { ...article, isFavorite: getIsFavorite(article.id) },
                index
            )
        )
        .join("");

    const commentButtons = document.querySelectorAll(".comment-button");

    commentButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const articleId = button.dataset.id;
            window.location.hash = `/item?id=${articleId}`;
        });
    });

    const favoriteButtons = document.querySelectorAll(".favorite");

    favoriteButtons.forEach((button) => {
        button.addEventListener("click", async function () {
            const article = JSON.parse(decodeURIComponent(button.dataset.item));
            store.dispatch({
                type: article.isFavorite ? "REMOVE" : "ADD",
                payload: { ...article, isFavorite: !article.isFavorite },
            });
            favorites();
        });
    });
}
