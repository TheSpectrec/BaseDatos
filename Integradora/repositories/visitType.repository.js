const VisitType = require("../models/visitType.model");

const findById = async (id) => {
    return await VisitType.findById(id);
};

const findAll = async () => {
    return await VisitType.find();
};

const create = async (visitTypeData) => {
    const visitType = new VisitType(visitTypeData);
    return await visitType.save();
};

const update = async (id, visitTypeData) => {
    return await VisitType.findByIdAndUpdate(id, visitTypeData, { new: true });
};

const remove = async (id) => {
    return await VisitType.findByIdAndDelete(id);
};

module.exports = { findById, findAll, create, update, remove };
