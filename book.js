
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






        const authors = [
          {
            name: "William Shakespeare",
            nationality: "English"
          },
          {
            name: "Jane Austen",
            nationality: "English"
          },
          {
            name: "Leo Tolstoy",
            nationality: "Russian"
          }
          
        ];

        const categories = [
          
          "Frontend Development",
          "Backend Development",
          "Data Management",
          "Functional Programming",
          "Object-Oriented Programming (OOP)",
          "Security",
          
      ];


        const books = [
          { name: "OOP", category: "programming", price: 30, author: "Robert C. Martin", isbn: "123", issueStatus: false },
          { name: "Python", category: "AI", price: 36, author: "Stuart Russell", isbn: "234", issueStatus: true },
          { name: "React", category: "programming", price: 28, author: "Kirupa Chinnathambi", isbn: "890", issueStatus: false },
          { name: "JavaScript: The Good Parts", category: "programming", price: 25, author: "Douglas Crockford", isbn: "567", issueStatus: true },
          { name: "Clean Code", category: "programming", price: 32, author: "Robert C. Martin", isbn: "456", issueStatus: false },
          { name: "Artificial Intelligence: A Modern Approach", category: "AI", price: 40, author: "Peter Norvig", isbn: "789", issueStatus: true },
          { name: "Database Systems: The Complete Book", category: "Database", price: 38, author: "Hector Garcia-Molina", isbn: "321", issueStatus: false },
          { name: "The Pragmatic Programmer", category: "programming", price: 29, author: "Andrew Hunt", isbn: "654", issueStatus: true }
        ];





function openUpdateForm(bookToUpdate) {
  let input_form = document.querySelector("#update-book-information");
  input_form.style.display = "block";

  input_form.innerHTML="";

  let heading = document.createElement('h1');
  heading.innerText="Update Book Information";
  heading.style.textAlign="center";

  let booknameInput = document.createElement('input');
  booknameInput.className="take-input";
  booknameInput.type = 'text';
  booknameInput.placeholder = bookToUpdate.name;
  booknameInput.value=bookToUpdate.name;


  let bookpriceInput = document.createElement('input');
  bookpriceInput.className="take-input";
  bookpriceInput.type = 'number';
  bookpriceInput.placeholder = bookToUpdate.price;
  bookpriceInput.value=bookToUpdate.price;


  let bookcategoryInput = document.createElement('select');
  bookcategoryInput.className="take-input";
    // Create an option for each category 
    categories.forEach(category => {
      let option = document.createElement('option');
      option.value = category // Set the value to the author's name
      option.textContent = category// Set the text content of the option
      bookcategoryInput.appendChild(option); // Append the option to the select element
    });
  bookcategoryInput.placeholder = bookToUpdate.category;
  bookcategoryInput.value=bookToUpdate.category;



  let bookAuthorInput = document.createElement('select');
  bookAuthorInput.className="take-input";
  // Create an option for each author
  authors.forEach(author => {
    let option = document.createElement('option');
    option.value = author.name; // Set the value to the author's name
    option.textContent = author.name; // Set the text content of the option
    bookAuthorInput.appendChild(option); // Append the option to the select element
  });
  bookAuthorInput.placeholder = bookToUpdate.author;
  bookAuthorInput.value=bookToUpdate.author;


  
  let submit_form_btn = document.createElement('button');
  submit_form_btn.textContent = "Update Book";
  submit_form_btn.id = "submit_form_btn";
      

  
  // Append input fields to form or wherever needed
  input_form.append(heading);
  input_form.append("Name");
  input_form.append(booknameInput);
  input_form.append("Price");
  input_form.append(bookpriceInput);
  input_form.append("Category");
  input_form.append(bookcategoryInput);
  input_form.append("Author");
  input_form.append(bookAuthorInput);
  input_form.append(submit_form_btn);


  // let submit_form_btn = document.querySelector("#submit_form_btn");
  submit_form_btn.addEventListener('click', function(event) {
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
  // Return the original bookToUpdate object
  
}




function openAddBookForm() {

  let input_addBook_form = document.querySelector("#add-book-form");
  input_addBook_form.style.display = "block";
  
  input_addBook_form.innerHTML="";
  
  let heading = document.createElement('h1');
  heading.innerText="Add New Book";
  heading.style.textAlign="center";
  
  let booknameInput = document.createElement('input');
  booknameInput.className="take-input";
  booknameInput.type = 'text';
  booknameInput.required = true;
  booknameInput.placeholder="Enter Name"


  let bookpriceInput = document.createElement('input');
  bookpriceInput.className="take-input";
  bookpriceInput.type = 'number';
  bookpriceInput.placeholder="Enter Price"
  bookpriceInput.required=true;


  let bookcategoryInput = document.createElement('select');
  bookcategoryInput.className="take-input";
  // Create an option for each category 
  categories.forEach(category => {
    let option = document.createElement('option');
    option.value = category // Set the value to the author's name
    option.textContent = category// Set the text content of the option
    bookcategoryInput.appendChild(option); // Append the option to the select element
  });
  bookcategoryInput.required=true;



  let bookAuthorInput = document.createElement('select');
  bookAuthorInput.className="take-input";
  // Create an option for each author
  authors.forEach(author => {
    let option = document.createElement('option');
    option.value = author.name; // Set the value to the author's name
    option.textContent = author.name; // Set the text content of the option
    bookAuthorInput.appendChild(option); // Append the option to the select element
  });
  bookAuthorInput.required=true;
  
  
  
  let submit_book_btn = document.createElement('button');
  submit_book_btn.textContent = "Submit Book";
  submit_book_btn.id = "submit_book_btn";
  
  
  
  // Append input fields to form or wherever needed
  input_addBook_form.append(heading);
  input_addBook_form.append("Name");
  input_addBook_form.append(booknameInput);
  input_addBook_form.append("Price");
  input_addBook_form.append(bookpriceInput);
  input_addBook_form.append("Category");
  input_addBook_form.append(bookcategoryInput);
  input_addBook_form.append("Author");
  input_addBook_form.append(bookAuthorInput);
  input_addBook_form.append(submit_book_btn);

  



  
  
  
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

  