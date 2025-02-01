const submitButton = document.getElementById("submit");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const bookListTable = document.getElementById("book-list");

function addBookRow(title, author, isbn) {
    const row = document.createElement('tr');
    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = author;
    row.appendChild(authorCell);

    const isbnCell = document.createElement('td');
    isbnCell.textContent = isbn;
    row.appendChild(isbnCell);

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    bookListTable.appendChild(row);

    deleteButton.addEventListener('click', () => {
        row.remove();
    });

    // Ensuring that the row is fully appended before allowing further actions
    setTimeout(() => {
        // If needed, manually trigger any callback for DOM readiness.
    }, 50);
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;

    if (title && author && isbn) {
        addBookRow(title, author, isbn);
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    } else {
        alert('Please fill in all fields!');
    }
});
