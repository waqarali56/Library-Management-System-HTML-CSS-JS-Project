const categories = [
          
    "Frontend Development",
    "Backend Development",
    "Data Management",
    "Functional Programming",
    "Object-Oriented Programming (OOP)",
    "Security",
    
];


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
    




       

        function deleteBook(name) {
            let index = categories.findIndex(category => category=== name);
            if (index !== -1) {
              categories.splice(index, 1);
              updateDisplay();
          
              alert("category removed successfully.");
            }
          }
        
          
          
          
          updateDisplay();
          function updateDisplay() {
            const categoryTable = document.querySelector("#category-table");
            
            categoryTable.innerHTML = ''; // Clear previous content
            
            categoryTable.innerHTML=` <tr>
            <th>Name</th>
                      <th>Action</th>
                      </tr>`;
          
                      categories.forEach(category => {
                const categoryRow = document.createElement('tr');
                // userRow.classList.add('user');
                
                let data1 = document.createElement('td');
                let actionCell = document.createElement('td');
                
                data1.innerText = category;
                
                let deleteBtn = document.createElement('button');
                deleteBtn.innerText = "Delete";
            
                
                deleteBtn.addEventListener('click',()=>{                    // why it is not working when directly write deleteBook function
                  deleteBook(category)});                  
                  
                
               
                actionCell.appendChild(deleteBtn);
    
                
                categoryRow.appendChild(data1);
                categoryRow.appendChild(actionCell);
                
                
                categoryTable.appendChild(categoryRow);
              });
            }
            







