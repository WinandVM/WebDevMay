const todoInput = document.querySelector('.todoInput');
const todoAddBtn = document.querySelector('button');
const listOfTodos = document.querySelector('.listOfTodos');
const clearSelectedTodos = document.querySelector('.clearSelectedTodos');

let completed = []
function addTodoToUI(obj) {
    const template = `<li class="list-group-item d-flex justify-content-between align-items-center" data-id="${obj.id}">
    <div class="input-group-text p-1">
        <input class="form-check-input mt-0 todocheck" type="checkbox" value="" aria-label="Checkbox for following text input">
      </div>
    <span class="todoText">${obj.title}</span>
    <span class="badge badge-danger badge-pill deleteTodoBtn"><i class="bi bi-trash-fill lead text-dark"></i></span>
</li>`
    const templateNode = document.createRange().createContextualFragment(template);
    return listOfTodos.appendChild(templateNode)
}

document.addEventListener('DOMContentLoaded',async()=>{
    let res = await fetch('http://localhost:5000/database');
    let data = await res.json();
    data.forEach(todo => {
        addTodoToUI(todo);
    } )
})

const handleCheckbox = (e)=>{
    const checkbox = e.target;
    console.log(checkbox.checked, checkbox.parentNode.parentNode, checkbox.parentNode.parentNode.dataset.id)
    if(checkbox.checked){
        completed.push(checkbox.parentNode.parentNode.dataset.id)
    }else{
        if(completed.includes(checkbox.parentNode.parentNode.dataset.id)){
            completed.splice(completed.indexOf(checkbox.parentNode.parentNode.dataset.id),1)
        }
    }
    console.log(completed)
}   


const handleDeleteTodo = async(e)=>{
    let res = await fetch(`http://localhost:5000/database/${e.target.parentNode.parentNode.dataset.id}`, {
        method: 'DELETE'
    })
    let data = await res.json();
    console.log(data)
}  

listOfTodos.addEventListener('click',(e)=>{
    if(e.target.classList.contains('todocheck')){
        handleCheckbox(e)
    }
    if(e.target.classList.contains('deleteTodoBtn') || e.target.classList.contains('bi-trash-fill')){
        console.log(e.target)
        e.target.parentNode.parentNode.remove();
        handleDeleteTodo(e)
    }
})

async function addTodoToDB(obj) {
    let response = await fetch('http://localhost:5000/database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)

    })
}

clearSelectedTodos.addEventListener('click',async (e)=>{
    e.preventDefault()
    completed.forEach(async (id)=>{
        let response = await fetch(`http://localhost:5000/database/${id}`, {
            method: 'DELETE'
        })
        let data = await response.json()
        console.log(data)
    })
})


todoAddBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(todoInput.value !=''){
        addTodoToDB({title:todoInput.value})
        addTodoToUI({title:todoInput.value})
        todoInput.value = ''
    }
})