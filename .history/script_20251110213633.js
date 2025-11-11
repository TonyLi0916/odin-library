const dialog = document.getElementById('bookDialog');
const form = document.getElementById('bookForm');
const openBtn = document.getElementById('openDialog');
const libraryDisplay = document.getElementById('libraryDisplay');

const myLibrary = [];

openBtn.addEventListener('click', () => dialog.showModal());

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBook();
}

function displayBook() {
  libraryDisplay.innerHTML = '';
  for (let book of myLibrary) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read}</p>
      <button class="remove-btn" data-id="${book.id}">Remove</button>
    `;
    libraryDisplay.appendChild(bookCard);
  }

  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      removeBook(button.dataset.id);
    });
  });
}

function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBook(); 
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary(
    form.title.value,
    form.author.value,
    form.pages.value,
    form.read.value
  );
  dialog.close();
  form.reset();
});
