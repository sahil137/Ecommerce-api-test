import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

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
