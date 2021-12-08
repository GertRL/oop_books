class UI {
    constructor() {
        this.title = document.querySelector('#title')
        this.author = document.querySelector('#author')
        this.isbn = document.querySelector('#isbn')
    }
    addBook(book){
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#">X</a></td>`

        const bookList = document.querySelector('tbody')
        bookList.appendChild(tr)
    }
}