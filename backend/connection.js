require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const mongoURI = process.env.MONGODBURI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection error:", err);
  }
};

module.exports = { connection: connectToMongo };
