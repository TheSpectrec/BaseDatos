const express = require("express");
const router = express.Router();
const roleController = require("../controllers/role.controller");

router.get("/", roleController.getRoles);
router.get("/:id", roleController.getRole);
router.post("/", roleController.createRole);
router.put("/:id", roleController.updateRole);
router.delete("/:id", roleController.deleteRole);

module.exports = router;
