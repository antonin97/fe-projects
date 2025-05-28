import handleTopics from "../utils/topics.js";
import articles from "../data/articles.js";


let allArticles = [...articles]
const mainArticle = allArticles.shift();

// getting first 15 words for the short description
function getDesc(text) {
    return text.split(" ").slice(0, 15).join(" ") + "...";
}

// fetching the first article as the main article
const mainArticleHTML = `
    <a class="article-link" href="#/article?id=${mainArticle.id}">
        <article class="main-article">
            <img class="main-article-img" src="${
                mainArticle.heroImg
                }" alt="${mainArticle.heroImgAlt}"/>
            <h2 class="main-article-title">${mainArticle.title}</h2>
            <p class="main-article-desc">
                ${getDesc(mainArticle.content[0].text)}
             </p>
         </article>
    </a>`;


// topics bar
const chooseTopics = `
<section id="topics"class="topic-choose">
                <h3 class="topic-title">Topics</h3>
                <div class="topics-container">
                    <img
                        class="topic-icon"
                        src="images/Math-logo.svg"
                        id="math"
                    />
                    <img
                        class="topic-icon"
                        src="images/CSS-logo.svg"
                        id="css"
                    />
                    <img class="topic-icon" src="images/AI-logo.svg" id="ai" />
                    <img
                        class="topic-icon"
                        src="images/Stats-logo.svg"
                        id="statistics"
                    />
                </div>
            </section>
`;

// lists for iteration process
let articlesByYear = [];
let currentYearArticles = [];

// year of the latest published article
let currentListYear = new Date(Number(allArticles[0].timestamp)).getFullYear();

// iterating, creating array of arrays
//[[2025 articles], [2024 articles], ...]
for (let element of allArticles) {
    let currentIterationYear = new Date(
        Number(element.timestamp)
    ).getFullYear();
    if (currentIterationYear !== currentListYear) {
        articlesByYear.push(currentYearArticles);
        currentYearArticles = [element];
        currentListYear = currentIterationYear;
    } else {
        currentYearArticles.push(element);
    }
} 
articlesByYear.push(currentYearArticles);


// mapping over the array and creating articles inside wrappers
let articlesByYearHTML = articlesByYear
    .map((year) => {
        return `<div class="article-grid-wrapper">
        ${year
            .map((article) => {
                return `
            <a class="article-link" href="#/article?id=${article.id}">
            <article class="article">
                        <img class="article-img" src="${
                            article.heroImg
                        }" alt="${article.heroImgAlt}" />
                        <h2 class="article-title">${article.title}</h2>
                        <p class="article-desc">
                            ${getDesc(article.content[0].text)}
                        </p>
                    </article>
            </a>
            `;
            })
            .join("")}
    </div>`;
    });




// coining the final HTML by adding year dividers
let articlesHTML = "";

let currentYear = new Date(
    Number(articlesByYear[0][0].timestamp)
).getFullYear();

for (let i = 0; i < articlesByYear.length; i++) {
    let currentListYear = new Date(Number(articlesByYear[i][0].timestamp)).getFullYear();
    if (currentListYear < currentYear) {
        articlesHTML += `
            <div class="year-divider">
                <span class="line-left"></span>
                <span class="year-divider-div">${currentListYear}</span>
                <span class="line-right"></span>
            </div>
        `;
        currentYear = currentListYear;
    }
    articlesHTML += articlesByYearHTML[i];
}



// putting it all together
export default function mainPage() {
    document.querySelector("#page-contents").innerHTML =
        mainArticleHTML +
        chooseTopics +
        articlesHTML;

    handleTopics(); // topics click effect
    
    document.querySelectorAll(".article-link").forEach((link) => {
        console.log("ADDED")
        link.addEventListener("click", function (e) {

            setTimeout(() => window.scrollTo({
                top: 0,
                behavior: "smooth"
            }), 1) // setting timeout because of Firefox bug
        });
    });
}
