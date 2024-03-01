// server nodejs
import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});


const server = createServer(app);

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
