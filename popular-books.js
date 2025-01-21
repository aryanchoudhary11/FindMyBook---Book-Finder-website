const params = new URLSearchParams(window.location.search);
const bookTitle = params.get("title");


const book = details.find((b) => b.title === bookTitle);
if(book){
    const detailsDiv = document.querySelector(".book-details");
    detailsDiv.innerHTML = `
        <div class = "popular-cover-container">
            <img src="${book.cover}">
            <button>Read Now</button>
            <button>Buy Now</button>
            <p id="price">${book.price}</p>
        </div>
        <div class="popular-details-container">
            <h1>${book.title}</h1>
            <p id="author-name">${book.author}</p>
            <p id="genre"><b>Genre: </b>${book.genre}</p>
            <p id="intro">${book.intro}</p>
            <span>${book.pages} pages</span>
            <h3>Extra details</h3>
            <p id="original_t"><b>Original title: </b>${book.originalTitle}</p>
            <span>First published in ${book.published}</span>
            <p id="awards"><b>Literary awards: </b>${book.awards}</p>
        </div>`
}