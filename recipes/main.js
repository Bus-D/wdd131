import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe-container">
            <img class="food-pic" src="${recipe.image}" alt="${recipe.description}">
            <div class="recipe-details">
                <p class="food-type">${tagsTemplate(recipe.tags)}</p>
                <h2 class="dish">${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </div>`;
}

function renderRecipes(recipeList) {
    const output = document.querySelector('main');
    output.innerHTML = recipeList.map(recipeTemplate).join('');
}

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(query);
        const descriptionMatch = recipe.description.toLowerCase().includes(query);
        const tagsMatch = recipe.tags.join(' ').toLowerCase().includes(query);
        const ingredientsMatch = recipe.recipeIngredient.join(' ').toLowerCase().includes(query);
        return nameMatch || descriptionMatch || tagsMatch || ingredientsMatch;
    });
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
}

function handleSearch(e) {
    e.preventDefault();
    const inputField = e.target.q;
    const input = inputField.value.trim().toLowerCase();
    const results = filterRecipes(input);
    const noResults = document.getElementById('no-results');
    if (results.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
    renderRecipes(results);
    inputField.value = '';  // Clear the search input after search
}

function clearSearch() {
    const input = document.querySelector('input[name="q"]');
    input.value = '';
    document.getElementById('no-results').style.display = 'none';
    renderRecipes(recipes);
}

function init() {
    renderRecipes([getRandomListEntry(recipes)]);
    const form = document.querySelector('.search-bar');
    const clearBtn = document.getElementById('clear-search');
    form.addEventListener('submit', handleSearch);
    clearBtn.addEventListener('click', clearSearch);
}

document.addEventListener('DOMContentLoaded', init);
