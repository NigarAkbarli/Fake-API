let mainDiv = document.querySelector('.comments');
fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=15')
    .then(response => response.json())
    .then(data => data.forEach(user => {
        let div = 
        `<div class="user-data">
        <p class="post-id">PostID:${user.postId}</p>
        <p class="user-name">Name:${user.name}</p>
        <p class="user-email">Email:${user.email}</p>
        <p class="body">Body:${user.body}</p>
        </div>
        `
        mainDiv.innerHTML += div;
    }))