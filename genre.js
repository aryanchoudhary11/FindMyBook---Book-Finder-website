async function fetchBooks(genre) {
    // Fetch books from the Open Library API based on the genre
    const apiUrl = `https://openlibrary.org/subjects/${genre}.json`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.works) {
        displayBooks(data.works);
      } else {
        document.getElementById('book-results').innerHTML = '<p>No books found for this genre.</p>';
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  // Function to display the fetched books
  function displayBooks(books) {
    const resultsDiv = document.getElementById('book-results');
    resultsDiv.innerHTML = '';

    books.forEach((book) => {
        const bookInfo = book;
        const coverImage = book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : 'https://via.placeholder.com/100x150?text=No+Image'; // Default image if no cover
  
        // Get the first author only (if available)
        const firstAuthor = book.authors && book.authors[0] ? book.authors[0].name : 'N/A'; // Use the first author name
  
        const bookElement = `
          <div class="book">
            <h4>${bookInfo.title}</h4>
            <p>Author: ${firstAuthor}</p> <!-- Display only the first author -->
            
            <img src="${coverImage}" alt="${bookInfo.title}" />
          </div>
        `;
        resultsDiv.innerHTML += bookElement;
      });
    }