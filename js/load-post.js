const posts = [
  { file: 'blog/first-post.md', title: 'Tech Noob' },
  // { file: 'second-post.md', title: 'My Coding Journey' },
  // { file: 'third-post.md', title: 'Why I Love JavaScript' }
];

const container = document.getElementById('post-container');

posts.forEach(post => {
  fetch(`blog/${post.file}`)
    .then(response => response.text())
    .then(markdown => {
      const html = marked.parse(markdown);
      const postDiv = document.createElement('div');
      postDiv.classList.add('blog-post');
      postDiv.innerHTML = `
        <h2>${post.title}</h2>
        ${html}
        <hr />
      `;
      container.appendChild(postDiv);
    })
    .catch(error => {
      console.error("Error loading blog post:", error);
      const errorDiv = document.createElement('div');
      errorDiv.innerHTML = `<p>Couldn't load ${post.title}.</p>`;
      container.appendChild(errorDiv);
    });
});
