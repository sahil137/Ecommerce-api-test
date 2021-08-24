import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
