const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
    description: String,
    photo: String,
    address: {
        street: String,
        city: String,
        zip: String
    },
    status: { type: String, enum: ["activo", "inactivo"], default: "activo" }  // Nuevo campo
});

module.exports = mongoose.model("House", HouseSchema);
