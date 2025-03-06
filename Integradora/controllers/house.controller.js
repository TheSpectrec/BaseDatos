const houseService = require("../services/house.service");

const getHouses = async (req, res) => {
    try {
        const houses = await houseService.getAllHouses();
        res.status(200).json(houses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getHouse = async (req, res) => {
    try {
        const house = await houseService.getHouseById(req.params.id);
        if (!house) return res.status(404).json({ message: "House not found" });
        res.status(200).json(house);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createHouse = async (req, res) => {
    try {
        const newHouse = await houseService.createHouse(req.body);
        res.status(201).json(newHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateHouse = async (req, res) => {
    try {
        const updatedHouse = await houseService.updateHouse(req.params.id, req.body);
        if (!updatedHouse) return res.status(404).json({ message: "House not found" });
        res.status(200).json(updatedHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const toggleHouseStatus = async (req, res) => {
    try {
        const updatedHouse = await houseService.toggleHouseStatus(req.params.id);
        res.status(200).json(updatedHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getHouses, getHouse, createHouse, updateHouse, toggleHouseStatus };
