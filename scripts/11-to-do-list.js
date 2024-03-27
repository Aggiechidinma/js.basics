const todoList = [{
  name: 'make dinner',
  dueDate: '2024-03-19',
   
}, {
  name: 'sleep',
  dueDate: '2024-03-19',
   }];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index) {
      
      const { name, dueDate }= todoObject;
     
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
          <button onclick="
          todoList.splice(${index}, 1);
          renderTodoList();
          " class="delete-button">Delete</button>
        `;
      todoListHTML += html;
    });
    
    console.log(todoListHTML);
    
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

}



function addTodo() {

 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;

 todoList.push({
  name,
  dueDate});

 console.log(todoList);
 inputElement.value = '';

 renderTodoList();
}