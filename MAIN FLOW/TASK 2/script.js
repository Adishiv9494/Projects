document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Show the success message
        successMessage.style.display = "block";
        
        // Hide the form (optional)
        form.style.display = "none";
    });
});
