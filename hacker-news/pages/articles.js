const base = "https://node-hnapi.herokuapp.com";
const root = document.querySelector("#content-container");
import Article from "../components/Article.js";




export default async function articles() {
    
    const response = await fetch(`${base}/news`)
    const articles = await response.json();

    root.innerHTML = articles.map((article, index) => Article(article, index)).join("");
}