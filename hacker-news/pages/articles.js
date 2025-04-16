const base = "https://node-hnapi.herokuapp.com";
const root = document.querySelector("#content-container");

import Article from "../components/Article.js";
import store from "../store.js";
import { getIsFavorite } from "../utils.js";

export default async function articlesFunc(path) {
    const response = await fetch(`${base}${path}`);
    const articles = await response.json();

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
        button.addEventListener("click", async function() {
            const article = JSON.parse(decodeURIComponent(button.dataset.item));
            store.dispatch({
                type: article.isFavorite ? "REMOVE" : "ADD",
                payload: {...article, isFavorite: !article.isFavorite},
            });
            await articlesFunc(path);
        });
        
    });
}
