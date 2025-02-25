const ProductoRepository = require('../repositories/producto.repository');
const Validaciones = require('../utils/validaciones');

class ProductoService { 
    async getAllProductos() {
        return await ProductoRepository.getAllProductos();
    }

    async getProductoById(id) {
        const producto = await ProductoRepository.getProductoById(id);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
    }

    async createProducto(producto) {
        // ✅ 1️⃣ Validar que todos los campos requeridos estén presentes
        if (!producto.nombre || !producto.precio || !producto.fechaAdquisicion || !producto.numSerie) {
            throw new Error('Todos los campos son requeridos');
        }

        // ✅ 2️⃣ Verificar que el número de serie sea único
        const productoByNumSerie = await ProductoRepository.getProductoByNumSerie(producto.numSerie);
        if (productoByNumSerie) {
            throw new Error('El número de serie ya existe');
        }

        // ✅ 3️⃣ Validar que el precio sea mayor a 0
        if (producto.precio < 1) {
            throw new Error('El precio debe ser mayor a 0');
        }

        // ✅ 4️⃣ Validar que la fecha de adquisición sea válida
        if (!Validaciones.esFechaValida(producto.fechaAdquisicion)) {
            throw new Error('La fecha de adquisición no es válida');
        }

        // ✅ 5️⃣ Generar automáticamente el número de inventario
        const yearAdquisicion = producto.fechaAdquisicion.split("-")[0];
        let countYear = await ProductoRepository.contarProductosByYear(yearAdquisicion);
        
        countYear++; // Incrementa el número de productos en ese año
        
        // Generar número consecutivo con tres dígitos
        const numConsecutivo = countYear.toString().padStart(3, '0');
        producto.numInventario = `${yearAdquisicion}-${numConsecutivo}`;

        // ✅ 6️⃣ Crear el producto en la base de datos
        return await ProductoRepository.createProducto(producto);
    }

    async getProductoById(id) {
        if (!id) {
            throw new Error('El ID del producto es requerido');
        }

        const producto = await ProductoRepository.getProductoById(id);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        return producto;
    }

    async getProductoByNumSerie(numSerie) {
        if (!numSerie) {
            throw new Error('El número de serie es requerido');
        }

        const producto = await ProductoRepository.getProductoByNumSerie(numSerie);
        if (!producto) {
            throw new Error('Producto no encontrado con ese número de serie');
        }
        return producto;
    }

    async updateProducto(id, producto) {
        const productoById = await ProductoRepository.getProductoById(id);
        if (!productoById) {
            throw new Error('Producto no encontrado');
        }
        if (!producto.nombre || !producto.precio || !producto.fechaAdquisicion || !producto.numSerie) {
            throw new Error('Los datos del producto son requeridos');
        }
        if(producto.precio < 1) {
            throw new Error('El precio debe ser mayor a 0');
        }
        if (!Validaciones.esFechaValida(producto.fechaAdquisicion)) {
            throw new Error('La fecha de adquisición no es válida');
        }
        const productoByNumSerieAndNotId = await ProductoRepository.getProductoByNumSerieAndNotId(producto.numSerie, id);
        if (productoByNumSerieAndNotId) {
            throw new Error('El número de serie ya existe');
        }
        return await ProductoRepository.updateProducto(id, producto);    
    }

    async deleteProducto(id) {
        const producto = await ProductoRepository.getProductoById(id);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        return await ProductoRepository.deleteProducto(id);
    }

    async deleteProductoByNumSerie(numSerie) {      
        if (!numSerie) {
            throw new Error('El número de serie es requerido');
        }
        return await ProductoRepository.deleteProductoByNumSerie(numSerie);
    }
}

module.exports = new ProductoService();