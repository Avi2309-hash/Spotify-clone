document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here you can add your authentication logic
    // For a basic example, just log the values to console
    console.log("Username: " + username);
    console.log("Password: " + password);

    // Optional: Redirect to another page after successful login
    // window.location.href = "dashboard.html";
});
