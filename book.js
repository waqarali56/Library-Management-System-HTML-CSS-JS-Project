

const books = [
  { name: "OOP", category: "programming", price: 30, author: "Robert C. Martin", isbn: "123" },
  { name: "python", category: "AI", price: 36, author: "Stuart Russell", isbn: "234" },
  { name: "React", category: "programming", price: 28, author: "Kirupa Chinnathambi", isbn: "890" }
];

function openForm(bookToUpdate) {
  let input_form = document.querySelector("#update-book-information");
  input_form.style.display = "inline-block";

  
  let booknameInput = document.createElement('input');
  booknameInput.type = 'text';
  booknameInput.placeholder = bookToUpdate.name;

  let bookcategoryInput = document.createElement('input');
  bookcategoryInput.type = 'text';
  bookcategoryInput.placeholder = bookToUpdate.category;

  let bookpriceInput = document.createElement('input');
  bookpriceInput.type = 'number';
  bookpriceInput.placeholder = bookToUpdate.price;

  let bookAuthorInput = document.createElement('input');
  bookAuthorInput.type = 'text';
  bookAuthorInput.placeholder = bookToUpdate.author;


  
  // Append input fields to form or wherever needed
  
  input_form.prepend(booknameInput);
  input_form.prepend(bookcategoryInput);
  input_form.prepend(bookpriceInput);
  input_form.prepend(bookAuthorInput);


  let submit_form_btn = document.querySelector("#submit_form_btn");
  submit_form_btn.addEventListener('click', function(event) {
    event.preventDefault();
    bookToUpdate.name = booknameInput.value;
    bookToUpdate.category = bookcategoryInput.value;
    bookToUpdate.price = bookpriceInput.value;
    bookToUpdate.author = bookAuthorInput.value;
   

    alert("book ubdated sucessfully");
    input_form.style.display="none";
    const bookTable = document.querySelector("#book-table");
    bookTable.style.display='block';

    updateDisplay();

  });
  // Return the original bookToUpdate object
  
}






function deleteBook(isbn) {
  let index = books.findIndex(book => book.isbn === isbn);
  if (index !== -1) {
    books.splice(index, 1);
    updateDisplay();

    alert("Book deleted successfully.");
  }
}
function updateBook(isbn) {
  let index = books.findIndex(book => book.isbn === isbn);
  if (index !== -1) {
    let bookToUpdate = books[index];
    openForm(bookToUpdate);
   
  }
}



updateDisplay();
function updateDisplay() {
  const bookTable = document.querySelector("#book-table");
  
  bookTable.innerHTML = ''; // Clear previous content
  
  bookTable.innerHTML=` <tr>
  <th>Book Name</th>
  <th>Category</th>
            <th>Price</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Action</th>
            </tr>`;

  books.forEach(book => {
      const bookRow = document.createElement('tr');
      bookRow.classList.add('book');
      
      let data1 = document.createElement('td');
      let data2 = document.createElement('td');
      let data3 = document.createElement('td');
      let data4 = document.createElement('td');
      let data5 = document.createElement('td');
      let actionCell = document.createElement('td');
      
      data1.innerText = book.name;
      data2.innerText = book.category;
      data3.innerText = book.price;
      data4.innerText = book.author;
      data5.innerText = book.isbn;
      
      let deleteBtn = document.createElement('button');
      let updateBtn = document.createElement('button');
      deleteBtn.innerText = "Delete";
      updateBtn.innerText="Update";
      
      deleteBtn.addEventListener('click',()=>{                    // why it is not working when directly write deleteBook function
        deleteBook(book.isbn)});                  
        
        updateBtn.addEventListener("click",()=>
          {
          bookTable.style.display = 'none';
          updateBook(book.isbn);
        })
     
      actionCell.appendChild(deleteBtn);
      actionCell.appendChild(updateBtn);
      
      bookRow.appendChild(data1);
      bookRow.appendChild(data2);
      bookRow.appendChild(data3);
      bookRow.appendChild(data4);
      bookRow.appendChild(data5);
      bookRow.appendChild(actionCell);
      
      
      bookTable.appendChild(bookRow);
    });
  }
  


  
  
  
  
// Initial display update
