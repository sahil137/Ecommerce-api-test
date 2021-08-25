import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to database'));

db.once('open', () => {
  console.log('Connected to Database :: MongoDB');
});

// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

export default db;
