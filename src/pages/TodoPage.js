// Import styles specific to this page
import { renderTodoList } from '../components/TodoList';

// Function to render the TodoPage
export function renderTodoPage() {
  const app = document.getElementById('app');
  app.innerHTML = '<h1>Todo Page</h1>';
  renderTodoList();
}
