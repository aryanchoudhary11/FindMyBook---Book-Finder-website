// Utility function to fetch and display books
async function fetchBooksauthor(authorName) {
  const resultsDiv = document.getElementById("author-book-results");
  resultsDiv.innerHTML = "";

  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?author=${encodeURIComponent(
        authorName
      )}`
    );
    const data = await response.json();

    if (data.docs.length === 0) {
      resultsDiv.textContent = "No books found for this author.";
      return;
    }

    const books = data.docs.map((book) => {
      // Use cover_i to generate the image URL or fall back to a default image
      const coverImage = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : "img/default-cover.jpg"; // Replace with the path to your default cover image

      return `
                <div class="author-book">
                    <img src="${coverImage}" alt="Cover of ${
        book.title
      }" class="book-cover" />
                    <h3>${book.title}</h3>
                    <p id="author-name"><strong>Author:</strong> ${
                      book.author_name ? book.author_name.join(", ") : "Unknown"
                    }</p>
                    <p id="published-year"><strong>First Published:</strong> ${
                      book.first_publish_year || "Unknown"
                    }</p>
                    <div id="author-buttons">
                        <button>Read Now</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            `;
    });

    resultsDiv.innerHTML = books.join("");
  } catch (error) {
    console.error("Error fetching books:", error);
    resultsDiv.textContent = "An error occurred while fetching data.";
  }
}

// Logic for index.html
if (window.location.pathname.endsWith("index.html")) {
  document.getElementById("search-button").addEventListener("click", () => {
    const authorName = document.getElementById("author-input").value.trim();
    if (authorName === "") {
      alert("Please enter an author name.");
      return;
    }

    // Redirect to the books page with the author name as a URL parameter
    window.location.href = `author.html?author=${encodeURIComponent(
      authorName
    )}`;
  });
}

// Logic for books.html
if (window.location.pathname.endsWith("author.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const authorName = urlParams.get("author");

  if (authorName) {
    fetchBooksauthor(authorName);
  } else {
    document.getElementById("book-results").textContent =
      "No author name provided.";
  }
}
