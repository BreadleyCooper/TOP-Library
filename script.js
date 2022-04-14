let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary (title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook); 
}

function displayLibrary(myLibrary) {
    let length = myLibrary.length;
    for (let i = 0; i < length; i++) {
        // display each book on the page - will come back to this once basic HTML and CSS are ready
    }
}

addBookToLibrary ("The Hobbit", "Bloke", "1566", true);
addBookToLibrary ("Mistborn", "Brandon Sanderson", "400", true);
addBookToLibrary ("Pride and Predujice", "Woman", "42069", false);

