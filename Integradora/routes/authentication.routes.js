const express = require("express");
const router = express.Router();
const authenticationController = require("../controllers/authentication.controller");

router.get("/:userId", authenticationController.getUserRole);
router.post("/", authenticationController.createAuthentication);
router.delete("/:userId", authenticationController.deleteAuthentication);

module.exports = router;
