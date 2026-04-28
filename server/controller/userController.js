import UserModels from "../models/Orders.js";

export function signUp(req,res) {
    try {
     let user = UserModels.insert({
        
     })
        
    } catch (error) {
        console.log(error.message);
        res.send({
            msg : error.message
        })
    }
}