const authenticationService = require("../services/authentication.service");

const getUserRole = async (req, res) => {
    try {
        const role = await authenticationService.getUserRole(req.params.userId);
        if (!role) return res.status(404).json({ message: "Role not found" });
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createAuthentication = async (req, res) => {
    try {
        const newAuth = await authenticationService.createAuthentication(req.body);
        res.status(201).json(newAuth);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAuthentication = async (req, res) => {
    try {
        await authenticationService.deleteAuthentication(req.params.userId);
        res.status(200).json({ message: "Authentication deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUserRole, createAuthentication, deleteAuthentication };
