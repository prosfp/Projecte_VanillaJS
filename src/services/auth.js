import fetchFromApi from './fetchAPI.js';

async function login(username, password) {
  console.log('Login of user', username);
  // Fetch all users
  const users = await fetchFromApi('users');

  console.log('users', users);

  // Find the user with the matching username
  const user = users.find((user) => user.username === username);

  // If the user exists and the password is correct
  if (user && user.password === password) {
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  }

  throw new Error('Login failed');
}

function logout() {
  // ...
}

function isAuthenticated() {
  return localStorage.getItem('user') !== null;
}

export { login, logout, isAuthenticated };
