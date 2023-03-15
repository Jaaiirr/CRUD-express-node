const mongoose = require("mongoose");

const dbConnection = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.set('strictQuery', false);
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (error, res) => {
    if (!error) {
      console.log('Mongo connected...')
    } else {
      console.log('Error on MongoDB connection...')
    }
  });
};

module.exports = dbConnection;