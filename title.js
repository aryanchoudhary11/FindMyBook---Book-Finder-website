
async function fetchBooksByTitle(titleName) {
    const resultsDiv = document.getElementById("book-results");
    resultsDiv.innerHTML = ""; 

    console.log(titleName);
    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?title=${(titleName)}`
        );
        const data = await response.json();

        if (data.docs.length === 0) {
            resultsDiv.textContent = "No books found with this title.";
            return;
        }

        const books = data.docs.map((book) => {
            
            const coverImage = book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                : "img/default-cover.jpg"; 

            return `
                <div class="title-book">
                    <img src="${coverImage}" alt="Cover of ${book.title}" class="book-cover" />
                    <h3>${book.title}</h3>
                    <p id="author-name"><strong>Author:</strong> ${book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
                    <p id="published-year"><strong>First Published:</strong> ${book.first_publish_year || "Unknown"}</p>
                    <a href="#">See Details <span class="material-symbols-outlined">chevron_right</span></a>
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
    document.getElementById("title-search").addEventListener("click", () => {
        const titleName = document.getElementById("title-input").value.trim();
        if (titleName === "") {
            alert("Please enter a book title.");
            return;
        }

        
        window.location.href = `title.html?title=${encodeURIComponent(titleName)}`;
    });
}


if (window.location.pathname.endsWith("title.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const titleName = urlParams.get("title");

    if (titleName) {
        fetchBooksByTitle(titleName);
    } else {
        document.getElementById("book-results").textContent = "No book title provided.";
    }
}
