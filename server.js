// node web server

import { createServer } from 'node:http';

export const server = createServer((request, response) => {
  // .. write responses

  if (request.url === '/hello') {
    response.statusCode = 200; // o.k.
    response.end('Hello World');
    // hier holen wir demnächst das Zeug aus der DB
  } else if (request.url === '/bye') {
    response.statusCode = 200; // o.k.
    response.end('Bye World');
  } else {
    response.statusCode = 404;
    response.end('Not found');
  }
});
