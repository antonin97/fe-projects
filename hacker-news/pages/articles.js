const base = "https://node-hnapi.herokuapp.com";
const root = document.querySelector("#content-container");
import Article from "../components/Article.js";




export default async function articles(path) {
    
    const response = await fetch(`${base}${path}`)
    const articles = await response.json();

    root.innerHTML = articles.map((article, index) => Article(article, index)).join("");

    const commentButtons = document.querySelectorAll(".comment-button");

    commentButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const articleId = button.dataset.id;
            window.location.hash = `/item?id=${articleId}`;
            
        });
    });
}