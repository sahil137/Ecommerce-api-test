import express from 'express';

import productRoutes from './products.js';
import homeRoute from './home.js';
const router = express.Router();

router.use('/', homeRoute);
router.use('/products', productRoutes);

export default router;
