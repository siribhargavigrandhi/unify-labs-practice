let posts = JSON.parse(localStorage.getItem("posts")) || [];

function saveToStorage() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts() {
  const container = document.getElementById("postContainer");
  container.innerHTML = "";

  posts.forEach(post => {
    container.innerHTML += `
      <div class="card">
        <h3 onclick="viewPost(${post.id})">${post.title}</h3>
        <p><strong>${post.category}</strong></p>
        <div class="actions">
          <button onclick="editPost(${post.id})">Edit</button>
          <button onclick="deletePost(${post.id})">Delete</button>
        </div>
      </div>
    `;
  });
}

function savePost() {
  const id = document.getElementById("postId").value;
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const content = document.getElementById("content").value;

  if (!title || !category || !content) {
    alert("All fields required!");
    return;
  }

  if (id) {
    posts = posts.map(p =>
      p.id == id ? { id: Number(id), title, category, content } : p
    );
  } else {
    posts.push({
      id: Date.now(),
      title,
      category,
      content
    });
  }

  saveToStorage();
  clearForm();
  renderPosts();
}

function editPost(id) {
  const post = posts.find(p => p.id === id);
  document.getElementById("postId").value = post.id;
  document.getElementById("title").value = post.title;
  document.getElementById("category").value = post.category;
  document.getElementById("content").value = post.content;
}

function deletePost(id) {
  posts = posts.filter(p => p.id !== id);
  saveToStorage();
  renderPosts();
}

function viewPost(id) {
  const post = posts.find(p => p.id === id);

  document.getElementById("viewTitle").innerText = post.title;
  document.getElementById("viewCategory").innerText = post.category;
  document.getElementById("viewContent").innerText = post.content;

  document.querySelector(".grid").classList.add("hidden");
  document.querySelector(".editor").classList.add("hidden");
  document.getElementById("singleView").classList.remove("hidden");
}

function closePost() {
  document.getElementById("singleView").classList.add("hidden");
  document.querySelector(".grid").classList.remove("hidden");
  document.querySelector(".editor").classList.remove("hidden");
}

function clearForm() {
  document.getElementById("postId").value = "";
  document.getElementById("title").value = "";
  document.getElementById("category").value = "";
  document.getElementById("content").value = "";
}

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

renderPosts();