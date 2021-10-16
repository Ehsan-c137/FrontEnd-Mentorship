// SELECTORS
let editBtns = document.querySelectorAll('.editBtn'),
    deleteBtn = document.querySelector('.deleteBtn');
const todoAddBtn = document.querySelector('.todoAddBtn'),
      todoList = document.querySelector('.ulDiv'),
      todoInput = document.querySelector('.todoInput');
      
      

// Event listeners 
document.addEventListener('DOMContentLoaded', getTodos);
todoAddBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);
todoList.addEventListener('click', editItem);

// functions 

function addTodo (event){
   event.preventDefault();
   // todo div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('task')
   // create li
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value; 
   todoDiv.appendChild(newTodo);
   // add todo local storage
   saveLocalTodos(todoInput.value);
   // create btn div
   const btnDiv = document.createElement('div')
   btnDiv.classList.add('btn')
   todoDiv.appendChild(btnDiv);
   // edit btn
   const editBtn = document.createElement('button');
   editBtn.classList.add('editBtn')
   editBtn.innerText = 'Edit';
   btnDiv.appendChild(editBtn);
   // del button
   const deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'Delete';
   deleteBtn.classList.add('deleteBtn')
   btnDiv.appendChild(deleteBtn);
   // apend todo to list 
   todoList.appendChild(todoDiv);
   // clear todo input value 
   todoInput.value = '';

}


function deleteItem (e){
   const item = e.target;
   // detele todo
   if(item.classList[0] === 'deleteBtn'){
      const todo = item.parentElement.parentElement;
      removeLocalTodos(todo);
      todo.remove();
   }
}

function editItem (e){
      const item = e.target;

      // edit todo
      if(item.classList[0] === 'editBtn'){
         let parentEl = item.parentElement.parentElement;
         let todoItem = parentEl.querySelector('li');
         
         // create input 
         let editInput = document.createElement('input');
         editInput.className = 'edit-input';
         editInput.type = 'text';
         editInput.style.padding = '1rem';
         editInput.style.border = 'none';
         editInput.style.borderRadius = '.5rem';
        // editInput.placeholder = todoItem.textContent;
         
         if (item.textContent == 'save'){
         item.textContent = 'Edit';
         todoItem.textContent = editInput.value;
         parentEl.removeChild(editInput);
         parentEl.prepend(todoItem);
         }
          else {
            item.textContent = 'save';
            parentEl.removeChild(todoItem);
            parentEl.prepend(editInput);
         }
   }
}

function saveLocalTodos(todo){
   // cheking already have todos
   let todos;
   if(localStorage.getItem('todos') === null ){
      todos = [];
   } else {
      todos = JSON.parse(localStorage.getItem('todos'))
   }

   todos.push(todo);
   localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    // cheking already have todos
    let todos;
    if(localStorage.getItem('todos') === null ){
       todos = [];
    } else {
       todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function(todo){
        // todo div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('task')
   // create li
   const newTodo = document.createElement('li');
   newTodo.innerText = todo; 
   todoDiv.appendChild(newTodo);
   
   // create btn div
   const btnDiv = document.createElement('div')
   btnDiv.classList.add('btn')
   todoDiv.appendChild(btnDiv);
   // edit btn
   const editBtn = document.createElement('button');
   editBtn.classList.add('editBtn')
   editBtn.innerText = 'Edit';
   btnDiv.appendChild(editBtn);
   // del button
   const deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'Delete';
   deleteBtn.classList.add('deleteBtn')
   btnDiv.appendChild(deleteBtn);
   // apend todo to list 
   todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo){
    // cheking already have todos
    let todos;
    if(localStorage.getItem('todos') === null ){
       todos = [];
    } else {
       todos = JSON.parse(localStorage.getItem('todos'))
    }
    
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos',JSON.stringify(todos));
}

