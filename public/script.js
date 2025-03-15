const pages = [
  "Treasure-hunt",
  "Biryani-Run",
  "Corporate-Jargon",
  "DSA-World",
  "Pacwoman",
  "Battletrains",
  "Dont-pop-the-duckie",
  "Othello",
  "Squid-game",
  "Quackalogue",
];

// Get current page name (handles query parameters too)
let currentPage = window.location.pathname.split("/").pop().split("?")[0];
// Find current page index
let currentIndex = pages.indexOf(currentPage);
// Load progress from localStorage
// let savedIndex = parseInt(localStorage.getItem("progress"));
// if (!isNaN(savedIndex) && savedIndex > currentIndex) {
//   currentIndex = savedIndex; // Use saved progress if it's ahead
// }

// Function to update the progress bar
function updateProgressBar() {
  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    let progress = ((currentIndex + 1) / pages.length) * 100;
    progressBar.style.height = progress + "%";
  }
}

// Navigate to the next page
function goToNextPage() {
  if (currentIndex < pages.length - 1) {
    localStorage.setItem("progress", currentIndex + 1);
    window.location.href = "/" + pages[currentIndex + 1];
  }
}

//navigate to previous page
function goToPrevPage() {
  if (currentIndex > 0) {
    localStorage.setItem("progress", currentIndex - 1);
    window.location.href = "/" + pages[currentIndex - 1];
  }
}

//navigate to next page
function navigateTo(page) {
  console.log("Navigating to:", page);
  window.open("/" + page, '_blank');
}

function closeMenu() {
  // If the menu was opened in a new tab or window, close it
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.close();
  }
}
//adding logs
console.log("Current pathname:", window.location.pathname);
console.log("Extracted page name:", window.location.pathname.split("/").pop().split("?")[0]);
// Ensure progress bar updates when the page loads
document.addEventListener("DOMContentLoaded", updateProgressBar);

// Attach event listeners to arrow buttons
document.querySelector(".right-arrow")?.addEventListener("click", goToNextPage);
document.querySelector(".left-arrow")?.addEventListener("click", goToPrevPage);
