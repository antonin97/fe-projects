import handleClipboardIcons from "../utils/clipboard.js";

export default function article() {
    document.querySelector("#page-contents").innerHTML = `
            <article class="current-article-container">
                <div class="current-article-hero">
                    <h2 class="current-article-title">
                        The Best way to write CSS
                    </h2>
                    <img
                        class="current-article-img"
                        src="./images/test-img.jpg"
                        alt="Hero image"
                    />
                </div>

                <div class="current-article-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam maiores rerum laudantium architecto eius voluptas
                        ab minima perferendis dolore repudiandae facere odio
                        maxime cupiditate rem, velit vero voluptatem magnam ad!
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sed dolor enim harum. Minus labore sunt in
                        expedita sint esse eum, exercitationem corporis rerum
                        eligendi, aut reprehenderit, corrupti ducimus neque
                        possimus!
                    </p>
                    <h3>Some smaller Header</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At praesentium voluptatibus libero ut quas
                        assumenda ducimus, iure sapiente culpa rerum laudantium
                        omnis accusamus sequi debitis distinctio, error pariatur
                        aut velit? Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Porro quos eum ut vero necessitatibus
                        iure ea neque, consequatur fuga provident numquam ipsam
                        optio debitis, excepturi molestiae quidem sequi odit
                        repellendus. Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Dicta dignissimos nostrum quam officia
                        minima sint nesciunt ipsa, sit consequuntur autem
                        aliquam excepturi quae voluptatibus a est repellendus
                        vel facere eligendi?
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nesciunt quo, possimus sed reprehenderit harum a
                        libero expedita veniam! Repellat ducimus beatae alias
                        nihil perspiciatis sequi blanditiis et itaque
                        necessitatibus quod!
                    </p>
                    <pre><code class="language-javascript">// Your code here
console.log("Hello, World!");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}</code><i class="fa-solid fa-clipboard clipboard-icon"></i></pre>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, enim? Magnam dicta mollitia inventore iste, ad id culpa exercitationem nemo harum fuga in expedita maxime eligendi, maiores laborum? Rem, repellat.</p>
                <h3>Another Title</h3>


                <pre><code class="language-javascript">// Your code here
console.log("Hello, World!");
for (let i = 0; i <= 10; i++) {
    console.log(0);
}</code><i class="fa-solid fa-clipboard clipboard-icon"></i></pre>
                </div>

                
            </article>
`;

handleClipboardIcons(); // clipboard copy effect for code snippets
Prism.highlightAll();
}
