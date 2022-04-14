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
    let length = myLibrary.length;
    for (let i = 0; i < length; i++) {
        // for each object in the array, create a new div .card, give it the class of .card and append DOM
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        cardContainer.appendChild(newCard);
        // append each card with the following children: Title, more info -> author, pages, read, using textContent/innerHTML
        const cardTitle = document.createElement("div")
        const cardAuthor = document.createElement("div")
        const cardPages = document.createElement("div")
        const cardRead = document.createElement("div")
        // loop through each object in the myLibrary array and extract the keys
        // Currently, need to have this forEach loop not looping within the bigger loop...
        myLibrary.forEach((element) => {
            console.log(element.title);
            newCard.appendChild(cardTitle);
            cardTitle.textContent = element.title;
            
            newCard.appendChild(cardAuthor);
            cardAuthor.textContent = element.author;

            newCard.appendChild(cardPages);
            cardPages.textContent = element.pages;

            newCard.appendChild(cardRead);
            cardRead.textContent = element.read;
            if (cardRead.textContent === "true"){
                cardRead.textContent = "You have read this book";
            } else cardRead.textContent = "You have not read this book";
        });
        
    }
}


// const cardTitle = document.querySelector(".title")
// const cardAuthor = document.querySelector(".author")
// const cardPages = document.querySelector(".pages")
// const cardRead = document.querySelector(".read")
const cardContainer = document.querySelector(".cardContainer")

addBookToLibrary ("The Hobbit", "Bloke", "1566", true);
addBookToLibrary ("Mistborn", "Brandon Sanderson", "400", true);
addBookToLibrary ("Pride and Prejudice", "Woman", "42069", false);

console.log(myLibrary)
displayLibrary();

