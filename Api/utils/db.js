require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  const dbUri = process.env.MONGO_URI;

  if (!dbUri) {
    throw new Error('MONGO_URI is not defined in environment variables');
  }

  try {
    await mongoose.connect(dbUri);  // No options needed
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);  // Exit the process with failure
  }
};

module.exports = connectDB;
