const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const dbConnection = async () => {
    await mongoose
    .connect(mongoUri)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Error connecting to database", error));
};

module.exports = { dbConnection };



