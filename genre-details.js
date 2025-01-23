// const books = JSON.parse(localStorage.getItem("bookResults")) || [];
// const selectedBookId = localStorage.getItem("selectedBookId");

// // Filter the selected book
// const selectedBook = books.filter((book) => book.key === selectedBookId)[0];

// if (selectedBook) {
//   const detailsContainer = document.querySelector(".genre-details-container");
//   const coverImage = selectedBook.cover_id
//     ? `https://covers.openlibrary.org/b/id/${selectedBook.cover_id}-M.jpg`
//     : "https://via.placeholder.com/100x150?text=No+Image";

//   detailsContainer.innerHTML = `
//           <div class="genre-cover container">
//             <img src="${coverImage}" alt="${selectedBook.title}" />
//             <button>Read Now @Rs.89</button>
//             <button>Buy Now</button>
//           </div>
//           <div class="genre-details-container">
//             <h1>${selectedBook.title}</h1>
//             <p><strong>Author:</strong> ${
//               selectedBook.authors && selectedBook.authors[0]
//                 ? selectedBook.authors[0].name
//                 : "N/A"
//             }</p>
//           </div>
//         `;
// } else {
//   document.body.innerHTML = "<p>Book details not found.</p>";
// }
