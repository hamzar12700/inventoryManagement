import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    expense: {
        type: String,
        required: true,
        trim: true
    },
    categories: {
        type: String,
        required: true,
        enum: ['Foods', 'Entertainment', 'Mobile']
    },
    amount: {
        type: Number,
        required: true
    },
    completedTask: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const UserModels = mongoose.model("Order", userSchema);

export default UserModels;