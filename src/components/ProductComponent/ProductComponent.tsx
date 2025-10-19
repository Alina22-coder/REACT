import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductPropType = {
    product: IProduct
}

export const ProductComponent:FC<ProductPropType> = ({product: {id, title, price}}) => {
    return (
        <div className='product'>
            <h2 className='product__title'>{id} - {title} ${price}</h2>
        </div>
    );
};