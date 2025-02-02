const myLibrary = [
  new Book('The Hobbit', 'J.R.R Tolkien', 295, 'false'),
  new Book('No Logo', 'Naomi Klein', 536, 'true'),
];

const bookList = document.getElementById('bookList');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function showBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const newLi = document.createElement('li');
    bookList.insertAdjacentElement('beforeend', newLi);
    newLi.innerText = myLibrary[i].info();
  }
}
