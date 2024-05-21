// Import styles specific to this component

// Function to render a single TodoItem
export function renderTodoItem(item) {
  const todoItem = document.createElement('li');
  todoItem.textContent = item;
  return todoItem;
}
