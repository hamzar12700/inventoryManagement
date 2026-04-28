import { Router } from "express";
import { signUp } from "../controller/userController.js";

const OrderRoutes = Router();

// 👉 Signup Route
OrderRoutes.post("/signup", signUp);

// 👉 Dummy GET routes (example)
OrderRoutes.get("/", (req, res) => {
    res.send("All users");
});

OrderRoutes.get("/profile", (req, res) => {
    res.send("User profile");
});

OrderRoutes.get("/test", (req, res) => {
    res.send("Test route working");
});

export default OrderRoutes;