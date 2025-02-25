const express = require('express');
const AsignacionProductoController = require('../controllers/asignacionProducto.controller');
const router = express.Router();

router.get('/activas', AsignacionProductoController.getAllAsignacionesActivas);
router.get('/persona/:personaId', AsignacionProductoController.getAllAsignacionesProductosByPersona);
router.post('/', AsignacionProductoController.createAsignacionProducto);
router.put('/inactivar/:id', AsignacionProductoController.inactiveStatusAsignacionProducto);
router.get('/:id', AsignacionProductoController.getAsignacionProductoById);

module.exports = router;