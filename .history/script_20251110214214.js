// DOM elements
const dialog = document.getElementById('bookDialog');
const form = document.getElementById('bookForm');
const openBtn = document.getElementById('openDialog');
const libraryDisplay = document.getElementById('libraryDisplay');

// Library array
const myLibrary = [];

// Open dialog
openBtn.addEventListener('click', () => dialog.showModal());

// Book constructor
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Prototype method to toggle read status
Book.prototype.toggleRead = function() {
  if (this.read.toLowerCase() === 'read') {
    this.read = 'not read yet';
  } else {
    this.read = 'read';
  }
};

// Add a book to the library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

// Remove a book by id
function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

// Toggle read status by id
function toggleReadStatus(id) {
  const book = myLibrary.find(book => book.id === id);
  if (book) {
    book.toggleRead();
    displayBooks();
  }
}

// Display all books
function displayBooks() {
  libraryDisplay.innerHTML = ''; // Clear previous content

  for (let book of myLibrary) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read}</p>
      <button class="toggle-read-btn" data-id="${book.id}">Toggle Read</button>
      <button class="remove-btn" data-id="${book.id}">Remove</button>
    `;
    libraryDisplay.appendChild(bookCard);
  }

  // Add event listeners for remove buttons
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => removeBook(button.dataset.id));
  });

  // Add event listeners for toggle read buttons
  const toggleButtons = document.querySelectorAll('.toggle-read-btn');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => toggleReadStatus(button.dataset.id));
  });
}

// Handle form submission
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
