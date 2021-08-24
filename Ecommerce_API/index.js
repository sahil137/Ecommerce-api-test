import express from 'express';

import indexRoute from './routes/index.js';
const app = express();
const PORT = 8000;

app.use(express.urlencoded());
app.use(express.json());

app.use('/', indexRoute);
app.get('/', (req, res) => {
  res.send('App is running');
});

app.listen(PORT, () => {
  try {
    console.log(`Server Running at port: ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
