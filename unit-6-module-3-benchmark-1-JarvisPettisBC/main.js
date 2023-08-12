// --------------- DO NOT TOUCH ---------------
const userSelect = document.querySelector("#user-select");
const authorHeader = document.querySelector("#author-header");
const postsContainer = document.querySelector("#posts");

function populateUserSelect(users) {
  for (const user of users) {
    const newOption = document.createElement("option");
    newOption.value = user.id;
    newOption.textContent = user.username;
    newOption.dataset.userJson = JSON.stringify(user);
    userSelect.append(newOption);
  }
}

function populateAuthorHeader(user) {
  authorHeader.innerHTML = `
  <h1>${user.first_name} ${user.last_name}</h1>
  <p><small>${user.username}</small></p>
  `;
}

function populateBlogPosts(posts) {
  postsContainer.innerHTML = "";
  for (const post of posts) {
    const paragraphs = post.post
      .split("\n\n")
      .map((p) => `<p>${p}</p>`)
      .join("");
    postsContainer.insertAdjacentHTML(
      "beforeend",
      `
    <article>
      <h2>${post.title}</h2>
      ${paragraphs}
    </article>
    `
    );
  }
}

function getCurrentlySelectedUser() {
  const selectedOption = userSelect.selectedOptions[0];
  return JSON.parse(selectedOption.dataset.userJson);
}

// --------------- PUT YOUR SOLUTION BELOW ---------------

const fetchAPI = async function(){
  const response = await fetch('fake_api/users.json')
  const data = await response.json()
  console.log(data);
  populateUserSelect(data)
  userSelect.addEventListener('click', function(){
    const current = getCurrentlySelectedUser()
    populateAuthorHeader(current)
    const blogs = fetch(`fake_api/users/${current.id}/posts.json`).then((edit) =>{
      return edit.json()}).then((changed) => {
        populateBlogPosts(changed)
      })

  })

}
fetchAPI()
