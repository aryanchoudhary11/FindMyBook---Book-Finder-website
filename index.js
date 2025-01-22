document.querySelectorAll("#popular-details").forEach((button) =>{
    button.addEventListener('click', (event) =>{
        const bookBox = event.target.closest('.popular-box');
        const bookTitle = bookBox.getAttribute('data-title');

        window.location.href = `popular-books.html?title=${bookTitle}`;
    });
});

window.addEventListener('load', function () {
    console.log('Page fully loaded');
    const loadingScreen = document.getElementById('loading');
    const content = document.getElementById('content');

    if (loadingScreen && content) {
        console.log('Elements found');
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
        console.log('Loading screen hidden, content displayed');
    } else {
        console.log('One or both elements not found');
    }
});


