// Javascript class

// function based
// function App(username){
//     this.username = username
// }

// App.prototype.getUserName = function(){
//     return this.username
// }

// class based
class App{
    constructor(username){
        this.username = username;
        this.users=[];
        this.test = function(){
            return "Function in Constructor"
        }
    }

    static getCity(){
        return "Brussels"
    }

    getUsername(){
        return this.username
    }

    getUsers(){
        return this.users
    }

    addUser(){
        return this.users.push(this.username)
    }

    toString(){
        return this.getUsername() + " " + App.getCity()
    }

}

let app = new App('John') // object
console.log(typeof app)
// console.log(app.getUsername())
console.log(app.toString())
app.addUser()
console.log(app.getUsers())
console.log(App.getCity())
console.log(app.test())