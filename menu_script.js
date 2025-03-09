function navigateTo(page) {
  console.log("Navigating to:", page); // Debugging log

  // Update progress before navigating
  updateProgress(page);

  // Navigate to the new page
  window.location.href = `./${page}.html`;
}

function closeMenu() {
  // If the menu was opened in a new tab or window, close it
  if (window.history.length > 1) {
      window.history.back();
  } else {
      window.close();
  }
}

// Progress Bar Update Function
function updateProgress(page) {
  const totalPages = 7; // Adjust based on total pages
  let currentPage = parseInt(page); // Convert page number

  if (!isNaN(currentPage)) {
      let progress = ((currentPage - 1) / (totalPages - 1)) * 100;
      document.querySelector(".progress-bar").style.height = progress + "%";
  }
}
