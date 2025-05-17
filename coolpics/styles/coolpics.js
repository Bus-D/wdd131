console.log('JS file Loaded!')

var menuButton = document.getElementById("menuButton")
var dropdownMenu = document.getElementById("dropdownMenu")

handleResize();

// Click based menu toggle
menuButton.addEventListener("click", function() {
    dropdownMenu.classList.toggle("hidden");
});

// Hover menu toggle
// menuButton.addEventListener("mouseover", function() {
//     dropdownMenu.classList.remove("hidden");
// });

// menuButton.addEventListener("mouseout", function() {
//     if (!dropdownMenu.contains(event.relatedTarget)) {
//         dropdownMenu.classList.add("hidden");
//     }
// });

// dropdownMenu.addEventListener("mouseover", function() {
//     dropdownMenu.classList.remove("hidden");
// });

// dropdownMenu.addEventListener("mouseout", function() {
//     if (!menuButton.contains(event.relatedTarget)) {
//         dropdownMenu.classList.add("hidden");
//     }
// });???""

// Resize menuButton
function handleResize() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1000) {
        dropdownMenu.classList.remove('hidden');
    } else {
        dropdownMenu.classList.add('hidden');
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

// Big img toggle
const smallImg = document.querySelectorAll('.small-img');
const thumbnail = document.getElementById('viewer');


function viewerTemplate(url, alt) {
    return `
    <div class="viewer-container">
        <img id="thumbnail" src="${url}" alt="${alt}">
        <button id="close-button" aria-label="close-button">&times;</button>
    </div>
    `;
}

smallImg.forEach(img => {
    img.addEventListener('click', () => {
        thumbnail.innerHTML = viewerTemplate(img.src, img.alt);
        viewer.classList.remove("hidden");

        const closeThumbnail = document.getElementById('close-button');
        closeThumbnail.addEventListener('click',() => {
            viewer.classList.add('hidden');
        });
    });
});