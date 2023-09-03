const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Mongoose Connected: ${conn.connection.host}`);
};

// mongoose.set('strictQuery', true); // use this line code if u get error from terminal if not don't worry

module.exports = connectDB;
