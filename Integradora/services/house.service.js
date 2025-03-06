const houseRepository = require("../repositories/house.repository");

const getAllHouses = async () => {
    return await houseRepository.findAll();
};

const getHouseById = async (id) => {
    return await houseRepository.findById(id);
};

const createHouse = async (houseData) => {
    return await houseRepository.create(houseData);
};

const updateHouse = async (id, houseData) => {
    return await houseRepository.update(id, houseData);
};

const toggleHouseStatus = async (id) => {
    const house = await houseRepository.findById(id);
    if (!house) throw new Error("❌ Casa no encontrada.");

    // Alternar entre "activo" e "inactivo"
    const newStatus = house.status === "activo" ? "inactivo" : "activo";
    return await houseRepository.changeStatus(id, newStatus);
};

module.exports = { getAllHouses, getHouseById, createHouse, updateHouse, toggleHouseStatus };
