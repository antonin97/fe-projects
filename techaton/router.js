import main from "./pages/main.js";
import article from "./pages/article.js";

export default class HashRouter {
    constructor() {

        this.routes = {
            "/": () => main(),
            "/about": () => main(),
            "/contact": () => main(),
            "/article": (articleId) => article(articleId),
        };

        this.init();
    }

    init() {
        window.addEventListener("hashchange", () => {
            this.handleRouteChange();
        });
        this.handleRouteChange();
    }

    handleRouteChange() {
        const hash = window.location.hash.slice(1);
        this.currentPath = hash || "/";
        const route = this.routes[this.currentPath];
        if (this.currentPath.startsWith("/item?id=")) {
            let articleId = this.currentPath.split("?id=")[1];
            const itemRoute = this.routes["/item"];
            itemRoute(articleId);
        } else if (route) {
            route();
        } else {
            console.error(`No route found for ${this.currentPath}`);
        }
    }
}
