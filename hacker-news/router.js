import articles from './pages/articles.js';
import item from './pages/item.js';
import favorites from './pages/favorites.js';


export default class HashRouter {
    constructor() {
        this.routes = {
            "/": () => articles("/news"),
            "/new": () => articles("/newest"),
            "/ask": () => articles("/ask"),
            "/show": () => articles("/show"),
            "/item": (itemObj) => item(itemObj),
            "/favorites": () => favorites(),
        };
        this.init();
    }
    
    init() {
        window.addEventListener('hashchange', () => {
        this.handleRouteChange();
        });
        this.handleRouteChange();
    }
    
    handleRouteChange() {
        const hash = window.location.hash.slice(1);
        this.currentPath = hash || '/';
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