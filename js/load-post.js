// Load the first post by default
fetch('blog/first-post.md')
  .then(response => response.text())
  .then(markdown => {
    const html = marked.parse(markdown);
    document.getElementById('post-container').innerHTML = html;
  })
  .catch(error => {
    console.error("Error loading blog post:", error);
    document.getElementById('post-container').innerHTML = "<p>Couldn't load the post.</p>";
  });
