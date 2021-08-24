import express from 'express';
import {
  addProduct,
  deleteProduct,
  getProducts,
} from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/create', addProduct);
router.delete('/:id', deleteProduct);

export default router;
