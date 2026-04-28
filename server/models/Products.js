import mongoose from "mongoose";

let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    category: {
    enum : ['Laptop','Computer'],    
        type :String
    },
   
}, {
    timestamps: true
}
)

let ProductModel = mongoose.model('Product', productSchema);
export default ProductModel