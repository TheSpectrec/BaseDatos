const mongoose = require('mongoose');

const AsignacionProductoSchema = mongoose.Schema({
    personaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Persona', required: true },
    productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
    fechaAsignacion: { type: Date, required: true },
    estado: { type: String, required: true, enum: ['activo', 'inactivo'] }
});

module.exports = mongoose.model('AsignacionProducto', AsignacionProductoSchema);