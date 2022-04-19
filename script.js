// controls for pulling up the input form
let libraryJSONText
let myLibrary = [];
const cardContainer = document.querySelector(".cardContainer")

retrieveLibrary()
// displayLibrary()

function toggleForm (){
    document.body.classList.toggle("activeForm")
}
function storeLibrary (){
    if (myLibrary !== null){
        libraryJSON = JSON.stringify(myLibrary);
        localStorage.setItem("JSONLibrary", libraryJSON)
    } 
}

function retrieveLibrary() {
    libraryJSONText = localStorage.getItem("JSONLibrary")
    myLibraryToPush = JSON.parse(libraryJSONText);
    if (myLibrary !== null) {
        displayLibrary()
    }
}




let submit = document.querySelector("#submit");
submit.addEventListener("click",(addBookToLibrary))



function clearDisplay (){
        while(cardContainer.firstChild){;
        cardContainer.removeChild(cardContainer.lastChild);
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
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    clearDisplay();
    storeLibrary();
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
        if (element.read == true) {
            cardRead.textContent = "You have read this book"
        } else if(element.read == false) {
            cardRead.textContent = "Not read yet"
        }
        
        // create the delete button and container
        const deleteCardContainer = document.createElement("div");
        const deleteCardBtn = document.createElement("button");
        deleteCardBtn.textContent = "🗑" 
        // append them to the card div
        newCard.appendChild(deleteCardContainer);
        deleteCardContainer.appendChild(deleteCardBtn);
        // add their css classes
        deleteCardContainer.classList.add("deleteCardContainer");
        deleteCardBtn.classList.add("deleteCardBtn");
        deleteCardBtn.addEventListener("click", () => {
            removeBook();
            function removeBook(){
            cardContainer.removeChild(newCard);    
            for (let i=0; i < myLibrary.length; i++) {
                if (cardTitle.textContent == myLibrary[i].title)
                myLibrary.splice(i,1)
            }}
            storeLibrary();
        })

        // create the check when read icon
        const checkWhenRead = document.createElement("div")
        newCard.appendChild(checkWhenRead);
        checkWhenRead.classList.add("checkWhenRead");
        if (element.read == true) {
            checkWhenRead.textContent = "Change to unread ✗"
        } else checkWhenRead.textContent = "Change to read ✔";
        checkWhenRead.addEventListener("click", () =>{
            checkWhenRead.textContent = "Change to unread ✗"
            if (cardRead.textContent == "You have read this book") {
                cardRead.textContent = "Not read yet";
                checkWhenRead.textContent = "Change to read ✔"
                element.read = false
            }
            else { element.read = true;
            checkIfRead()};
            function checkIfRead(){
                for (let i=0; i < myLibrary.length; i++) {
                    if (myLibrary[i].read == true){;
                    cardRead.textContent = "You have read this book";
                } else {
                    cardRead.textContent = "Change to read ✔";
                    myLibrary[i].read == false;
                }
            };
            };
            storeLibrary()
            console.log("stored");});


    }};
