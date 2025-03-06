const visitTypeRepository = require("../repositories/visitType.repository");

const getAllVisitTypes = async () => {
    return await visitTypeRepository.findAll();
};

const getVisitTypeById = async (id) => {
    return await visitTypeRepository.findById(id);
};

const createVisitType = async (visitTypeData) => {
    return await visitTypeRepository.create(visitTypeData);
};

const updateVisitType = async (id, visitTypeData) => {
    return await visitTypeRepository.update(id, visitTypeData);
};

const deleteVisitType = async (id) => {
    return await visitTypeRepository.remove(id);
};

module.exports = { getAllVisitTypes, getVisitTypeById, createVisitType, updateVisitType, deleteVisitType };
