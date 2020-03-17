import { fetchData } from "./data.js";

const rootUrl = "https://blog-apps-c12bf.firebaseio.com/";
const makeUrl = x => `${rootUrl}${x}/.json`;

const getPosts = () => fetchData(undefined, undefined, makeUrl("posts"));
const getPost = id => fetchData(undefined, undefined, makeUrl(`posts/${id}`));
const getComments = () => fetchData(undefined, undefined, makeUrl("comments"));

function displayPosts(posts) {
  let fragment = document.createDocumentFragment();
  Object.keys(posts).forEach(x => {
    let option = document.createElement("option");
    option.value = x;
    option.innerHTML = posts[x].title;
    fragment.appendChild(option);
  });
  document.getElementById("posts").appendChild(fragment);
}

//mapping the buttons, so we dont add event listeners to all of them
const actions = {
  btnLoadPosts: async () => {
    displayPosts(await getPosts());
  },
  btnViewPost: async () => {
    const post = await getPost(html.select().value);
    Object.keys(post).forEach(x => {
      if (typeof html[x] === "function") {
        html[x]().innerHTML = post[x];
      }
    });
  }
};

//getting all the html elements we need, this way out knowledge of the html elements is encapsulated in one place
// when the code grows, we can easily add more getters inside of this object
const html = {
  select: () => document.getElementById("posts"),
  title: () => document.getElementById("post-title"),
  body: () => document.getElementById("post-body"),
  comments: () => document.getElementById("post-comments")
};

function handleEvent(e) {
  if (typeof actions[e.target.id] === "function") {
    actions[e.target.id]();
  }
}

function attachEvents() {
  document.addEventListener("click", handleEvent);
}

attachEvents();
