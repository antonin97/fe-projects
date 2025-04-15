import articles from './pages/articles.js';


export default class HashRouter {
    constructor() {
        this.routes = {
            "/": () => articles(),
            "/new": () => articles(),
            "/ask": () => console.log("Ask route"),
            "/show": () => console.log("Show route"),
            "/favorites": () => console.log("Favorites route"),
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
        if (route) {
        route();
        } else {
        console.error(`No route found for ${this.currentPath}`);
        }
    }

}