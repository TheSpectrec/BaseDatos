const express = require("express");
const router = express.Router();
const visitTypeController = require("../controllers/visitType.controller");

router.get("/", visitTypeController.getVisitTypes);
router.get("/:id", visitTypeController.getVisitType);
router.post("/", visitTypeController.createVisitType);
router.put("/:id", visitTypeController.updateVisitType);
router.delete("/:id", visitTypeController.deleteVisitType);

module.exports = router;
