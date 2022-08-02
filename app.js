const addBookButton = document.querySelector('.button-primary')
const modalButton = document.querySelector('.add-book-to-container')
const cardContainer = document.querySelector('.card-container')
const modal = document.querySelector('.modal')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const alertContainer = document.querySelector('.alert-container')

addBookButton.addEventListener('click', () => {
  cardContainer.style.display = 'none'
  addBookButton.style.display = 'none'
  modal.style.display = 'block'
  body.style.backgroundColor = '#888888'
  modal.style.color = 'white'
  header.style.color = 'white'
  modalButton.style.color = 'white'
})

let resetView = () => {
  cardContainer.style.display = 'flex'
  modal.style.display = 'none'
  body.style.backgroundColor = 'white'
  header.style.color = 'black'
  addBookButton.style.display = 'block'
}

let myLibrary = []

function Book(author, title, numberOfPages, read) {
  this.author = author
  this.title = title
  this.numberOfPages = numberOfPages
  this.read = read
}

//loops through array and displays book on page
let displayOnPage = () => {
  let mkDiv = document.createElement('div')
  myLibrary.forEach(element => {
  mkDiv.className = 'card'
    mkDiv.innerHTML = `
    <div class="delete-button-container">
        <span><i class="fa-solid fa-delete-left"></i></span>
      </div>
    <ul>
      <li>${element.author}</li>
      <li>${element.title}</li>
      <li>${element.numberOfPages}</li>
      <li>Read: <button class="card-button">${element.read}</button></li>
    </ul>`
  })
  
  cardContainer.appendChild(mkDiv)
}

//change button on cards to yes or no
document.body.addEventListener('click', e => {
  if(e.target.className === 'card-button') {
    if(e.target.innerHTML === 'No') {
      e.target.innerHTML = 'Yes'
    } else {
      e.target.innerHTML = 'No'
    }
  }
})

//clear modal form when book is submitted
let clearModal = () => {
  author.value = ''
  title.value = ''
}

let addBookToLibrary = () => {
  myLibrary.push(book)
}

modalButton.addEventListener('click', () => {
  let author = document.querySelector('#author').value
  let title = document.querySelector('#title').value
  let pagesRead = document.querySelector('#pages-read').value
  let select = document.querySelector('#read').value
  
  if(author && title && pagesRead && select) {
    let book = new Book(author, title, pagesRead, select) 
    myLibrary.push(book)
    clearModal()
    displayOnPage()
    resetView()
  } else {
    alertContainer.style.display = 'block'
    setTimeout(() => {
      alertContainer.style.display = 'none'
    }, 3000)
  }
})

let deleteCard = () => {
  document.body.addEventListener('click', function(e) {
    if(e.target.classList.contains('fa-delete-left')) {
      e.target.parentElement.parentElement.parentElement.remove()
    }
  })
}

deleteCard()