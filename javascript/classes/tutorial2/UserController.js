class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.users = []
    }

    getusers(){
        return this.users
    }
}


class Guest extends User {
    constructor(username, password, permission) {
        super(username, password)
        this.permission = permission;
    }

    register() {
        this.users.push({
            username: this.username,
            password: this.password,
            permission: this.permission
        })
    }
}

class Admin extends User {
    constructor(username, password, permission) {
        super(username, password)
        this.permission = permission;
    }

    register() {
        this.users.push({
            username: this.username,
            password: this.password,
            permission: this.permission
        })
    }



}



let app = new Admin("admin", "admin1234", "Administrator");
app.register()

let app2 = new Guest("guest", "guest1234", "Guest");
app2.register()
console.log(app2.getusers())
console.log(app.getusers())