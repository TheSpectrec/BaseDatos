const express = require("express");
const router = express.Router();
const houseController = require("../controllers/house.controller");

router.get("/", houseController.getHouses);
router.get("/:id", houseController.getHouse);
router.post("/", houseController.createHouse);
router.put("/:id", houseController.updateHouse);
router.put("/status/:id", houseController.toggleHouseStatus);  // Cambiar estado

module.exports = router;
