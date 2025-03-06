const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.put("/status/:id", userController.toggleUserStatus);  // Cambiar estado

module.exports = router;
