async function fetchBooks(genre) {
  const apiUrl = `https://openlibrary.org/subjects/${genre}.json`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && data.works) {
      openResultsPage(data.works);
    } else {
      alert('No books found for this genre.');
    }
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

function openResultsPage(books) {
  // Store book data in localStorage
  localStorage.setItem('bookResults', JSON.stringify(books));

  // Open a new page
  window.open('genre.html', '_blank');
}

// Code for the new results.html page
function displayBooksOnNewPage() {
  const books = JSON.parse(localStorage.getItem('bookResults'));

  if (!books || books.length === 0) {
    document.body.innerHTML = '<p>No books found.</p>';
    return;
  }

  const resultsDiv = document.getElementById('book-results');
  resultsDiv.innerHTML = '';

  books.forEach((book) => {
    const coverImage = book.cover_id
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
      : 'https://via.placeholder.com/100x150?text=No+Image';

    const firstAuthor = book.authors && book.authors[0] ? book.authors[0].name : 'N/A';
    const bookElement = `
      <div class="genre-book">
        <img src="${coverImage}" alt="${book.title}" />
        <h3>${book.title}</h4>
        <p>Author: ${firstAuthor}</p>
        <a href="#">See Details <span class="material-symbols-outlined">chevron_right</span></a>
      </div>
    `;
    resultsDiv.innerHTML += bookElement;
  });
}

// Call displayBooksOnNewPage on the new page
if (document.getElementById('book-results')) {
  displayBooksOnNewPage();
}
