// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.querySelector("main article");
const backButton = document.createElement("button");

backButton.id = "backButton";
backButton.textContent = "Back to Home";
document.body.appendChild(backButton);

// TODO: Create a function that builds an element and appends it to the DOM

function createAndAppendElement(parent, tag, className, content = "") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.textContent = content;
    parent.appendChild(element);
    return element;
  }

// TODO: Create a function that handles the case where there are no blog posts to display

function handleNoPosts() {
    createAndAppendElement(mainElement, "p", "no-posts", "No blog posts available.");
  }

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
    const blogData = readLocalStorage("blogData");
  
    if (blogData.length === 0) {
      handleNoPosts();
      return;
    }
  
    blogData.forEach(post => {
      const postContainer = createAndAppendElement(mainElement, "div", "blog-post");
      createAndAppendElement(postContainer, "h3", "post-title", post.title);
      createAndAppendElement(postContainer, "p", "post-author", `By: ${post.username}`);
      createAndAppendElement(postContainer, "p", "post-content", post.content);
      createAndAppendElement(
        postContainer,
        "p",
        "post-date",
        `Published on: ${new Date(post.date).toLocaleString()}`
      );
    });
  }


// TODO: Call the `renderBlogList` function

document.addEventListener("DOMContentLoaded", renderBlogList);


// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener("click", () => {
    redirectPage("index.html"); // Adjust "index.html" to your actual home page filename if needed
  });