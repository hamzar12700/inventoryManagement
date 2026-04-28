import express from 'express'
import { DeleteProduct, PostProduct, ProductData } from '../controller/ProductController.js';


let ProductRouter= express.Router();


ProductRouter.post('/',PostProduct);
ProductRouter.delete('/:id',DeleteProduct);
ProductRouter.get('/',ProductData);

export default ProductRouter