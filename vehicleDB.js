const connectDB = require("./db/connect");
const Vehicle = require("./models/vehicle");

const VehicleJson = require("./vehicles.json");

const start = async () =>{
    try{
        await connectDB();
        await Vehicle.create(VehicleJson);
        console.log("Data Imported");
    }
    catch(error){
        console.log(error);
    }
};

start();