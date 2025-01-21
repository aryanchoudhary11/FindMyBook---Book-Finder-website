document.querySelectorAll("#popular-details").forEach((button) =>{
    button.addEventListener('click', (event) =>{
        const bookBox = event.target.closest('.popular-box');
        const bookTitle = bookBox.getAttribute('data-title');

        window.location.href = `popular-books.html?title=${bookTitle}`;
    });
});

