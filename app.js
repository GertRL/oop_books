// add object
const ui = new UI()

const form =document.querySelector('form')
form.addEventListener('submit',addBook)

function addBook(event) {
    // get task value from form input
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    //// create book abject with user data
    const book = new Book(title,author,isbn)
    console.log(book)

    /// add book data to ui and show it
    ui.addBook(book)

    // clear form input value

    document.querySelector('#title').value =''
    document.querySelector('#author').value =''
    document.querySelector('#isbn').value =''

    event.preventDefault()
}