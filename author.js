
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






          function openAddAuthorForm() {

            let input_addAuthor_form = document.querySelector("#add-author-form");
            input_addAuthor_form.style.display = "block";
            
            input_addAuthor_form.innerHTML="";
            
            let heading = document.createElement('h1');
            heading.innerText="Add New Author";
            heading.style.textAlign="center";
            
            let authornameInput = document.createElement('input');
            authornameInput.className="take-input";
            authornameInput.type = 'text';
            authornameInput.required = true;
            authornameInput.placeholder="Enter Name";


            let authornationalityInput = document.createElement('input');
            authornationalityInput.className="take-input";
            authornationalityInput.type = 'text';
            authornationalityInput.required = true;
            authornationalityInput.placeholder="Enter Nationality";


          
          
            
            
            let submit_author_btn = document.createElement('button');
            submit_author_btn.textContent = "Submit Author";
            submit_author_btn.id = "submit_author_btn";
            
            
            
            // Append input fields to form or wherever needed
            input_addAuthor_form.append(heading);
            input_addAuthor_form.append("Name");
            input_addAuthor_form.append(authornameInput);
            input_addAuthor_form.append("Nationality");
            input_addAuthor_form.append(authornationalityInput);
          
            input_addAuthor_form.append(submit_author_btn);
          
            
          
          
          
            
            
            
            // let submit_form_btn = document.querySelector("#submit_form_btn");
            input_addAuthor_form.addEventListener('submit', function(event) {
              event.preventDefault();
              
              
              let newAuthor = {
                name: authornameInput.value,
                nationality: authornationalityInput.value
                
              };
              
              authors.push(newAuthor);
              
             
                
                
              alert("Author added sucessfully");
              input_addAuthor_form.style.display="none";
              const Authortable = document.querySelector("#author-table");
              Authortable.style.display='table';
              let add_author_btn = document.querySelector("#add-author-btn");
              add_author_btn.style.display='block';
              
              updateDisplay();
              
            });
            // Return the original bookToUpdate object
            
          }
        




        function deleteBook(name) {
            let index = authors.findIndex(author => author.name === name);
            if (index !== -1) {
              authors.splice(index, 1);
              updateDisplay();
          
              alert("author removed successfully.");
            }
          }
        
          
          
          
          updateDisplay();
          function updateDisplay() {
            const authorTable = document.querySelector("#author-table");
            
            authorTable.innerHTML = ''; // Clear previous content
            
            authorTable.innerHTML=` <tr>
            <th>Name</th>
            <th>Nationality</th>
                      <th>Action</th>
                      </tr>`;
          
            authors.forEach(author => {
                const authorRow = document.createElement('tr');
                // userRow.classList.add('user');
                
                let data1 = document.createElement('td');
                let data2 = document.createElement('td');
                let actionCell = document.createElement('td');
                
                data1.innerText = author.name;
                data2.innerText = author.nationality;
                
                let deleteBtn = document.createElement('button');
                deleteBtn.innerText = "Delete";
            
                
                deleteBtn.addEventListener('click',()=>{                    // why it is not working when directly write deleteBook function
                  deleteBook(author.name)});                  
                  
                
               
                actionCell.appendChild(deleteBtn);
    
                
                authorRow.appendChild(data1);
                authorRow.appendChild(data2);
                authorRow.appendChild(actionCell);
                
                
                authorTable.appendChild(authorRow);
              });
            }






            let add_author_btn = document.querySelector("#add-author-btn");
  
            add_author_btn.addEventListener('click',()=>
              {
              const authorTable = document.querySelector("#author-table");
              authorTable.style.display="none";
              add_author_btn.style.display='none';
           
              openAddAuthorForm();
            })
            







