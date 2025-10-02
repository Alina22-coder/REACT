import type {ProductCartArrModel} from "./ProductCartArrModel.ts";

export interface CartArrModel {
    id: number,
    products: ProductCartArrModel[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}