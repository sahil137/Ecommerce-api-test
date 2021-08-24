import express from 'express';
import { addProduct, getProducts } from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/create', addProduct);

export default router;
