import inventoryModel from "../models/Inventory.js";

function inventoryController(req,res) {
    const{}=req.body
    try {
        let inventory = inventoryModel.create({

        })
    } catch (error) {
        console.log(error.message);
    }
}