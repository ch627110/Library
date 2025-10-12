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
    this.toggleReadStatus = function() {
        this.haveRead = this.haveRead ? false : true
        refresh()
    }
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
    const dune = addBook('Dune', 'Frank Herbert', 688, true)
    const the_catcher_in_the_rye = addBook('The Catcher in the Rye', 'J.D. Salinger', 277, false)
    const to_kill_a_mockingbird = addBook('To Kill a Mockingbird', 'Harper Lee', 336, true)
    const the_great_gatsby = addBook('The Great Gatsby', 'F. Scott Fitzgerald', 180, true)
    const moby_dick = addBook('Moby-Dick', 'Herman Melville', 720, false)
    const frankenstein = addBook('Frankenstein', 'Mary Shelley', 280, true)
    const the_lord_of_the_rings = addBook('The Lord of the Rings', 'J.R.R. Tolkien', 1178, false)
    const the_alchemist = addBook('The Alchemist', 'Paulo Coelho', 208, true)
    const the_hunger_games = addBook('The Hunger Games', 'Suzanne Collins', 374, false)
    refresh()
})();

function removeBook(book_remove) {
    return myLibrary.filter((book) => book.id != book_remove.id)
}

function display() {
    const books_container = document.querySelector('#books-container')
    myLibrary.forEach((book) => {
        const book_div = document.createElement('div')
        book_div.classList.add('book-div')

        const book_div_title = document.createElement('p')
        const book_div_pages = document.createElement('p')
        const book_div_read = document.createElement('p')

        const toggle_button = document.createElement('button')
        const remove_button = document.createElement('button')

        book_div_title.textContent = (book.title + ' by ' + book.author)
        book_div_pages.textContent = (book.numPages+' pages')
        book_div_read.textContent = book.haveRead ? ('Have read!') : ('Have NOT read!')
        
        toggle_button.textContent = 'Toggle read status'
        toggle_button.addEventListener('click', () => {
            book.toggleReadStatus()
        })

        remove_button.textContent = 'Remove book'
        
        book_div.appendChild(book_div_title)
        book_div.appendChild(book_div_pages)
        book_div.appendChild(book_div_read)
        book_div.appendChild(toggle_button)
        book_div.appendChild(remove_button)

        books_container.appendChild(book_div)
    })
}

function refresh() {
    const books_container = document.querySelector('#books-container')
    books_container.innerHTML = default_container
    display()
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
    const readStatus = document.querySelector('#readStatus')
    
    // when the form is submitted...
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        dialog.close()

        const title = document.getElementById('book-title-input')
        const author = document.getElementById('book-author-input')
        const pages = document.getElementById('book-pages-input')
        const read = readStatus.checked ? true : false

        addBook(title.value, author.value, pages.value, read)
        
        form.reset()

        books_container.innerHTML = default_container
        refresh()
    })
})()