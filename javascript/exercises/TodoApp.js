// TodoApplication.js

function TodoApplication(){
    this.todos=[]
}

TodoApplication.prototype.addTodo = function(todo){
    this.todos.push(todo)
}

TodoApplication.prototype.showTasks = function(){
    console.log(this.todos)
}

TodoApplication.prototype.deleteTodo = function(value){
    let temp = []
    this.todos.forEach(todo=>{
        temp.push(todo.toLowerCase())
    })
    // let index = this.todos.indexOf(value)
    let index = temp.indexOf(value.toLowerCase())
    console.log("Todo found: ", index, temp[index])
    temp.splice(index,1)
   // console.log(temp)
    this.todos = [...temp]
    // if(index > -1){
    //     console.log("Todo found: ", index, this.todos[index])
    //     this.todos.splice(index,1)
    // }
}


let app = new TodoApplication()

app.addTodo('Learn JS')
// app.showTasks()
app.addTodo('Learn React')
// app.showTasks()
app.addTodo('Learn Node')
app.deleteTodo('Learn JS')
app.deleteTodo('learn node')
app.showTasks();