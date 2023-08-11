// creating an array where the books will be stored
let myLibrary = [];

console.log(myLibrary);

//dom elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pageInput = document.getElementById('pages');
const addBtn = document.getElementById('add-button');
const readInput = document.getElementById('read');
const tableBody = document.getElementById('table-body');



//object constructor

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}; 



//a function that can take the user's input and stores the new book objects into the array
function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = Number(pageInput.value);
    const read = readInput.checked ? 'already read' : 'not read yet';

    
 // for now the value of read is 'on' each time, but I'll have to use the eventlistener above to change that
    if(!title) {
        alert('Please fill in the title!');
        return;
    } else if(!author){
        alert('Please fill in the author!');
        return;
    } else if(!pages) {
        alert('Please fill in the amount of pages!');
        return;
    };
    myLibrary.push(new Book( title, author, pages, read ));
    

    //adding the rows to the table 

    const newRow = tableBody.insertRow(); 

    const titleCell = newRow.insertCell();
    const authorCell = newRow.insertCell();
    const pageCell = newRow.insertCell();
    const readCell = newRow.insertCell();

    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(novel),1);
        tableBody.removeChild(newRow);
    });

    const novel = myLibrary[myLibrary.length - 1];

    titleCell.textContent = novel.title; 
    authorCell.textContent = novel.author;
    pageCell.textContent = novel.pages;
    readCell.textContent = novel.read;
    deleteCell.appendChild(deleteBtn);

};

//adding event listener to button 
addBtn.addEventListener('click', () => {
    // adds the book to the table
    addBookToLibrary(); 
    //clears the form after adding the book 
    form.reset();
    //closes the popup form
    togglePopup();
});


//activating the popup window
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
};


