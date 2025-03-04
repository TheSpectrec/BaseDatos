const userRepository = require('../repositories/userRepository');

//createUser recibe data y la envía a userRepository.createUser
exports.createUser = (data) => userRepository.createUser(data);
exports.getAllUsers = () => userRepository.getAllUsers();
exports.getUserById = (id) => userRepository.getUserById(id);
exports.updateUser = (id, data) => userRepository.updateUser(id, data);
exports.deleteUser = (id) => userRepository.deleteUser(id);