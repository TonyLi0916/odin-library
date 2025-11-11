const dialog = document.getElementById('bookDialog');
const form = document.getElementById('bookForm');
const openBtn = document.getElementById('openDialog');
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
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const book = {
      id: crypto.randomUUID(),
      title: form.title.value,
      author: form.author.value,
      pages: form.pages.value,
      read: form.read.value
    };
    myLibrary.push(book);
    console.log(myLibrary);
    dialog.close();
    form.reset();
  });

function displayBook() {
    libraryDisplay.innerHTML = ''; // clear previous display
    for (let book of myLibrary) {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
      `;
      libraryDisplay.appendChild(bookCard);
    }
  }







 
