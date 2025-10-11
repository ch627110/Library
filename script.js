const myLibrary = [];
const default_container = document.getElementById('books-container').innerHTML

function Book(title, author, numPages, haveRead) {
    // the constructor
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

function addBook(title, author, numPages, haveRead) { 
    const book = new Book(title, author, numPages, haveRead)
    myLibrary.push(book)
    return book    
}

(() => {
    const the_hobbit = addBook('The Hobbit', 'JRR Tolkien', 300, false)
    const pride_and_prejudice = addBook('Pride and Prejudice', 'Jane Austen', 480, 
    false)
    const animal_farm = addBook('Animal Farm', 'George Orwell', 141, true)
    display()
})();

function display() {
    const books_container = document.querySelector('#books-container')
    myLibrary.forEach((book) => {
        const book_div = document.createElement('div')
        book_div.classList.add('book-div')

        const book_div_title = document.createElement('p')
        const book_div_author = document.createElement('p')
        const book_div_pages = document.createElement('p')
        const book_div_read = document.createElement('p')

        book_div_title.textContent = ('Book title: '+book.title)
        book_div_author.textContent = ('Book author: '+book.author)
        book_div_pages.textContent = ('Number of pages: '+book.numPages)
        book_div_read.textContent = ('Read status: '+book.haveRead)

        book_div.appendChild(book_div_title)
        book_div.appendChild(book_div_author)
        book_div.appendChild(book_div_pages)
        book_div.appendChild(book_div_read)

        books_container.appendChild(book_div)
    })
}

(() => {
    const showDialog = document.querySelector('#open-dialog')
    const dialog = document.querySelector('dialog')
    
    // open 'add a book' modal
    showDialog.addEventListener('click', () => {
        dialog.showModal()
    })

    const form = document.querySelector('form')
    const books_container = document.querySelector('#books-container')
    
    // when the form is submitted...
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        dialog.close()

        const title = document.getElementById('book-title-input')
        const author = document.getElementById('book-author-input')
        const pages = document.getElementById('book-pages-input')
        const read = document.getElementById('book-read-input')
        addBook(title.value, author.value, pages.value, read)
        
        form.reset()

        books_container.innerHTML = default_container
        display()
    })
})()