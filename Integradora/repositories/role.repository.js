const Role = require("../models/role.model");

const findByIds = async (ids) => {
    try {
        if (!Array.isArray(ids)) {
            ids = [ids]; // Convertimos a array si es un solo ID
        }

        console.log("🔍 Buscando roles con IDs:", ids); // DEBUG

        const roles = await Role.find({ _id: { $in: ids } });

        console.log("✅ Roles encontrados en la BD:", roles.map(r => r.name)); // DEBUG

        return roles;
    } catch (error) {
        console.error("❌ Error al obtener los roles:", error);
        return [];
    }
};

const findAll = async () => {
    return await Role.find();
};

const create = async (roleData) => {
    const role = new Role(roleData);
    return await role.save();
};

const update = async (id, roleData) => {
    return await Role.findByIdAndUpdate(id, roleData, { new: true });
};

const remove = async (id) => {
    return await Role.findByIdAndDelete(id);
};

module.exports = { findByIds, findAll, create, update, remove };
