async function fetchBooks(genre) {
  const apiUrl = `https://openlibrary.org/subjects/${genre}.json`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && data.works) {
      openResultsPage(data.works);
    } else {
      alert("No books found for this genre.");
    }
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

function openResultsPage(books) {
  localStorage.setItem("bookResults", JSON.stringify(books));

  window.open("genre.html", "_blank");
}

// function navigateToAnotherPage(bookId) {
//   // Save the selected book ID
//   localStorage.setItem("selectedBookId", bookId);

//   // Open the new page
//   window.open("genre-book.html", "_blank");
// }

function displayBooksOnNewPage() {
  const books = JSON.parse(localStorage.getItem("bookResults"));
  if (!books || books.length === 0) {
    document.body.innerHTML = "<p>No books found.</p>";
    return;
  }

  const resultsDiv = document.getElementById("book-results");
  resultsDiv.innerHTML = "";

  console.log(books);
  books.forEach((book) => {
    const coverImage = book.cover_id
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
      : "https://via.placeholder.com/100x150?text=No+Image";

    const firstAuthor =
      book.authors && book.authors[0] ? book.authors[0].name : "N/A";
    const bookElement = `
      <div class="genre-book">
        <img src="${coverImage}" alt="${book.title}" />
        <h3>${book.title}</h4>
        <p>Author: ${firstAuthor}</p>
        <div id="buttons">
          <button>Read Now</button>
          <button>Buy Now</button>
        </div>
      </div>
    `;
    resultsDiv.innerHTML += bookElement;
  });
}

if (document.getElementById("book-results")) {
  displayBooksOnNewPage();
}

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading");
  const content = document.getElementById("book-results");
  loadingScreen.style.display = "none";
  content.style.display = "grid";
});
