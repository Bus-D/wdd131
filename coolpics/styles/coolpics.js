var menuButton = document.getElementById("menuButton")
var dropdownMenu = document.getElementById("dropdownMenu")

menuButton.addEventListener("mouseover", function() {
    dropdownMenu.classList.remove("hidden");
});

menuButton.addEventListener("mouseout", function() {
    if (!dropdownMenu.contains(event.relatedTarget)) {
        dropdownMenu.classList.add("hidden");
    }
});

dropdownMenu.addEventListener("mouseover", function() {
    dropdownMenu.classList.remove("hidden");
});

dropdownMenu.addEventListener("mouseout", function() {
    if (!menuButton.contains(event.relatedTarget)) {
        dropdownMenu.classList.add("hidden");
    }
});