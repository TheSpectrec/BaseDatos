const visitTypeService = require("../services/visitType.service");

const getVisitTypes = async (req, res) => {
    try {
        const visitTypes = await visitTypeService.getAllVisitTypes();
        res.status(200).json(visitTypes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getVisitType = async (req, res) => {
    try {
        const visitType = await visitTypeService.getVisitTypeById(req.params.id);
        if (!visitType) return res.status(404).json({ message: "Visit type not found" });
        res.status(200).json(visitType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createVisitType = async (req, res) => {
    try {
        const newVisitType = await visitTypeService.createVisitType(req.body);
        res.status(201).json(newVisitType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateVisitType = async (req, res) => {
    try {
        const updatedVisitType = await visitTypeService.updateVisitType(req.params.id, req.body);
        if (!updatedVisitType) return res.status(404).json({ message: "Visit type not found" });
        res.status(200).json(updatedVisitType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteVisitType = async (req, res) => {
    try {
        await visitTypeService.deleteVisitType(req.params.id);
        res.status(200).json({ message: "Visit type deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getVisitTypes, getVisitType, createVisitType, updateVisitType, deleteVisitType };
