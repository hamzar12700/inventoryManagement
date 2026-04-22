import express, { Router } from "express";
import dotenv from "dotenv"
import router from "./routes/userRoutes.js";

dotenv.config()

let app = express();
app.use('/api', router)

let PORT = process.env.PORT || 3000


app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen(PORT , ()=>{
    console.log("server chl rha ha ",PORT);
    
})