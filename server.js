const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3000;

const vehicles_routes = require("./routes/vehicles")

app.get("/", (req, res) => {
    res.send("Hi! I am live!");
});

// middleware or to set router 
app.use("/api/vehicles", vehicles_routes);

const start = async () =>{
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch(error){
        console.error(error);
    }
}



start();














































































































// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3000;

// // MongoDB connection to "Taapmaan" database
// mongoose.connect('mongodb://localhost:27017/Taapmaan', { useNewUrlParser: true, useUnifiedTopology: true });

// // Define schema and model for the "Vehicles" collection
// const vehicleSchema = new mongoose.Schema({
//     id: String,
//     size: String,
//     tempRange: String,
//     pickupLocation: String,
//     dropLocation: String,
//     vehicleType: String
// });
// const Vehicle = mongoose.model('Vehicle', vehizcleSchema, 'Vehicles'); // specify collection name as "Vehicles"

// // Route to fetch vehicles based on query
// app.get('/api/vehicles', async (req, res) => {
//     const { pickupLocation, dropLocation, vehicleType } = req.query;
//     try {
//         const vehicles = await Vehicle.find({
//             pickupLocation: pickupLocation,
//             dropLocation: dropLocation,
//             vehicleType: vehicleType
//         });
//         res.json(vehicles);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching vehicles', error });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
