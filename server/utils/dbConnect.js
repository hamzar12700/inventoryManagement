import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export async function dbConnect(req,res) {
    try {
        let conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(conn.connection.host);
        
    } catch (error) {
        console.log(error.message);
        
    }
}