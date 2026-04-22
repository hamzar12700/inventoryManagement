import { Router } from "express";
import { signUp } from "../controller/userController.js";

const router = Router();

// 👉 Signup Route
router.post("/signup", signUp);

// 👉 Dummy GET routes (example)
router.get("/", (req, res) => {
    res.send("All users");
});

router.get("/profile", (req, res) => {
    res.send("User profile");
});

router.get("/test", (req, res) => {
    res.send("Test route working");
});

export default router;