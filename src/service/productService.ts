import { ProductModel } from '@/models';


export class ProductService { 
    private productModel = ProductModel;


    public async getProducts() {
        try{ 
            const products = await this.productModel
                .find()
                .select('-_id -__v')
                .exec();
            return products;
        }catch(error){ 
            console.log(error); 
            throw new Error(`Error getting products: ${error}`); 
        }
    }

    public async getProductBySlug(slug: string) {
        try{
            const product = await this.productModel.findOne({slug: slug})
                .lean()
                .select('-_id -__v')
                .exec();
            
            return product;
                
        }catch(error){
            console.log(error); 
            throw new Error(`Error getting product by slug: ${error}`); 
        }
    }
}