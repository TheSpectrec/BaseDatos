const userRepository = require("../repositories/user.repository");
const houseRepository = require("../repositories/house.repository");
const roleRepository = require("../repositories/role.repository");

const getAllUsers = async () => {
    return await userRepository.findAll();
};

const getUserById = async (id) => {
    return await userRepository.findById(id);
};

const createUser = async (userData) => {
    // Verificar si el usuario intenta asignarse una casa
    if (userData.house_id) {
        // Validar que la casa exista
        const houseExists = await houseRepository.findById(userData.house_id);
        if (!houseExists) {
            throw new Error("❌ La casa especificada no existe.");
        }

        // Obtener los roles del usuario desde la base de datos
        const userRoles = await roleRepository.findByIds(userData.roles);
        const roleNames = userRoles.map(role => role.name);

        // Validar si el usuario tiene el rol de "Residente"
        if (!roleNames.includes("Residente")) {
            throw new Error("❌ Solo los usuarios con el rol de 'Residente' pueden tener una casa asignada.");
        }
    }

    return await userRepository.create(userData);
};

const updateUser = async (id, userData) => {
    // Verificar si el usuario existe antes de actualizarlo
    const existingUser = await userRepository.findById(id);
    if (!existingUser) {
        throw new Error("❌ El usuario especificado no existe.");
    }

    // Si el usuario intenta actualizar su casa, validar reglas de negocio
    if (userData.house_id) {
        // Validar que la casa exista en la base de datos
        const houseExists = await houseRepository.findById(userData.house_id);
        if (!houseExists) {
            throw new Error("❌ La casa especificada no existe.");
        }

        // Obtener los roles del usuario desde la base de datos
        console.log("📌 IDs de roles actuales del usuario:", existingUser.roles);

        const userRoles = await roleRepository.findByIds(existingUser.roles);

        if (!userRoles || userRoles.length === 0) {
            throw new Error("❌ No se encontraron roles para este usuario.");
        }

        const roleNames = userRoles.map(role => role.name);
        console.log("🔍 Roles encontrados en BD para este usuario:", roleNames); // DEBUG

        // Validar que solo los "Residentes" puedan actualizar su casa
        if (!roleNames.includes("Residente")) {
            throw new Error("❌ Solo los usuarios con el rol de 'Residente' pueden actualizar su casa.");
        }
    }

    return await userRepository.update(id, userData);
};

const toggleUserStatus = async (id) => {
    const user = await userRepository.findById(id);
    if (!user) throw new Error("❌ Usuario no encontrado.");

    // Alternar entre "activo" e "inactivo"
    const newStatus = user.status === "activo" ? "inactivo" : "activo";
    return await userRepository.changeStatus(id, newStatus);
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, toggleUserStatus };
