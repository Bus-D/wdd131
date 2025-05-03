const themeSelector = document.getElementById("mode");
const logo = document.getElementById("logo");

themeSelector.addEventListener("change", function () {
    const selectedTheme = this.value;
    const body = document.body;

    if (selectedTheme === "dark") {
        body.classList.remove("light");
        body.classList.add("dark");
        logo.src = "images/byui-logo_dark.png";
    } else if (selectedTheme === "light") {
        body.classList.remove("dark");
        body.classList.add("light");
        logo.src = "images/byu-idaho-logo.png";
    }
});