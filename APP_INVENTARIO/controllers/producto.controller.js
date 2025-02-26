const ProductoService = require('../services/producto.service');

class ProductoController { 

    async getAllProductos(req, res) {
        try {
            const productos = await ProductoService.getAllProductos();
            res.json(productos);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    
    async getProductoById(req, res) {
        try {
            console.log(req.params);
            //Validar que el id venga en la petición
            const productoId = req.params.id;
            //QUITARLE LA NEGACIÓN de !personaId == '
            if (!productoId || productoId == '' || productoId == null || productoId == undefined) {
                throw new Error('El id del producto es requerido');
            }
            const producto = await ProductoService.getProductoById(productoId);
            res.json(producto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async createProducto(req, res) {
        try {
            if (!req.body || Object.keys(req.body).length === 0) {
                throw new Error('Los datos del producto son requeridos');
            }

            const producto = await ProductoService.createProducto(req.body);
            res.status(201).json(producto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProductoById(req, res) {
        try {
            const productoId = req.params.id;
            if (!productoId) {
                throw new Error('El ID del producto es requerido');
            }

            const producto = await ProductoService.getProductoById(productoId);
            if (!producto) {
                return res.status(404).json({ message: "Producto no encontrado" });
            }

            res.json(producto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProductoByNumSerie(req, res) {
        try {
            const numSerie = req.params.numSerie;
            if (!numSerie) {
                throw new Error('El número de serie es requerido');
            }

            const producto = await ProductoService.getProductoByNumSerie(numSerie);
            if (!producto) {
                return res.status(404).json({ message: "Producto no encontrado con ese número de serie" });
            }

            res.json(producto);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new ProductoController();