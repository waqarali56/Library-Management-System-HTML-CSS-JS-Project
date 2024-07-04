



import { 
  books, 
  categories, 
  authors,
  createInputForUpdate, 
  createSelectForUpdate,
  createInputForAddBook,
  createSelectForAddBook 
} from './source.js';





let lastisbn=700;

let admin_log_out_btn=document.querySelector("#admin-log-out-btn");

admin_log_out_btn.addEventListener("click",()=>
    {
     
        window.location.href = "index.html"; 
        
    })

 let goto_dashboard_btn=document.querySelector("#goto-dashboard");

    goto_dashboard_btn.addEventListener("click",()=>
        {
            window.location.href = "admin_dashboard.html"; 
        })

        let goto_registered_users_btn =document.querySelector("#goto-registered-Users")
        goto_registered_users_btn.addEventListener("click", () => {
            
            window.location.href = "registerUser.html";
        });
    
        let goto_book_btn =document.querySelector("#goto-book")
        goto_book_btn.addEventListener("click", () => {
            
            window.location.href = "book.html";
        });
    
        let goto_issued_btn =document.querySelector("#goto-issue-book")
        goto_issued_btn.addEventListener("click", () => {
            
            window.location.href = "book_issued.html";
        });

        let goto_category_btn =document.querySelector("#goto-category")
    goto_category_btn.addEventListener("click", () => {
        
        window.location.href = "Category.html";
    });
   
    

    let goto_author_btn =document.querySelector("#goto-author")
    goto_author_btn .addEventListener("click", () => {
        
        window.location.href = "Author.html";
    });





    
    
    
    function openUpdateForm(bookToUpdate) {
      const input_form = document.querySelector("#update-book-information");
      input_form.style.display = "block";
      input_form.innerHTML = "";
      
      const heading = document.createElement('h1');
      heading.innerText = "Update Book Information";
      heading.style.textAlign = "center";
      
      const booknameInput = createInputForUpdate('input', 'take-input', bookToUpdate.name, bookToUpdate.name,true);
      const bookpriceInput = createInputForUpdate('input', 'take-input', bookToUpdate.price, bookToUpdate.price,true);
      bookpriceInput.type = 'number';
      
      const bookcategoryInput = createSelectForUpdate('take-input', categories, bookToUpdate.category, bookToUpdate.category,true);
      alert("pppppppp");
      const bookAuthorInput = createSelectForUpdate('take-input', authors.map(author => author.name), bookToUpdate.author, bookToUpdate.author,true);
      
      const submit_form_btn = document.createElement('button');
      submit_form_btn.textContent = "Update Book";
      submit_form_btn.id = "submit_form_btn";
      
      const elements = [
        heading,
        "Name", booknameInput,
        "Price", bookpriceInput,
        "Category", bookcategoryInput,
        "Author", bookAuthorInput,
        submit_form_btn
      ];
    
      elements.forEach(el => {
        if (typeof el === 'string') {
        input_form.appendChild(document.createTextNode(el));
      } else {
            input_form.appendChild(el);
        }
      });
      
    
      // let submit_form_btn = document.querySelector("#submit_form_btn");
      input_addBook_form.addEventListener('submit', function(event) {
    event.preventDefault();
    bookToUpdate.name = booknameInput.value;
    bookToUpdate.category = bookcategoryInput.value;
    bookToUpdate.price = bookpriceInput.value;
    bookToUpdate.author = bookAuthorInput.value;
    

    alert("book ubdated sucessfully");
    input_form.style.display="none";
    const bookTable = document.querySelector("#book-table");
    bookTable.style.display='table';
    let add_book_btn = document.querySelector("#add-book");
    add_book_btn.style.display='block';

    updateDisplay();

  });

    }
    
    


    
    
    function openAddBookForm() {
      const input_addBook_form = document.querySelector("#add-book-form");
      input_addBook_form.style.display = "block";
      input_addBook_form.innerHTML = "";
    
   
      
      const heading = document.createElement('h1');
      heading.innerText = "Add New Book";
      heading.style.textAlign = "center";
    
      const booknameInput = createInputForAddBook('input', 'take-input', 'Enter Name', true);
      const bookpriceInput = createInputForAddBook('input', 'take-input', 'Enter Price', true);
      bookpriceInput.type = 'number';
    
      const bookcategoryInput = createSelectForAddBook('take-input', categories, true);
      const bookAuthorInput = createSelectForAddBook('take-input', authors.map(author => author.name), true);
    
      const submit_book_btn = document.createElement('button');
      submit_book_btn.textContent = "Submit Book";
      submit_book_btn.id = "submit_book_btn";
    
      const elements = [
        heading,
        "Name", booknameInput,
        "Price", bookpriceInput,
        "Category", bookcategoryInput,
        "Author", bookAuthorInput,
        submit_book_btn
      ];
    
      elements.forEach(el => {
        if (typeof el === 'string') {
          input_addBook_form.appendChild(document.createTextNode(el));
        } else {
          input_addBook_form.appendChild(el);
        }
    });
    
     
  // let submit_form_btn = document.querySelector("#submit_form_btn");
  input_addBook_form.addEventListener('submit', function(event) {
    event.preventDefault();
    
   lastisbn+=4;
    
    let newBook = {
      name: booknameInput.value,
      category: bookcategoryInput.value,
      price: bookpriceInput.value,
      author: bookAuthorInput.value,
      isbn: lastisbn.toString(),
      issueStatus: false
    };
    
    books.push(newBook);
    alert("book added sucessfully");
    input_addBook_form.style.display="none";
    const bookTable = document.querySelector("#book-table");
    bookTable.style.display='table';
    let add_book_btn = document.querySelector("#add-book");
    add_book_btn.style.display='block';
    
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
    
    openUpdateForm(bookToUpdate);
    
  }
}



updateDisplay();
function updateDisplay() {
  const bookTable = document.querySelector("#book-table");
  
  bookTable.innerHTML = ''; // Clear previous content
  
  bookTable.innerHTML=` <tr>
  <th>ISBN</th>
  <th>Book Name</th>
  <th>Category</th>
            <th>Price</th>
            <th>Author</th>
            <th>Action</th>
            </tr>`;
            
            books.forEach(book => {
              const bookRow = document.createElement('tr');
              // bookRow.classList.add('book');
              
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
            let add_book_btn = document.querySelector("#add-book");
            add_book_btn.style.display='none';
            updateBook(book.isbn);
        })
        
        actionCell.appendChild(deleteBtn);
      actionCell.appendChild(updateBtn);
      
      bookRow.appendChild(data5);
      bookRow.appendChild(data1);
      bookRow.appendChild(data2);
      bookRow.appendChild(data3);
      bookRow.appendChild(data4);
      bookRow.appendChild(actionCell);
      bookTable.appendChild(bookRow);
    });
  }
  


  
  
  
  let add_book_btn = document.querySelector("#add-book");
  
  add_book_btn.addEventListener('click',()=>
    {
    const bookTable = document.querySelector("#book-table");
    bookTable.style.display="none";
    add_book_btn.style.display='none';
 
    openAddBookForm();
  })

  