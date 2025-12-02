document.addEventListener("DOMContentLoaded", () => {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    function updateIcons() {
        const isDark = document.body.classList.contains("dark");

        document.getElementById("linkedin-icon").src =
            isDark ? "linkedinlogo_alt.png" : "linkedinlogo.png";

        document.getElementById("gmail-icon").src =
            isDark ? "gmaillogo_alt.png" : "gmaillogo.png";

        document.getElementById("cv-icon").src =
            isDark ? "cvlogo_alt.png" : "cvlogo.png";
    }

    // set icons correctly on page load
    updateIcons();

    // Toggle theme
    document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Save preference
        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );

        updateIcons();
    });
});
