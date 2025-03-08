function navigateTo(page) {
    console.log("Navigating to:", page); // Debugging log
    window.location.href = `${page}.html`; // Ensure correct navigation
}

function closeMenu() {
  // If the menu was opened in a new tab or window, close it
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.close();
  }
}

