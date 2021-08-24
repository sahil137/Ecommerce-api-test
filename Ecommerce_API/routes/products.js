import express from 'express';
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProductQuantity,
} from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/create', addProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id/update_quantity', updateProductQuantity);

export default router;
