import type {ProductModel} from "../models/ProductModel.ts";

const productsUrl = import.meta.env.VITE_API_BASE_URL + "/products";
export const loadProducts = async ():Promise<ProductModel> => {
    const responseProduct = await fetch(productsUrl)
        .then(value => value.json());

    return responseProduct.products;
}