// parent
class Person{
    constructor(name,age){
        // 
        this.name = name;
        this.age = age;
    }
}


class Student extends Person{
    constructor(name,age,role){
        super(name,age);
        this.role = role;
    }
}

// child class
class Teacher extends Person{
    constructor(name,age,role){
        super(name,age)
        this.role = role;
    }
}

let student1 = new Student("John",20,"Student");
let teacher1 = new Teacher("Jane",30,"Teacher");
console.log(student1.name);