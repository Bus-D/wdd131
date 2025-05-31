const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '****'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    description:
      'The anticipated new novel by Rick Riordan...',
    imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods...",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

const contentArea = document.querySelector('#contentArea');

articles.forEach(article => {
  const bookHTML = `
    <div class="book-entry">
      <section class="book-info">
        <h3>${article.date}</h3>
        <p class="sideinfo">${article.ages}</p>
        <p class="sideinfo">${article.genre}</p>
        <p class="sideinfo">${article.stars}</p>
      </section>
      <div class="book-review">
        <h2 class="book-title">${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p class="description">${article.description}</p>
      </div>
    </div>
  `;

  const entry = document.createElement("div");
  entry.innerHTML = bookHTML;
  contentArea.appendChild(entry);
});