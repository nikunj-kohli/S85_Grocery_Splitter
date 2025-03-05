const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB', err);
    });
};

const getDBFunc = async () => {
  if (!mongoose.connection.readyState) {
    await connectDatabase();
  }
  return mongoose.connection.db;
};

module.exports = { connectDatabase, getDBFunc };