const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/producto.controller');

router.get('/', ProductoController.getAllProductos);
router.get('/id/:id', ProductoController.getProductoById);
// Crear un nuevo producto
router.post('/', ProductoController.createProducto);

// Obtener un producto por ID
router.get('/:id', ProductoController.getProductoById);

// Obtener un producto por número de serie
router.get('/numSerie/:numSerie', ProductoController.getProductoByNumSerie);



module.exports = router;

