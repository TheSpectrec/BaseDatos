const Visit = require("../models/visit.model");

const findById = async (id) => {
    return await Visit.findById(id).populate("house_id").populate("visit_type_id");
};

const findAll = async () => {
    return await Visit.find().populate("house_id").populate("visit_type_id");
};

const create = async (visitData) => {
    const visit = new Visit(visitData);
    return await visit.save();
};

const update = async (id, visitData) => {
    return await Visit.findByIdAndUpdate(id, visitData, { new: true });
};

const remove = async (id) => {
    return await Visit.findByIdAndDelete(id);
};

module.exports = { findById, findAll, create, update, remove };
