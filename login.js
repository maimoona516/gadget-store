// Select form elements
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Simulated user data (replace with actual backend calls in real use)
const validUser = {
    email: "test@example.com",
    password: "12345"
};

// Function to validate login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === validUser.email && password === validUser.password) {
        alert("Login successful!");
        // Redirect to homepage or dashboard
        window.location.href = "index.html"; // Change to your page
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Attach event listener to login form
if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
}
// Login form functionality
const loginForm1 = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Dummy credentials (Replace with your backend validation)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@example.com" && password === "1234") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid email or password. Try again.");
    }
});
