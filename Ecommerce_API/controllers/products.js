import Product from '../models/Product.js';
import mongoose from 'mongoose';

// to get all products from db
export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// to add a new product to db
export const addProduct = async (req, res) => {
  const { name, id, quantity } = req.body;
  const newProduct = new Product({
    name,
    id,
    quantity,
  });
  try {
    await newProduct.save();
    res.status(200).json({ newProduct });
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

// to delete a product from db
export const deleteProduct = async (req, res) => {
  const { id } = req.params; // require id from request parameter

  // check if id is a valid or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'No product with that id' });
  }

  await Product.findByIdAndRemove(id);
  res.json({ message: 'Product Deleted Successfully' });
};

export const updateProductQuantity = async (req, res) => {
  const { number } = req.query;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'No product with that id' });
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { $inc: { quantity: number } },
    { new: true }
  );
  res.json(updatedProduct);
};
