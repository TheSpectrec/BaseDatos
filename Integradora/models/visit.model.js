const mongoose = require("mongoose");

const VisitSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    num_person: Number,
    description: String,
    password: String,
    person_name: String,
    observation: String,
    house_id: { type: mongoose.Schema.Types.ObjectId, ref: "House" },
    visit_type_id: { type: mongoose.Schema.Types.ObjectId, ref: "VisitType" },
    evidences: [
        {
            name: String,
            image: String
        }
    ]
});

module.exports = mongoose.model("Visit", VisitSchema);
