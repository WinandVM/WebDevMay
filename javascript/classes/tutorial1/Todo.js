// Todo Application

class TodoApplication{
    constructor(){
        this.todos=[];
    }

    // addTodo
    addTodo(todo){
        return this.todos.push(todo)
    }

    // getTodos - > all todos
    getTodos(){
        return this.todos;
    }

    // getTodoByValue - > single todo
    getTodoByValue(todo){
        let single_todo = this.todos.filter(val => val.toLowerCase().trim() == todo.toLowerCase().trim())
        console.log(single_todo)
    }

    // deleteTodoByValue - > delete todo
    deleteTodoByValue(todo){
        let index = this.todos.indexOf(todo);
        console.log(this.todos[index])
        this.todos.splice(index,1)
    }

    // toString - > display my todos
    toString(){
        this.todos.forEach((todo,index)=>{
            console.log(`#${index} Task: ${todo}`)
        })
    }
}

// create a new todo application
let app =  new TodoApplication();
app.addTodo("Go to the store");
app.addTodo("Finish my homework");
app.addTodo("Learn JavaScript");
// console.log(app.getTodos());
app.toString();
app.getTodoByValue("                 finish my homework");
app.deleteTodoByValue("Finish my homework");
app.toString();