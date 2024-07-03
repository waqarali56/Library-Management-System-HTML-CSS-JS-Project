
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
    




        const users = [
            {
                name: "John Doe",
                CNIC:"34109-958899-9",
                mobilePhone: "123-456-7890",
                email: "johndoe@example.com",
                password: "password123",
                gender: "male"
            },
            {
                 name: "Jane Smith",
                CNIC:"31609-958899-9",
                mobilePhone: "098-765-4321",
                email: "janesmith@example.com",
                password: "password456",
                gender: "female"
            },
            {

                name: "Sam Johnson",
                CNIC:"31109-958899-9",
                mobilePhone: "555-555-5555",
                email: "samjohnson@example.com",
                password: "password789",
                gender: "male"
            },
            {
                name: "Emily Brown",
                CNIC:"34509-958899-9",
                mobilePhone: "444-444-4444",
                email: "emilybrown@example.com",
                password: "password101",
                gender: "female"
            }
        ];



        function deleteBook(cnic) {
            let index = users.findIndex(user => user.CNIC === cnic);
            if (index !== -1) {
              users.splice(index, 1);
              updateDisplay();
          
              alert("User removed successfully.");
            }
          }
        
          
          
          
          updateDisplay();
          function updateDisplay() {
            const userTable = document.querySelector("#user-table");
            
            userTable.innerHTML = ''; // Clear previous content
            
            userTable.innerHTML=` <tr>
            <th>Name</th>
            <th>CNIC</th>
            <th>MobilePhone</th>
                      <th>Gender</th>
                      <th>Action</th>
                      </tr>`;
          
            users.forEach(user => {
                const userRow = document.createElement('tr');
                // userRow.classList.add('user');
                
                let data1 = document.createElement('td');
                let data2 = document.createElement('td');
                let data3 = document.createElement('td');
                let data4 = document.createElement('td');
                let actionCell = document.createElement('td');
                
                data1.innerText = user.name;
                data2.innerText = user.CNIC;
                data3.innerText = user.mobilePhone;
                data4.innerText = user.gender;
                
                let deleteBtn = document.createElement('button');
                deleteBtn.innerText = "Delete";
            
                
                deleteBtn.addEventListener('click',()=>{                    // why it is not working when directly write deleteBook function
                  deleteBook(user.CNIC)});                  
                  
                
               
                actionCell.appendChild(deleteBtn);
    
                
                userRow.appendChild(data1);
                userRow.appendChild(data2);
                userRow.appendChild(data3);
                userRow.appendChild(data4);
                userRow.appendChild(actionCell);
                
                
                userTable.appendChild(userRow);
              });
            }
            







