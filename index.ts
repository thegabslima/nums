// server nodejs
import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import { validateRequestValues } from './src/validateRequestValues';
import { searchValue } from './src/searchValue';

const app = express();
app.use(bodyParser.json());

app.post('/nums', (req, res) => {
  const { nums } = req.body;
  const { valueToFind } = req.body;

  if (!nums) {
    return res.status(400).send('Valores não informados');
  }

  if(nums.some((num) => typeof num !== 'number')) {
    return res.status(400).send('Valores não numéricos não são permitidos');
  }

  const isValidatedNums = validateRequestValues(nums);

  if(isValidatedNums.length == 0) {
    return res.status(400).send('Verique se há pelo menos 5 valores numéricos');
  }

  const result = searchValue(isValidatedNums, valueToFind);

  res.send(result);
});


const server = createServer(app);

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
