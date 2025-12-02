// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// change icons
function updateIcons() {
    const isDark = document.body.classList.contains("dark");

    document.getElementById("linkedin-icon").src =
        isDark ? "linkedinlogo_alt.png" : "linkedinlogo.png";

    document.getElementById("gmail-icon").src =
        isDark ? "gmaillogo_alt.png" : "gmaillogo.png";

    document.getElementById("cv-icon").src =
        isDark ? "cvlogo_alt.png" : "cvlogo.png";
}

updateIcons();

// Toggle theme
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    
    updateIcons();
});
