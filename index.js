const myLibrary = [
  new Book('The Hobbit', 'J.R.R Tolkien', 295, 'false'),
  new Book('No Logo', 'Naomi Klein', 536, 'true'),
];

const newButton = document.getElementById('newBook');
const addButton = document.getElementById('addBook');
const bookForm = document.getElementById('bookDialog');
const bookList = document.getElementById('bookList');

newButton.addEventListener('click', () => {
  bookForm.showModal();
});

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  console.log(
    `Title: ${title}, Author: ${author}, Pages: ${pages}, Read: ${read}`
  );

  addBookToLibrary(title, author, pages, read);
  showBooks();
  bookForm.close();
});

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
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  }
  for (let i = 0; i < myLibrary.length; i++) {
    const newLi = document.createElement('li');
    bookList.insertAdjacentElement('beforeend', newLi);
    newLi.innerText = myLibrary[i].info();
  }
}

showBooks();
