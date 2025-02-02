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

  addBookToLibrary(title, author, pages, read);
  showBooks();
  bookForm.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read === 'true' ? true : false;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
  this.toggleRead = function () {
    this.read = !this.read;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function showBooks() {
  bookList.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerText = 'Read?';
    toggleBtn.setAttribute('id', `toggle-btn-${i}`);
    toggleBtn.addEventListener('click', () => {
      myLibrary[i].toggleRead();
      showBooks();
    });
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.setAttribute('id', `remove-btn-${i}`);
    removeBtn.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      showBooks();
    });
    const newLi = document.createElement('li');
    bookList.insertAdjacentElement('beforeend', newLi);
    newLi.innerText = myLibrary[i].info();
    newLi.appendChild(toggleBtn);
    newLi.appendChild(removeBtn);
  }
}

showBooks();
