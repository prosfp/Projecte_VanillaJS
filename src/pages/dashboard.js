import { isAuthenticated } from '../auth';
import fetchFromApi from '../services';

window.onload = async function () {
  if (!isAuthenticated()) {
    window.location.href = '/login.html';
    return;
  }

  const data = await fetchFromApi('some-endpoint');
  // Render data...
};
