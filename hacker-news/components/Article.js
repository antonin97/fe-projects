export default function Article(data, index) {
    return `
    <div class="article">
        <div class="article-info">
            <span>${index + 1}.</span>
            ▲
        </div>
        <div class="article-desc-container">
            <div class="inline">
                <h3>${data.title}</h3>
                <a class="external-link" href=${data.url}>(${data.domain})</a>
            </div>
            <div class="inline">
                <p>${data.points} points by ${data.user} ${data.time_ago}</p>
                |
                <p>${data.comments_count} ${data.comments_count === 1 ? "comment" : "comments"}</p>
                |
                <p>Add to favorites</p>
            </div>
        </div>
    </div>    
        `;
}
