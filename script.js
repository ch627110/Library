const myLibrary = [];

function Book(id, title, author, numPages, haveRead) {
    // the constructor
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

function addBookToLibrary() {
    let id = crypto.randomUUID();
    let title;
    let author;
    let numPages;
    let haveRead;
    myLibrary.push(new Book(id, title, author, numPages, haveRead));
}

function displayEachBook() {
    // write a function that loops through the array and displays each book
    myLibrary.forEach((book) => {
        console.log(book)
    })
}

const dialog = document.querySelector('dialog')
const showButton = document.querySelector('dialog + button')
const closeButton = document.querySelector('dialog button')

// open 'add a book' modal
showButton.addEventListener('click', () => {
    dialog.showModal()
})

// submit modal
close.addEventListener('click', () => {
    dialog.close()
})