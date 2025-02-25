const AsignacionProductoService = require('../services/asignacionProducto.service');

class AsignacionProductoController {
    async getAllAsignacionesActivas(req, res) {
        try {
            const asignaciones = await AsignacionProductoService.getAllAsignacionesActivas();
            res.json(asignaciones);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllAsignacionesProductosByPersona(req, res) {
        try {
            const { personaId } = req.params;
            const asignaciones = await AsignacionProductoService.getAllAsignacionesProductosByPersona(personaId);
            res.json(asignaciones);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async createAsignacionProducto(req, res) {
        try {
            const asignacion = await AsignacionProductoService.createAsignacionProducto(req.body);
            res.status(201).json(asignacion);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async inactiveStatusAsignacionProducto(req, res) {
        try {
            const { id } = req.params;
            const asignacion = await AsignacionProductoService.inactiveStatusAsignacionProducto(id);
            res.json(asignacion);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAsignacionProductoById(req, res) {
        try {
            const { id } = req.params;
            const asignacion = await AsignacionProductoService.getAsignacionProductoById(id);
            res.json(asignacion);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new AsignacionProductoController();