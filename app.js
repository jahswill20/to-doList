// Function to get TODOS from local storage
function getTodosFromLocalStorage() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

// Function to save TODOS to local storage
function saveTodosToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Function to render TODOS
function renderTodos() {
    let todos = getTodosFromLocalStorage();
   let listContainer = document.getElementById("list-item");

    // Clear existing list items
    listContainer.innerHTML = "";

    // Render each todo
    todos.forEach(function (todoText) {
        let listItem = document.createElement("li");
        listItem.innerHTML = todoText;

        let deleteButton = createDeleteButton();
        listItem.appendChild(deleteButton);

        listContainer.appendChild(listItem);
    });
}

// Initial rendering on page load
renderTodos();

// Modify the addTodo function to update local storage
function addTodo() {
    let inputValue = document.getElementById("input-Todo").value;
    if (inputValue === "") {
        alert("You must write something!");
    } else {
        let todos = getTodosFromLocalStorage();
        todos.push(inputValue);
        saveTodosToLocalStorage(todos);

        renderTodos(); // Update the displayed TODOS

        document.getElementById("input-Todo").value = "";
    }
}

// Function to create delete button
function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
        let listItem = this.parentNode;
        let todos = getTodosFromLocalStorage();
        let index = Array.from(listItem.parentNode.children).indexOf(listItem);
        todos.splice(index, 1);
        saveTodosToLocalStorage(todos);
        renderTodos(); // Update the displayed TODOS
    };
    return deleteButton;
}
// function to clear all
 function clearList(){
    var  listItem = document.getElementById("list-item");
    listItem.innerHTML = '';
    localStorage.clear();
 }



  