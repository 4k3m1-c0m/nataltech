const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rotas de produtos
router.get('/natal', productController.getAllProducts);
router.get('/natal/:id', productController.getProductById);
router.post('/natal', productController.createProduct);
router.put('/natal/:id', productController.updateProduct);
router.delete('/natal/:id', productController.deleteProduct);

module.exports = router;