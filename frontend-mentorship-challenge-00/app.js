// SELECTORS
const editBtn = document.querySelector('.editBtn'),
      deleteBtn = document.querySelector('.deleteBtn'),
      todoAddBtn = document.querySelector('.todoAddBtn'),
      todoList = document.querySelector('.ulDiv'),
      todoInput = document.querySelector('.todoInput');
// Event listeners 
todoAddBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem)

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
   // 
}

function deleteItem (e){
   const item = e.target;
   // detele todo
   if(item.classList[0] === 'deleteBtn'){
      const todo = item.parentElement.parentElement;
      todo.remove();
   }
}