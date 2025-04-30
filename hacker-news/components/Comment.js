export default function Comment(data) {
    return `
    <div class="comment" data-id=${data.id} style="--depth: ${data.level}">
        <div class="comment-description">
            <div class="comment-info inline">
                ▲
                <p>${data.user}</p>
                <p>${data.time_ago}</p>
            </div>
        </div>
        <div class="comment-content">
            ${data.content}
        </div>
        ${data.comments.map((comment) => Comment(comment)).join("")}
    </div>    
        `;
}
