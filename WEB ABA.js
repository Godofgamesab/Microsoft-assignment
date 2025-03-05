// Function to handle registration
function register() {
    // Redirect to a registration page or show a registration form
    alert("Redirecting to registration page...");

    // Example: Store user credentials in localStorage
    const username = prompt("Enter a username:");
    const password = prompt("Enter a password:");

    if (username && password) {
        // Save the username and password in localStorage
        localStorage.setItem("registeredUsername", username);
        localStorage.setItem("registeredPassword", password);

        alert("Registration successful! You can now login.");
    } else {
        alert("Registration failed. Please provide both username and password.");
    }
}

// Function to handle login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;

    // Retrieve stored credentials from localStorage
    const registeredUsername = localStorage.getItem("registeredUsername");
    const registeredPassword = localStorage.getItem("registeredPassword");

    // Validate credentials
    if (username === registeredUsername && password === registeredPassword) {
        alert("Login successful!");
        window.location.href = "WEB ABA.html";
        // Redirect to another page or perform other actions
    } else {
        document.getElementById("error").textContent = "Invalid username or password.";
    }
});