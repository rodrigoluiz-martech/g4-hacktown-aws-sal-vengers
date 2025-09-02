const api = async (event, context) => {
  const { httpMethod, path } = event;
  
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  };

  if (httpMethod === 'OPTIONS') {
    return response;
  }

  try {
    switch (path) {
      case '/':
        response.body = JSON.stringify({ message: 'G4 Tickets Platform API' });
        break;
      case '/health':
        response.body = JSON.stringify({ status: 'healthy' });
        break;
      default:
        response.statusCode = 404;
        response.body = JSON.stringify({ error: 'Not Found' });
    }
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify({ error: 'Internal Server Error' });
  }

  return response;
};

module.exports = { api };