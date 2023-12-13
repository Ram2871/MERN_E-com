import mongoose from  "mongoose";
import colors from "colors";
import dotenv from "dotenv";

//config env
dotenv.config();

// Function to connect to the MongoDB server
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.error(`Error in Mongodb ${error}`.bgRed.white)
    }
} 

export default connectDB;
