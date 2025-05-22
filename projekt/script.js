console.log("Welcome to the group project!");

document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready.");

    const form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            const username = document.getElementById("username").value.trim();
            if (username === "") {
                event.preventDefault();
                alert("Username cannot be empty.");
            }
        });
    }
});