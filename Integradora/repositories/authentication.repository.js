const Authentication = require("../models/authentication.model");

const findByUserId = async (userId) => {
    return await Authentication.findOne({ user_id: userId }).populate("role_id");
};

const create = async (authData) => {
    const auth = new Authentication(authData);
    return await auth.save();
};

const remove = async (userId) => {
    return await Authentication.findOneAndDelete({ user_id: userId });
};

module.exports = { findByUserId, create, remove };
