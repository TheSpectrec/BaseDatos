const roleRepository = require("../repositories/role.repository");

const getAllRoles = async () => {
    return await roleRepository.findAll();
};

const getRoleById = async (id) => {
    return await roleRepository.findById(id);
};

const createRole = async (roleData) => {
    return await roleRepository.create(roleData);
};

const updateRole = async (id, roleData) => {
    return await roleRepository.update(id, roleData);
};

const deleteRole = async (id) => {
    return await roleRepository.remove(id);
};

module.exports = { getAllRoles, getRoleById, createRole, updateRole, deleteRole };
