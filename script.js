let myLibrary = []

const watershipDown = new Book('Watership Down', 'Richard Adams', 413, "Read")
addBook(watershipDown)

const thePlague = new Book('The Plague', 'Albert Camus', 278, "Read")
addBook(thePlague)

const maximumRide = new Book('Maximum Ride', 'James Patterson', 350, "Not Read")
addBook(maximumRide)

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function () {
        return (`${title} by ${author} is 
        ${pages} pages.
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
    oneBook.innerText = book[i].info();
    oneBook.classList.add("book");
    oneBook.setAttribute('id', `${i}`);
    display.appendChild(oneBook);
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.setAttribute('data-id', `${i}`)
    deleteButton.textContent = "Delete";
    oneBook.appendChild(deleteButton);
    // let readButton = document.createElement("button");
    // readButton.classList.add("readButton");
    // oneBook.appendChild(readButton);
    if (book[i].read == "Read") {
        oneBook.classList.add("read")
    } else {
        oneBook.classList.add("notRead")
    }
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

let deleteButtons = Array.from(document.querySelectorAll('.deleteButton'))


let deleteTask = deleteButtons.forEach(function(button) {
    button.addEventListener('click', function () {
        let index = button.dataset.id;
        console.log(index);
        myLibrary.splice(index, 1);
        let deletedBook = document.getElementById(index);
        display.removeChild(deletedBook);
        deleteButtons.splice(index, 1);
    })
})

// const bookRead = document.getElementsByClassName('readButton')
// bookRead.addEventListener('click', function () {
//     if (div.classList.contains("notRead")) {
//         div.classList.remove("notRead");
//         div.classList.add("read")
//     } else if (div.classList.contains("read")) {
//         div.classList.remove("read");
//         div.classList.add("notRead")
//     }
// }) 
