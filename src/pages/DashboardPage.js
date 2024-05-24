// src/pages/Dashboard.js

import { renderEditModal } from '../components/EditModal';
import { renderTodoList } from '../components/TodoList';
import { deleteTask, getAllTasks } from '../services/tasks';
//import { displayErrorMessage } from '../components/errorMessage';
import { updateLocalStorage } from '../utils/helpers';

export async function renderDashboardPage() {
  // Retrieve the user object from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Ensure the user object is present
  if (!user) {
    console.error('User not found in localStorage');
    return;
  }

  // Extract the userId from the user object
  const userId = user.id;

  // Create a welcome message
  const welcomeMessage = `Welcome, ${user.firstName}!`;

  // Insert the welcome message into your dashboard's HTML
  const welcomeElement = document.getElementById('welcome'); // replace 'welcome' with the actual id of your welcome message element
  welcomeElement.textContent = welcomeMessage;

  // Render the todo lists through the renderTodoList function / component
  const todoListContainer = document.getElementById('taskLists');

  // Function to handle the editing of a task. This will be passed to the renderTodoList function
  async function handleEdit(todo) {
    // Edit means next steps:
    // 1. Open the modal
    // 2. Populate the modal with the task data
    // 3. Update the task data
    // 4. Save the updated task data
    // 5. Close the modal
    // 6. Re-render the todo list
    // 7. Update the DB through API calls
    // 8. Update the local storage

    // Use the modal to edit the task
    console.log('editing!', todo);
    renderEditModal(todo, render);
    render();
  }

  // Function to handle the deletion of a task. This will be passed to the renderTodoList function
  async function handleDelete(todoId) {
    try {
      console.log('Deleting task', todoId);

      await deleteTask(userId, todoId);

      // Retrieve the todo lists from the user object
      let todos = user.userTasks;
      // we filter out the deleted task from the todos array
      todos = todos.filter((todo) => todo.id !== todoId);
      updateLocalStorage(userId, todos);
      render();
    } catch (error) {
      console.error(error);
    }
  }

  // Every time the todos are updated, re-render the todo list
  async function render() {
    // When we loggin, we alreay fetched all the user information.
    // Now we can simply check check if there's a user with userTasks

    if (!user.userTasks || user.userTasks.length === 0) {
      console.log('No user tasks found in localStorage');
      return;
    }

    todoListContainer.innerHTML = '';

    // At this point we must be sure that the todos in our db are updated
    // We call the API to get the updated todos
    const todos = await getAllTasks(userId);
    renderTodoList(todos, 'taskLists', handleEdit, handleDelete);
  }

  render();
}
