// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


const toggleButton = document.getElementById("toggle");
// Function to apply the theme mode
function applyTheme(mode) {
  document.body.className = mode;
}

// Function to toggle the theme and save the mode to local storage
function toggleTheme() {
  const currentMode = document.body.classList.contains("dark") ? "dark" : "light";
  const newMode = currentMode === "dark" ? "light" : "dark";
  
  applyTheme(newMode);
  localStorage.setItem("themeMode", newMode);
}

// Check saved mode on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("themeMode") || "light";
  applyTheme(savedMode);

  // Attach the event listener for toggling
  toggleButton.addEventListener("click", toggleTheme);
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(key, newObject) {
  // Read existing data
  const existingData = readLocalStorage(key);

  // Add the new object to the existing data
  existingData.push(newObject);

  // Save updated data back to local storage
  localStorage.setItem(key, JSON.stringify(existingData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

