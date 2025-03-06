const express = require("express");
const router = express.Router();
const visitController = require("../controllers/visit.controller");

router.get("/", visitController.getVisits);
router.get("/:id", visitController.getVisit);
router.post("/", visitController.createVisit);
router.put("/:id", visitController.updateVisit);
router.delete("/:id", visitController.deleteVisit);

module.exports = router;
