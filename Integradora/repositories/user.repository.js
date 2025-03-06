const User = require("../models/user.model");

const findById = async (id) => {
    return await User.findById(id).populate("house_id").populate("roles");
};

const findAll = async () => {
    return await User.find().populate("house_id").populate("roles");
};

const create = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const update = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

const changeStatus = async (id, status) => {
    return await User.findByIdAndUpdate(id, { status }, { new: true });
};
module.exports = { findById, findAll, create, update, changeStatus };
