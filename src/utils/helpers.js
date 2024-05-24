// Helper functions

// Update local storage with new user todos or tasks
export function updateLocalStorage(userId, todos) {
  console.log('Updating local storage', userId, todos);
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.id === userId) {
    user.userTasks = todos;
    localStorage.setItem('user', JSON.stringify(user));
  }
}
// Update local storage with the new task informations (edit!)
export function updateLocalTask(taskId, task) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    const { userTasks } = user;
    const taskIndex = userTasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      userTasks[taskIndex] = task;
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
}
