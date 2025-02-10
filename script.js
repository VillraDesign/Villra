document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

document.body.addEventListener("classChange", function () {
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});
