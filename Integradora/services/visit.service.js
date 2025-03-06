const visitRepository = require("../repositories/visit.repository");

const getAllVisits = async () => {
    return await visitRepository.findAll();
};

const getVisitById = async (id) => {
    return await visitRepository.findById(id);
};

const createVisit = async (visitData) => {
    return await visitRepository.create(visitData);
};

const updateVisit = async (id, visitData) => {
    return await visitRepository.update(id, visitData);
};

const deleteVisit = async (id) => {
    return await visitRepository.remove(id);
};

module.exports = { getAllVisits, getVisitById, createVisit, updateVisit, deleteVisit };
