const AsignacionProducto = require('../models/asignacionProducto.model');
const Persona = require('../models/persona.model');
const Producto = require('../models/producto.model');

class AsignacionProductoRepository {
    async getAllAsignacionesActivas() {
        return await AsignacionProducto.find({ estado: 'activo' }).populate('personaId productoId');
    }

    async getAllAsignacionesProductosByPersona(personaId) {
        return await AsignacionProducto.find({ personaId }).populate('productoId');
    }

    async createAsignacionProducto(asignacion) {
        const persona = await Persona.findById(asignacion.personaId);
        if (!persona) throw new Error('Persona no encontrada');

        const producto = await Producto.findById(asignacion.productoId);
        if (!producto) throw new Error('Producto no encontrado');

        return await AsignacionProducto.create(asignacion);
    }

    async inactiveStatusAsignacionProducto(id) {
        return await AsignacionProducto.findByIdAndUpdate(id, { estado: 'inactivo' }, { new: true });
    }

    async getAsignacionProductoById(id) {
        return await AsignacionProducto.findById(id).populate('personaId productoId');
    }
}

module.exports = new AsignacionProductoRepository();
