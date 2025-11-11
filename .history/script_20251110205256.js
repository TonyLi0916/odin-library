const myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
    new Book(this.id, this.title, this.author, this.pages, this.read);
    
}



