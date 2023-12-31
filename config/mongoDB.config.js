// Imports
const mongoose = require("mongoose");

// Constant that holds the URI to the online or local database
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sharex'

mongoose
  .set('strictQuery', false)
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
