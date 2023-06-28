import { ProductModel } from '@/models';


export class ProductService { 
    private productModel = ProductModel;

    public async getProductBySlug(slug: string) {
        try{

        }catch(error){
            console.log(error); 
            throw new Error(`Error getting product by slug: ${error}`); 
        }
    }
}