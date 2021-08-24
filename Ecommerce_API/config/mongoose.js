import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/ecommerce_api_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to database'));

db.once('open', () => {
  console.log('Connected to Database :: MongoDB');
});

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

export default db;
