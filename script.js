
let admin_login_btn=document.querySelector("#admin-login-btn");
let user_login_btn=document.querySelector("#user-login-btn");
let user_register_btn=document.querySelector("#user-register-btn");

let admin=document.querySelector(".admin-login");
let user_login=document.querySelector(".user-login");
let user_register=document.querySelector(".user-register");




admin_login_btn.addEventListener("click",()=>
{
 
        admin.style.display = "block";
        user_login.style.display="none";
        user_register.style.display="none";
    
})

user_login_btn.addEventListener("click",()=>
    {
  
            admin.style.display = "none";
            user_login.style.display="block";
            user_register.style.display="none";
        
    })

    user_register_btn.addEventListener("click",()=>
        {
          
                admin.style.display = "none";
                user_login.style.display="none";
                user_register.style.display="block";
            
        })