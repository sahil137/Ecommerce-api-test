import express from 'express';
import db from './config/mongoose.js';
import indexRoute from './routes/index.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRoute);
app.get('/', (req, res) => {
  res.send('App is running');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  try {
    console.log(`Server Running at port: ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
