import type {DimensionsProductModel} from "./DimensionsProductModel.ts";
import type {ReviewsProductModel} from "./ReviewsProductModel.ts";
import type {MetaProductModel} from "./MetaProductModel.ts";


export interface ProductModel {
    id:number;
    title:string;
    description:string;
    category:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    tags:string[];
    brand:string;
    sku:string;
    weight:number;
    dimensions:DimensionsProductModel,
    warrantyInformation:string;
    shippingInformation:string;
    availabilityStatus:string;
    reviews:ReviewsProductModel[];
    returnPolicy:string;
    minimumOrderQuantity:number;
    meta:MetaProductModel,
    images:string[];
    thumbnail:string;
}



