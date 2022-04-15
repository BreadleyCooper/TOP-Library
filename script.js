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

function displayLibrary() {
    for (let element of myLibrary) {
        // for each object in the array, create a new div .card, give it the class of .card and append DOM
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        cardContainer.appendChild(newCard);
        
        const cardTitle = document.createElement("div")
        newCard.appendChild(cardTitle);
        cardTitle.textContent = element.title;
        cardTitle.classList.add("title")

        const moreInfo = document.createElement("div");
        newCard.appendChild(moreInfo);
        moreInfo.classList.add("moreInfo");

        const cardAuthor = document.createElement("div");
        moreInfo.appendChild(cardAuthor);
        cardAuthor.textContent = element.author;

        const cardPages = document.createElement("div");
        moreInfo.appendChild(cardPages);
        cardPages.textContent = element.pages;

        const cardRead = document.createElement("div");
        moreInfo.appendChild(cardRead);
        cardRead.textContent = element.read;
        if (cardRead.textContent === "true"){
                cardRead.textContent = "You have read this book";
                } else cardRead.textContent = "You have not read this book";
            };
    };


const cardContainer = document.querySelector(".cardContainer")

addBookToLibrary ("The Hobbit", "Bloke", "1566", true);
addBookToLibrary ("Mistborn", "Brandon Sanderson", "400", true);
addBookToLibrary ("Pride and Prejudice", "Woman", "42069", false);

console.log(myLibrary)
displayLibrary();

