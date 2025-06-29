import recipes from './recipes.js';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[random(list.length)];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= Math.floor(rating)
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
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
    const text = query.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(text) ||
      recipe.description.toLowerCase().includes(text) ||
      recipe.tags.join(' ').toLowerCase().includes(text) ||
      recipe.recipeIngredient.join(' ').toLowerCase().includes(text)
    );
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
  noResults.style.display = results.length === 0 ? 'block' : 'none';
  renderRecipes(results);
  inputField.value = '';
}

function init() {
  renderRecipes([getRandomListEntry(recipes)]);
  document.querySelector('.search-bar').addEventListener('submit', handleSearch);
}

document.addEventListener('DOMContentLoaded', init);
