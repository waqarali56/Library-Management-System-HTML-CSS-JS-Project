export const authors = [
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

  export const categories = [
    
    "Frontend Development",
    "Backend Development",
    "Data Management",
    "Functional Programming",
    "Object-Oriented Programming (OOP)",
    "Security",
    
];


export const books = [
    { 
        name: "OOP", 
        category: "programming", 
        price: 30, 
        author: "Robert C. Martin", 
        isbn: "123", 
        issBook: { 
            issueStatus: false, 
            issueDate: "" 
        }
    },
    { 
        name: "Python", 
        category: "AI", 
        price: 36, 
        author: "Stuart Russell", 
        isbn: "234", 
        issBook: { 
            issueStatus: true, 
            issueDate: "2020-05-20T12:00:00"  // Hard-assigned past date and time
        }
    },
    { 
        name: "React", 
        category: "programming", 
        price: 28, 
        author: "Kirupa Chinnathambi", 
        isbn: "890", 
        issBook: { 
            issueStatus: false, 
            issueDate: "" 
        }
    },
    { 
        name: "JavaScript: The Good Parts", 
        category: "programming", 
        price: 25, 
        author: "Douglas Crockford", 
        isbn: "567", 
        issBook: { 
            issueStatus: true, 
            issueDate: "2020-05-21T10:30:00"  // Hard-assigned past date and time
        }
    },
    { 
        name: "Clean Code", 
        category: "programming", 
        price: 32, 
        author: "Robert C. Martin", 
        isbn: "456", 
        issBook: { 
            issueStatus: false, 
            issueDate: "" 
        }
    },
    { 
        name: "Artificial Intelligence: A Modern Approach", 
        category: "AI", 
        price: 40, 
        author: "Peter Norvig", 
        isbn: "789", 
        issBook: { 
            issueStatus: true, 
            issueDate: "2020-05-22T15:45:00"  // Hard-assigned past date and time
        }
    },
    { 
        name: "Database Systems: The Complete Book", 
        category: "Database", 
        price: 38, 
        author: "Hector Garcia-Molina", 
        isbn: "321", 
        issBook: { 
            issueStatus: false, 
            issueDate: "" 
        }
    },
    { 
        name: "The Pragmatic Programmer", 
        category: "programming", 
        price: 29, 
        author: "Andrew Hunt", 
        isbn: "654", 
        issBook: { 
            issueStatus: false, 
            issueDate: "" 
        }
    }
];




export const createInputForUpdate = (type, className, placeholder, value,required )=> {
    const input = document.createElement(type);
    input.className = className;
    input.placeholder = placeholder;
    input.value = value;
    input.required=required;
    return input;
  };


  export const createSelectForUpdate= (className, options, placeholder, value,required ) => {
    const select = document.createElement('select');
    select.className = className;
    options.forEach(optionValue => {
      const Option = document.createElement('option');
      Option.value = optionValue;
      Option.textContent = optionValue;
      select.appendChild(Option);
    });
    select.required=required;
    select.placeholder = placeholder;
    select.value = value;
    return select;
  };



  export const createInputForAddBook = (type, className, placeholder, required) => {
    const input = document.createElement(type);
    input.className = className;
    input.placeholder = placeholder;
    input.required = required;
    return input;
  };

  export const createSelectForAddBook = (className, options, required) => {
    const select = document.createElement('select');
    select.className = className;
    options.forEach(optionValue => {
      const option = document.createElement('option');
      option.value = optionValue;
      option.textContent = optionValue;
      select.appendChild(option);
    });
    select.required = required;
    return select;
  };


  export const createInputForAddCategory = (type, className, placeholder, required) => {
    const input = document.createElement(type);
    input.className = className;
    input.placeholder = placeholder;
    input.required = required;
    return input;
  };

 

  export const  createInputForAddAuthor = (type, className, placeholder, required) => {
    const input = document.createElement(type);
    input.className = className;
    input.placeholder = placeholder;
    input.required = required;
    return input;
  };