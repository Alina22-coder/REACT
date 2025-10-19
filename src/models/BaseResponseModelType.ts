import type {IProduct} from "./IProduct.ts";
import type {IUser} from "./IUser.ts";

export type BaseResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products?: IProduct[]
    users?: IUser[],
}