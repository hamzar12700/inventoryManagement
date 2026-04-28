import ProductModel from "../models/Products.js";

export async function PostProduct(req, res) {
    const { name, price, stock, category, createdAt } = req.body
    try {
        let product = await ProductModel.create({
            name, price, stock, category, createdAt
        })
        return res.send({
            msg: "product inserted successfully",
            data: product
        })
    } catch (error) {
        console.log(error.message);
        return res.send({
            msg: "product not upload",
            error: error.message
        })
    }
}


export async function DeleteProduct(req, res) {
    const { id } = req.params
    try {
        let deleteProduct = await ProductModel.findByIdAndDelete(id);

        return res.send({
            msg: "product deleted successfully",
            data: deleteProduct
        })
    } catch (error) {
        console.log(error.message);
        return res.send({
            msg: "something went wrong",
            error: error.message
        })
    }
}


export async function ProductData(req, res) {
    try {
        let deleteProduct = await ProductModel.find({});

        return res.send({
            msg: "There is an All Data Showed",
            data: deleteProduct
        })
    } catch (error) {
        console.log(error.message);
        return res.send({
            msg: "something went wrong",
            error: error.message
        })
    }
}