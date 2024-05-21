// Import styles specific to this component
import { renderTodoItem } from './TodoItem';

// Function to render the TodoList
export function renderTodoList() {
  const todoList = document.createElement('ul');
  todoList.id = 'todo-list';

  // Example of adding a Todo item
  const todoItems = ['Item 1', 'Item 2', 'Item 3'];
  todoItems.forEach((item) => {
    const todoElement = renderTodoItem(item);
    todoList.appendChild(todoElement);
  });

  document.getElementById('app').appendChild(todoList);
}
