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

const Producto = require('../models/producto.model');

class ProductoRepository {
    async getAllProductos() {
        return await Producto.find();
    }

    async getProductoById(id) {
        return await Producto.findById(id);
    }

    async getProductoByNumSerie(numSerie) {
        return await Producto.findOne({ numSerie: numSerie });
    }

    async createProducto(producto) {
        return await Producto.create(producto);
    }

    async updateProducto(id, producto) {
        return await Producto.findByIdAndUpdate(id, producto, { new: true });
    }

    async deleteProducto(id) {
        return await Producto.findByIdAndDelete(id);
    }

    async contarProductosByYear(year) {
        const fechaInicio = new Date (`${year}-01-01T00:00:00.000Z`);
        const fechaFin = new Date (`${year}-12-31T23:59:59.999Z`);
        return await Producto.countDocuments({fechaAdquisicion: {$gte: fechaInicio, $lte: fechaFin}});
    }

    async getProductoByNumSerieAndNotId(numSerie, id) {
        return await Producto.findOne({ numSerie: numSerie, _id: { $ne: id } });
    }    

    async deleteProductoByNumSerie(numSerie) {
        return await Producto.deleteOne({ numSerie: numSerie });
    }
}
// Vamos a crear un numero de inventario aleatorio, el año de adquisicion-numero consecutivo(001)
module.exports = new ProductoRepository();