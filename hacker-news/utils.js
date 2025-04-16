import store from "./store.js";

function getIsFavorite(id) {
    const favorites = store.getState();
    return favorites.some((item) => item.id === id);
}

export { getIsFavorite };
