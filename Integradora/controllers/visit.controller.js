const visitService = require("../services/visit.service");

const getVisits = async (req, res) => {
    try {
        const visits = await visitService.getAllVisits();
        res.status(200).json(visits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getVisit = async (req, res) => {
    try {
        const visit = await visitService.getVisitById(req.params.id);
        if (!visit) return res.status(404).json({ message: "Visit not found" });
        res.status(200).json(visit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createVisit = async (req, res) => {
    try {
        const newVisit = await visitService.createVisit(req.body);
        res.status(201).json(newVisit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateVisit = async (req, res) => {
    try {
        const updatedVisit = await visitService.updateVisit(req.params.id, req.body);
        if (!updatedVisit) return res.status(404).json({ message: "Visit not found" });
        res.status(200).json(updatedVisit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteVisit = async (req, res) => {
    try {
        await visitService.deleteVisit(req.params.id);
        res.status(200).json({ message: "Visit deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getVisits, getVisit, createVisit, updateVisit, deleteVisit };
