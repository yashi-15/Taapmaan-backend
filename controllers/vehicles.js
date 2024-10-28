const Product = require("../models/vehicle")

const getAllVehicles = async(req, res) => {
    const myData = await Product.find({}) 
    res.status(200).json({ myData});
};


const getAllVehiclesTesting = async(req, res) => {
    res.status(200).json({msg: "I am Get ALL Vehicles TESTING!!" });
};


module.exports = { getAllVehicles, getAllVehiclesTesting};
