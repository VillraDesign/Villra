// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const isDarkMode = localStorage.getItem("dark-mode") === "enabled";

if (isDarkMode) {
    document.body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

// Contact Form Handling - fungerande frontend
//const contactForm = document.getElementById("contactForm");

//if (contactForm) {
//    contactForm.addEventListener("submit", function (event) {
//        event.preventDefault(); // Prevent page reload

        // Collect form data
//        const formData = new FormData(contactForm);
//        const name = formData.get("name");
//        const email = formData.get("email");
//        const message = formData.get("message");

        // Simulating form submission (Replace with actual backend/API)
//        alert(`Tack, ${name}!. Ditt meddelande har skickats!`);
//        //contactForm.reset(); // Clear form after submission
//    });
//}
