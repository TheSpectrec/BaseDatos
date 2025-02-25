const AsignacionProductoRepository = require('../repositories/asignacionProducto.repository');

class AsignacionProductoService {
    async getAllAsignacionesActivas() {
        return await AsignacionProductoRepository.getAllAsignacionesActivas();
    }

    async getAllAsignacionesProductosByPersona(personaId) {
        return await AsignacionProductoRepository.getAllAsignacionesProductosByPersona(personaId);
    }

    async createAsignacionProducto(asignacion) {
        return await AsignacionProductoRepository.createAsignacionProducto(asignacion);
    }

    async inactiveStatusAsignacionProducto(id) {
        return await AsignacionProductoRepository.inactiveStatusAsignacionProducto(id);
    }

    async getAsignacionProductoById(id) {
        return await AsignacionProductoRepository.getAsignacionProductoById(id);
    }
}

module.exports = new AsignacionProductoService();