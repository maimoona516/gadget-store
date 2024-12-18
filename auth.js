// Redirect to the login page when clicking the user icon
const userIcon = document.getElementById("user-icon");

userIcon.addEventListener("click", () => {
  window.location.href = "signin.html"; // Replace with your login page path
});
// Select the user icon and popup
const userIcon1 = document.getElementById("user-icon");
const loginPopup = document.getElementById("login-popup");

// Show popup when clicking the user icon
userIcon.addEventListener("click", () => {
  loginPopup.classList.toggle("hidden"); // Show or hide popup
});

// Close popup when clicking outside the form
window.addEventListener("click", (event) => {
  if (event.target === loginPopup) {
    loginPopup.classList.add("hidden");
  }
});
