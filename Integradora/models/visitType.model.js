const mongoose = require("mongoose");

const VisitTypeSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model("VisitType", VisitTypeSchema);
