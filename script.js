// document.querySelector('.leaderboard-button').addEventListener('click', () => { 
//     window.location.href = 'leaderdboard.html';
// });
// function updateProgressBar() {
//     const progressBars = document.querySelectorAll('.progress-bar'); 
//     if (progressBars.length === 0) {
//         console.log('No progress bars found on this page.');
//         return;
//     }
//     const totalPages = 4; 
//     let currentPage = parseInt(window.location.pathname.match(/\d+/)) || 1; 
//     const progressPercentage = (currentPage / totalPages) * 100;
//     progressBars.forEach(progressBar => {
//         progressBar.style.height = `${progressPercentage}%`;
//     });
// }
// updateProgressBar();
// document.querySelectorAll('.right-arrow').forEach(arrow => {
//     arrow.addEventListener('click', () => {
//         goToNextPage();
//         updateProgressBar(); 
//     });
// });

// document.querySelectorAll('.left-arrow').forEach(arrow => {
//     arrow.addEventListener('click', () => {
//         goToPreviousPage();
//         updateProgressBar(); 
//     });
// });


// function goToNextPage() {
//     const totalPages = 4;
//     let currentPage = parseInt(window.location.pathname.match(/\d+/)) || 1;
//     // if (currentPage === 1) {
//     //     window.location.href = 'page2.html';
//     // } else if (currentPage === 2) {
//     //     window.location.href = 'page3.html';
//     // } else if (currentPage === 3) {
//     //     window.location.href = 'page4.html';
//     // }
//     if(currentPage<totalPages){
//         window.location.href = `page${currentPage+1}.html`;
//     }
// }


// function goToPreviousPage() {
//     const totalPages = 4;
//     let currentPage = parseInt(window.location.pathname.match(/\d+/)) || 1;
//     // if (currentPage === 2) {
//     //     window.location.href = 'index.html';
//     // } else if (currentPage === 3) {
//     //     window.location.href = 'page2.html';
//     // } else if (currentPage === 4) {
//     //     window.location.href = 'page3.html';
//     // }
//     if(currentPage>2){
//         window.location.href = `page${currentPage-1}.html`;
//     }
//     else{
//         window.location.href = 'index.html';
//     }
// }

const pages = [
  "Treasure-hunt.html",
  "Asokans-game.html",
  "WE-Smash.html",
  "Biryani-Run.html",
  "Corporate-Jargon.html",
  "Anshuls-game.html",
  "Pacwoman.html",
  "minigames1.html",
  "Dont-pop-the-duckie.html",
  "catalogue.html",
];

// Get current page name (handles query parameters too)
let currentPage = window.location.pathname.split("/").pop().split("?")[0];

// Find current page index
let currentIndex = pages.indexOf(currentPage);

// Load progress from localStorage
let savedIndex = parseInt(localStorage.getItem("progress"));
if (!isNaN(savedIndex) && savedIndex > currentIndex) {
  currentIndex = savedIndex; // Use saved progress if it's ahead
}

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
    localStorage.setItem("progress", currentIndex + 1); // Save progress
    window.location.href = pages[currentIndex + 1];
  }
}

// Navigate to the previous page
function goToPrevPage() {
  if (currentIndex > 0) {
    localStorage.setItem("progress", currentIndex - 1); // Save progress
    window.location.href = pages[currentIndex - 1];
  }
}

function navigateTo(page) {
  console.log("Navigating to:", page); // Debugging log
  window.location.href = `${page}.html`; // Ensure correct navigation
}

// Ensure progress bar updates when the page loads
document.addEventListener("DOMContentLoaded", updateProgressBar);

// Attach event listeners to arrow buttons
document.querySelector(".right-arrow")?.addEventListener("click", goToNextPage);
document.querySelector(".left-arrow")?.addEventListener("click", goToPrevPage);
