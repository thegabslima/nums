// server nodejs
import express from 'express';
import { createServer } from 'http';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = createServer(app);

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
