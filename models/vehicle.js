const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true,
    },
    tempRange: {
        type: String,
        required: true,
    },
    pickupLocation: {
        type: String,
        required: true,
    },
    dropLocation: {
        type: String,
        required: true,
    },
    vehicleType: {
        type: String,
        enum: {
            values: ["Frozen", "Chiller", "Dry"],
            message: "Invalid vehicle type",
        }
    },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);