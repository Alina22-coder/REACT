import type {IProduct} from "./IProduct.ts";
import type {IUser} from "./IUser.ts";
import type {IPost} from "./IPost.ts";
import type {IComment} from "./IComment.ts";
import type {ITodo} from "./ITodo.ts";
import type {ICart} from "./ICart.ts";

export type BaseResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products?: IProduct[],
    carts?: ICart[],
    users?: IUser[],
    posts?: IPost[],
    comments?: IComment[],
    todos?: ITodo[],
}





