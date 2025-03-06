const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: String,
    paternal: String,
    maternal: String,
    phone: Number,
    birthday: Date,
    house_id: { type: mongoose.Schema.Types.ObjectId, ref: "House" },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
    status: { type: String, enum: ["activo", "inactivo"], default: "activo" }  // Nuevo campo
});

module.exports = mongoose.model("User", UserSchema);
