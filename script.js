let myLibrary = ["One", "Two", "Three", "Four"]

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function () {
        return (`${title} by ${author}, ${pages}pages, ${read}`)
    }
}

function addBook(book) {
    return myLibrary.push(book)
}

const display = document.getElementById("library")

function displayBook(book) {
    for (let i = 0; i < book.length; i++) {
    let oneBook = document.createElement("div");
    oneBook.textContent = book[i];
    display.appendChild(oneBook)
    }
}

console.log(displayBook(myLibrary))

const newBook = document.getElementById("newBook")
// newBook.addEventListener('click', function() {

// }