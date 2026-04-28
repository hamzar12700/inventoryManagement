import mongoose from "mongoose";

let inventorySchema = mongoose.Schema({
    type: String,
    quantity: String,
    note: String,

},
    {
        timestamps: true
    }
)

let inventoryModel = mongoose.model('Inventory', inventorySchema);
export default inventoryModel