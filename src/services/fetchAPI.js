async function fetchFromApi(endpoint, options = {}) {
  const url = `http://localhost:3001/${endpoint}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  // Default settings if none are provided
  const settings = {
    method: 'GET', // default method
    headers: { ...defaultHeaders, ...options.headers }, // merge default headers with options.headers
    ...options, // spread the rest of the options
  };

  if (options.body) settings.body = JSON.stringify(options.body);

  try {
    const response = await fetch(url, settings);
    console.log('response', response);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    return response.json();
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    console.error('Error name:', error.name);
    throw error;
  }
}

export default fetchFromApi;
