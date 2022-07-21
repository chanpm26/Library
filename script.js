class Book {

    constructor(title, author, pages, read, comments) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.comments = comments
    }

     get info() {
        return (`${this.title} by ${this.author} is ${this.pages} pages.`) 
    }
}


const displayModule = (function() {

    let myLibrary = []

    let addBook = function (book) {
        return myLibrary.push(book) 
    }

    const watershipDown = new Book('Watership Down', 'Richard Adams', 413, "Read")
    addBook(watershipDown)

    const thePlague = new Book('The Plague', 'Albert Camus', 278, "Read")
    addBook(thePlague)

    const maximumRide = new Book('Maximum Ride', 'James Patterson', 350, "Not Read")
    addBook(maximumRide)

    const display = document.getElementById("library")

    function displayBook(book) {
        display.textContent = "";
        for (let i = 0; i < book.length; i++) {
        let oneBook = document.createElement("div");
        oneBook.innerText = book[i].info;
        oneBook.classList.add("book");
        oneBook.setAttribute('id', `${i}`);
        display.appendChild(oneBook);
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.setAttribute('data-id', `${i}`)
        deleteButton.textContent = "Delete";
        oneBook.appendChild(deleteButton);
        let readButton = document.createElement("button");
        readButton.classList.add("readButton");
        readButton.setAttribute('data-id', `${i}`);
        readButton.textContent = "Read/UnRead";
        oneBook.appendChild(readButton);
        if (book[i].read == "Read") {
            oneBook.classList.add("read")
        } else {
            oneBook.classList.add("notRead")
        }
        }
        let deleteButtons = Array.from(document.querySelectorAll('.deleteButton'))
        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function () {
                let index = button.dataset.id;
                console.log(index);
                myLibrary.splice(index, 1);
                let deletedBook = document.getElementById(index);
                display.removeChild(deletedBook);
                deleteButtons.splice(index, 1);
            })
        })

        let readButtons = Array.from(document.querySelectorAll('.readButton'))
        readButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                let index = button.dataset.id;
                console.log(index)
                let readBook = document.getElementById(index);
                console.log(readBook)
                if (readBook.classList.contains("notRead")) {
                    readBook.classList.remove("notRead");
                    readBook.classList.add("read");
                } else if (readBook.classList.contains("read")) {
                    readBook.classList.remove("read");
                    readBook.classList.add("notRead")
                }
            })
        })
    }

    displayBook(myLibrary)

    return {displayBook, myLibrary, addBook}
})()


const addBookModule = (function() { 
    let state = ""
    let checkStatus = function() {
            let check = document.getElementById('read');
            if (check.checked == true) {
                state = "Read"
            } else {
                state = "Not Read"
            }
        }

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

    const userBook = submit.addEventListener('click', function() {
        let title = document.getElementById('title').value
        let author = document.getElementById('author').value
        let pages = document.getElementById('pages').value
        checkStatus()
        let comments = document.getElementById('comments').value
        let userAdded = new Book(title, author, pages, state, comments)
        displayModule.addBook(userAdded)
        displayModule.displayBook(displayModule.myLibrary);
        document.getElementById('title').value = ""
        document.getElementById('author').value = ""
        document.getElementById('pages').value = ""
        document.getElementById('comments').value = ""
    })
})()