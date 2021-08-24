import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
