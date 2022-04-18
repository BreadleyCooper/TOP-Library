// controls for pulling up the input form
function toggleForm (){
    document.body.classList.toggle("activeForm")
}

let myLibrary = [];

const cardContainer = document.querySelector(".cardContainer")

let submit = document.querySelector("#submit");
submit.addEventListener("click",(addBookToLibrary))

function clearDisplay (){
    let elementCheck = document.querySelectorAll("div.card")
    if (elementCheck.length > 0) {
        const card = document.querySelector(".card")
        card.remove()
    }
    
}


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
;
function addBookToLibrary (title, author, pages, read){
    title = document.querySelector("#bookTitle").value;
    author = document.querySelector("#bookAuthor").value;
    pages = document.querySelector("#bookPages").value;
    read = document.querySelector("#bookRead").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(title,author,pages,read,myLibrary)
    clearDisplay();
    displayLibrary(); 
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
        cardAuthor.textContent = "by " + element.author;

        const cardPages = document.createElement("div");
        moreInfo.appendChild(cardPages);
        cardPages.textContent = element.pages + " Pages";

        const cardRead = document.createElement("div");
        moreInfo.appendChild(cardRead);
        cardRead.textContent = element.read;
        if (cardRead.textContent === "true"){
                cardRead.textContent = "You have read this book";
                } else cardRead.textContent = "You have not read this book";
            };
    };







