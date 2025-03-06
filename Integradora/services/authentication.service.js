const authenticationRepository = require("../repositories/authentication.repository");

const getUserRole = async (userId) => {
    return await authenticationRepository.findByUserId(userId);
};

const createAuthentication = async (authData) => {
    return await authenticationRepository.create(authData);
};

const deleteAuthentication = async (userId) => {
    return await authenticationRepository.remove(userId);
};

module.exports = { getUserRole, createAuthentication, deleteAuthentication };
