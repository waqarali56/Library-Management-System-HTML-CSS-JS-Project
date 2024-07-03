

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
    









    const books = [
      { 
          name: "OOP", 
          category: "programming", 
          price: 30, 
          author: "Robert C. Martin", 
          isbn: "123", 
          issBook: { 
              issueStatus: true, 
              returnDate: "" 
          }
      },
      { 
          name: "Python", 
          category: "AI", 
          price: 36, 
          author: "Stuart Russell", 
          isbn: "234", 
          issBook: { 
              issueStatus: false, 
              returnDate: "2020-05-20T12:00:00"  // Hard-assigned past date and time
          }
      },
      { 
          name: "React", 
          category: "programming", 
          price: 28, 
          author: "Kirupa Chinnathambi", 
          isbn: "890", 
          issBook: { 
              issueStatus: true, 
              returnDate: "" 
          }
      },
      { 
          name: "JavaScript: The Good Parts", 
          category: "programming", 
          price: 25, 
          author: "Douglas Crockford", 
          isbn: "567", 
          issBook: { 
              issueStatus: false, 
              returnDate: "2020-05-21T10:30:00"  // Hard-assigned past date and time
          }
      },
      { 
          name: "Clean Code", 
          category: "programming", 
          price: 32, 
          author: "Robert C. Martin", 
          isbn: "456", 
          issBook: { 
              issueStatus: true, 
              returnDate: "" 
          }
      },
      { 
          name: "Artificial Intelligence: A Modern Approach", 
          category: "AI", 
          price: 40, 
          author: "Peter Norvig", 
          isbn: "789", 
          issBook: { 
              issueStatus: false, 
              returnDate: "2020-05-22T15:45:00"  // Hard-assigned past date and time
          }
      },
      { 
          name: "Database Systems: The Complete Book", 
          category: "Database", 
          price: 38, 
          author: "Hector Garcia-Molina", 
          isbn: "321", 
          issBook: { 
              issueStatus: true, 
              returnDate: "" 
          }
      },
      { 
          name: "The Pragmatic Programmer", 
          category: "programming", 
          price: 29, 
          author: "Andrew Hunt", 
          isbn: "654", 
          issBook: { 
              issueStatus: true, 
              returnDate: "" 
          }
      }
  ];
  
 
  





return_Book_Display();
  
  function return_Book_Display()
  {
    const bookTable = document.querySelector("#book-table");
  
  bookTable.innerHTML = ''; // Clear previous content
  
  bookTable.innerHTML=` <tr>
  <th>ISBN</th>
  <th>Book Name</th>
  <th>Category</th>
            <th>Price</th>
            <th>Author</th>
            <th>ReturnDate</th>
            </tr>`;

  books.forEach(book => {

    if(book.issBook.issueStatus===false)
      {
      const bookRow = document.createElement('tr');
        
      let data1 = document.createElement('td');
      let data2 = document.createElement('td');
      let data3 = document.createElement('td');
      let data4 = document.createElement('td');
      let data5 = document.createElement('td');
      let data6 = document.createElement('td');
      
      
      data1.innerText = book.name;
      data2.innerText = book.category;
      data3.innerText = book.price;
      data4.innerText = book.author;
      data5.innerText = book.isbn;
      data6.innerText = book.issBook.returnDate;

      bookRow.appendChild(data5);
      bookRow.appendChild(data1);
      bookRow.appendChild(data2);
      bookRow.appendChild(data3);
      bookRow.appendChild(data4);
      bookRow.appendChild(data6);
      bookTable.appendChild(bookRow);

      }


    });
  }
  
  
// Initial display update
