import { ProductModel } from '@/models';
import data from '@/data/data.json'

export class SeedService { 
    private productModel = ProductModel;
    constructor() {}

    public async seed(){ 
        try{ 
            await this.productModel.deleteMany({});
            const products = await this.productModel.insertMany(data);
            return products;
        }catch(error){ 
            console.log(error); 
            throw new Error(`Error seeding database: ${error}`);
        }
    }
}