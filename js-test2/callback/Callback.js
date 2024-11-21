let post_url = "https://jsonplaceholder.typicode.com/posts/";
let user_url = "https://jsonplaceholder.typicode.com/users/";
let app = document.querySelector("#app");
// fetch(url)
//   .then((Response) => Response.json())
//   .then((data) => console.log(data));

async function getAuthor(url, id) {
  let response = await fetch(url + id);
  let author = await response.json();
  return author;
}

async function getArticles(url) {
  let response = await fetch(url);
  let data = await response.json();
  data.forEach(async (post) => {
    post.user = await getAuthor(user_url, post.userId);

    app.innerHTML += `
                  <article key=${post.title}>
                        <h1 class='h3'>${post.title}</h1>
                        <small class="btn btn-secondary">${post.user.name}</small>
                        <p class='mb-4'>${post.body}</p>
                  </article>
                  <hr>
            `;
  });
}

getArticles(post_url);

