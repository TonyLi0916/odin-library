const dialog = document.getElementById('bookDialog');
const form = document.getElementById('bookForm');
const openBtn = document.getElementById('openDialog');
const myLibrary = [];

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

function displayBook() {
    myLibrary.forEach(book => console.log(book));
}

openBtn.addEventListener("click", () => dialog.showModal());
closeBtn.addEventListener("click", () => dialog.close());



 
