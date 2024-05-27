import axios from 'axios';

// version for mockoon
async function fetchFromApi(endpoint, options = {}) {
  const url = `http://localhost:3001/${endpoint}`; // Change to your Mockoon URL and port

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  // Default settings if none are provided
  const settings = {
    method: 'get', // default method
    headers: { ...defaultHeaders, ...options.headers }, // merge default headers with options.headers
    ...options, // spread the rest of the options
  };

  if (options.body) settings.data = options.body;

  // All returning codes from the API between 200 and 299 are considered successful!
  try {
    const response = await axios(url, settings);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(
        `Failed to fetch data from the API, status code: ${response.status}`
      );
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    console.error('Error name:', error.name);
    throw error;
  }
}

export default fetchFromApi;
