// add object
const ui = new UI()
const ls = new LS()

const form =document.querySelector('form')
form.addEventListener('submit',addBook)

function addBook(event) {
    // get task value from form input
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value

    //// create book abject with user data
    const book = new Book(title,author,isbn)
    console.log(book)

    /// add book data to ui and show it
    ui.addBook(book)
    // Save book data to LS
    ls.addBook(book)

    // clear form input value

    ui.title.value
    ui.author.value
    ui.isbn.value

    event.preventDefault()
}