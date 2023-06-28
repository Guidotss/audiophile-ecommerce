import { ProductModel } from '@/models';


export class ProductService { 
    private productModel = ProductModel;

    async getAllProducts() {
        return this.productModel.find(); 
        
    }
}