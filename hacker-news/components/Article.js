export default function Article(data, index) {
    return `
    <div class="article" data-id=${data.id}>
        <div class="article-info">
            ${index !== undefined ? `<span>${index + 1}.</span>` : ""}
            ▲
        </div>
        <div class="article-desc-container">
            <div class="inline">
                <h3>${data.title}</h3>
                ${
                    data.domain
                        ? `<a class="external-link" href=${data.url}>(${data.domain})</a>`
                        : ""
                }
            </div>
            <div class="inline">
                <p>${data.points} points by ${data.user} ${data.time_ago}</p>
                |
                <p class="comment-button" data-id=${data.id}>${
        data.comments_count
    } ${data.comments_count === 1 ? "comment" : "comments"}</p>
                |
                <p class="favorite" data-item='${JSON.stringify(data)}'>${
        data.isFavorite ? "Remove from favorites" : "Add to favorites"
    }</p>
            </div>
        </div>
    </div>    
        `;
}
