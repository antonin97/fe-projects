export default function mainPage() {
    
    document.querySelector("#page-contents").innerHTML = `
            <a class="article-link" href="./article.html">
                <article class="main-article">
                    <img class="main-article-img" src="./images/test-img.jpg" />
                    <h2 class="main-article-title">Max size div it is good ye</h2>
                    <p class="main-article-desc">
                        What has been impossible to generations of PC builders in
                        the last decade, has been enabled to us through this amazing
                        technology...
                    </p>
                </article>
            </a>

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

            <div class="article-grid-wrapper">
                    <article class="article">
                        <img class="article-img" src="./images/test-img.jpg" />
                        <h2 class="article-title">Max size div it is good ye</h2>
                        <p class="article-desc">
                            What has been impossible to generations of PC
                            builders in the last decade, has been enabled to us
                            through this amazing technology...
                        </p>
                    </article>
                    <article class="article">
                        <img class="article-img" src="./images/test-img.jpg" />
                        <h2 class="article-title">Building custom PC</h2>
                        <p class="article-desc">
                            What has been impossible to generations of PC
                            builders in the last decade, has been enabled to us
                            through this amazing technology...
                        </p>
                    </article>
                    <article class="article">
                        <img class="article-img" src="./images/test-img.jpg" />
                        <h2 class="article-title">Building custom PC</h2>
                        <p class="article-desc">
                            What has been impossible to generations of PC
                            builders in the last decade, has been enabled to us
                            through this amazing technology...
                        </p>
                    </article>
            </div>

            <div class="year-divider">
                <span class="line-left"></span>
                <span class="year-divider-div">2024</span>
                <span class="line-right"></span>
            </div>

            <div class="article-grid-wrapper">
                <article class="article">
                    <img class="article-img" src="./images/test-img.jpg" />
                    <h2 class="article-title">Building custom PC</h2>
                    <p class="article-desc">
                        What has been impossible to generations of PC
                        builders in the last decade, has been enabled to us
                        through this amazing technology...
                    </p>
                </article>
                <article class="article">
                    <img class="article-img" src="./images/test-img.jpg" />
                    <h2 class="article-title">Building custom PC for my clients</h2>
                    <p class="article-desc">
                        What has been impossible to generations of PC
                        builders in the last decade, has been enabled to us
                        through this amazing technology...
                    </p>
                </article>
                <article class="article">
                    <img class="article-img" src="./images/test-img.jpg" />
                    <h2 class="article-title">Building custom PC</h2>
                    <p class="article-desc">
                        What has been impossible to generations of PC
                        builders in the last decade, has been enabled to us
                        through this amazing technology...
                    </p>
                </article>
                <article class="article">
                    <img class="article-img" src="./images/test-img.jpg" />
                    <h2 class="article-title">Building custom PC</h2>
                    <p class="article-desc">
                        What has been impossible to generations of PC
                        builders in the last decade, has been enabled to us
                        through this amazing technology...
                    </p>
                </article>
            </div>
`;
}
