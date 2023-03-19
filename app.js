//Завдання 1
/*
class User{
    #name
    constructor(name,login, age){
        this.#name = name;
        this.login = login;
        this.age = age;
    }
}
let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);
*/

// Завдання 2 - 3 

class User{
    #name
    constructor(name,login, age){
        this.#name = name;
        this.login = login;
        this.age = age;
    }
    getName(isAdmin){
        if (isAdmin==true && this.#name == ''){
            console.log(this.login)
        } else if (isAdmin== false ) {
            console.log('Permission denided');
        } else console.log(this.#name);
    }
    ChangeName( name1 , password){
        
        if (password == '123' ){
            console.log(`Name Chagnged from ${this.#name} to ${name1}`)
            this.#name = name1;
        } else console.log("Permission denied")

    }
}
let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);
user1.getName(true);
user2.getName(true);
user2.getName(false);
user1.ChangeName('Bill','123')
user1.ChangeName('Bill','12')


//Завдання 4
/*
class User{

    constructor(name,login, age){
        this.name = name;
        this.login = login;
        this.age = age;
    }
    getUserName(user){
        console.log(user.name)
    }
}
class Admin extends User {
    #isAdmin 
    constructor(name,login, age , isAdmin){
    super(name,login, age);
    this.#isAdmin = true;
}
getUserName(user){
    
    console.log(user.name)
}
}
let user1 = new User('Mike', 'MK_18', 18);
let user2 = new User('', 'NRG', 22);
let admin = new User


admin.getUserName(user1)
*/

//Завдання 5

/*
class User{
    #phone
    constructor(name,phone){
        this.name = name;
        this.#phone = phone;
    }
    getPhone(isAdmin){
        if (isAdmin==true){
            console.log(this.#phone);
        } else if (isAdmin == false){
            console.log(this.#phone.substring(0,4)+'******' + this.#phone.substring(10))
        } else console.log('error')
    }
}

let user1 = new User('Mike', '067-888-88-99');
let user2 = new User('Tom', '099-888-88-99');
user1.getPhone(true)
user1.getPhone(false)
user2.getPhone(true)
user2.getPhone(false)
*/