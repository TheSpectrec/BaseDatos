const House = require("../models/house.model");

const findById = async (id) => {
    try {
        const house = await House.findById(id);
        return house || null; // Retorna `null` si no encuentra la casa
    } catch (error) {
        return null; // En caso de error, retorna `null` para evitar fallos en la validación
    }
};

const findAll = async () => {
    return await House.find();
};

const create = async (houseData) => {
    const house = new House(houseData);
    return await house.save();
};

const update = async (id, houseData) => {
    return await House.findByIdAndUpdate(id, houseData, { new: true });
};

const changeStatus = async (id, status) => {
    return await House.findByIdAndUpdate(id, { status }, { new: true });
};

module.exports = { findById, findAll, create, update, changeStatus };
