const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");
const todoForm = document.querySelector("form");

let todoArr = populateToDos();
console.log(todoArr);
updateTodo();


function createToDo(toDoText, toDoIndex){
    const toDoLi = document.createElement("li");
    const toDoID = "toDo-"+toDoIndex;

    toDoLi.className = "todo";
    
    toDoLi.innerHTML = `
        <input type="checkbox" id="${toDoID}">
        <label class ="custom-checkbox" for="${toDoID}"> 
            <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
        </label>
        <label for="${toDoID}" class="todo-text">
            ${toDoText}
        </label>
        <button class="delete-button">
            <svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        </button>
    `

    const deleteButton = toDoLi.querySelector(".delete-button");
    deleteButton.addEventListener("click", ()=>{
        deleteToDoItem(toDoIndex);
    })
    return toDoLi;
}

function addTodo(){
    const toDoText = todoInput.value.trim();

    if(toDoText.length > 0){
        todoArr.push(toDoText);
        updateTodo();
        saveToDos();
        todoInput.value = "";
    }

}

function deleteToDoItem(toDoIndex){
    todoArr = todoArr.filter((_, i)=> i !== toDoIndex);
    saveToDos();
    updateTodo();
}

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
})

function updateTodo(){
    todoListUL.innerHTML = "";
    todoArr.forEach((todo,toDoIndex)=>{
        toDoItem = createToDo(todo,toDoIndex);
        todoListUL.append(toDoItem);
    })
}

function saveToDos(){
    const todosJson = JSON.stringify(todoArr);
    localStorage.setItem("todos", todosJson);
}

function populateToDos(){
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos);
}