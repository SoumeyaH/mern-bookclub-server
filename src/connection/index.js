const mongoose = require("mongoose");
require('dotenv').config()

const CONNECTION = process.env.CONNECTION

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongoDBConnection = async () => {
    try {
    await mongoose.connect(CONNECTION, MONGOOSE_OPTIONS);
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.log("Connection to MongoDB unsuccessful.");
    console.log(err.message);
    throw err;
  }
};

module.exports = mongoDBConnection;