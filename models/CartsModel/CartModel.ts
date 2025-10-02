import {CartArrModel} from "./CartArrModel";

export interface CartModel {
    carts: CartArrModel[],
    total: number;
    skip: number;
    limit: number;
}



