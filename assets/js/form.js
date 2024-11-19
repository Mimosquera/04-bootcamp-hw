// TODO: Create a variable that selects the form element

const form = document.querySelector("form");
const errorElement = document.getElementById("error");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Grab form data
    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
  
    // Validate form data
    if (!username || !title || !content) {
      errorElement.textContent = "All fields are required.";
      errorElement.style.color = "red";
      return;
    }
  
    // Create a new blog post object
    const blogPost = { username, title, content, date: new Date().toISOString() };

    // Store form data in local storage
    storeLocalStorage("blogData", blogPost);
  
    // Redirect to the blog page
    redirectPage("blog.html");
  }

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

form.addEventListener("submit", handleFormSubmission);