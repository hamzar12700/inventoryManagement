import express, { Router } from "express";
import dotenv from "dotenv"
import { dbConnect } from "./utils/dbConnect.js";
import productRouter from "./routes/ProductRoutes.js";
import OrderRoutes from "./routes/OrderRoutes.js";
import inventoryModel from "./models/Inventory.js";
import cors from 'cors'

dotenv.config()

let app = express();

app.use(express.json())
app.use(cors())
app.use('/api/product', productRouter)
app.use('/api/order', OrderRoutes)
app.use('/api/inventory', inventoryModel)

let PORT = process.env.PORT || 3000
dbConnect()


app.listen(PORT , ()=>{
    console.log("server chl rha ha ",PORT);
    
})