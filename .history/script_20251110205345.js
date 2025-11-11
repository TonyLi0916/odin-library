const myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(id, title, author, pages, read) {
    const newBook = new Book(id, title, author, pages, this.read);
    myLibrary.push(newBook);
}



