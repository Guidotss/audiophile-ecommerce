import { Product } from '@/interfaces';
import mongoose, { Schema, model, Model, Document    } from 'mongoose';


interface IProduct extends Product {
    _id: string;
}

const categoryImage = new Schema({
    mobile: String,
    tablet: String,
    desktop: String,
});

const otherSchema = new Schema({
    slug: String,
    name: String,
    image: categoryImage
});


const gallerySchema = new Schema({
    first: categoryImage,
    second: categoryImage,
    third: categoryImage
});

const includeSchema = new Schema({
    quantity: Number,
    item: String
})


const productSchema = new Schema({
    id: Number,
    name: String,
    slug: String,
    image: categoryImage,
    category: String,
    categoryImage: categoryImage,
    new: Boolean,
    price: Number,
    description: String,
    features: String,
    includes: [includeSchema],
    gallery: gallerySchema,
    others: [otherSchema]
}); 


const ProductModel: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);
export default ProductModel;