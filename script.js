let myLibrary = []

const watershipDown = new Book('Watership Down', 'Richard Adams', 413, "Read")
addBook(watershipDown)

const thePlague = new Book('The Plague', 'Albert Camus', 250, "Read")
addBook(thePlague)

const maximumRide = new Book('Maximum Ride', 'James Patterson', 350, "Read")
addBook(maximumRide)

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function () {
        return (`${title} by ${author} is 
        ${pages}pages.
        ${read}`) 
    }
}

function addBook(book) {
    return myLibrary.push(book)
}

const display = document.getElementById("library")

function displayBook(book) {
    for (let i = 0; i < book.length; i++) {
    let oneBook = document.createElement("div");
    oneBook.textContent = book[i].info();
    display.appendChild(oneBook)
    }
}

displayBook(myLibrary)

const newBook = document.getElementById("new-book")

newBook.addEventListener('click', function() {
document.getElementById('form-container').classList.add("show")
})

const close = document.getElementById('close') 

close.addEventListener('click', function () {
    document.getElementById('form-container').classList.remove("show")
})

const submit = document.getElementById('submit') 

submit.addEventListener('click', function () {
    document.getElementById('form-container').classList.remove("show")
})