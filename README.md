# Phonebook API <br>

A simple API to handle contacts

# Disclaimer

The code I'll be using is nothing new, you can find very similar code to it in my github from my days at Codaisseur and Scitodate. I'm not sure if this counts as using a boilerplate but just so you know! 

# Quickstart 🚀

* first run npm install <br>
* first run npm run start <br>

### Database 
(I'll assume that Postgres is installed on your computer already) <br>
* run createdb contacts_zsh <br>
    
# What I will be using 

  ### TypeScript
  Easier to write and understand, easier to refactor later on, less prone to errors, easier to navigate once the codebase grows.
   
  ### Express
  Lightweight, well supported, well-loved by developers.
  
  ### Postgres
  Choose Postgres mainly because the time is short and I have some experience with it. It is not a bad choice I believe: it is a relational database and although this example does not specifically call for a relational database, thinking about the future it's easy to see how it makes sense to start with it now. For example, thinking about adding sending and receiving messages from the contacts later on.
    
  ### TypeORM
  Makes talking with the databse easier and it was made to be used with TypeScript.
    
# Models
      
  ```
  Contact = {
    id: string,
    firstNames: string,
    lastName: string,
    email: string,
    phone: Phone,
    address: Address
  }

  Phone = {
    id: string,
    mobile: string,
    home: string,
    work: string,
    other: string
  }
    
  Address = {
    id: string,
    country: string,
    zip: string,
    city: string,
    street: string,
    number: string,
    addition: string
  }
