import type {FC} from "react";
import type {CartArrModel} from "../../models/CartsModel/CartArrModel.ts";

type CartPropType = {
    cart: CartArrModel
}

export const CartComponent:FC<CartPropType> = ({cart: {id, products, total, discountedTotal, userId, totalProducts, totalQuantity }}) => {
    return (
        <div className="cart-dummyjson__wrap">
            <ul className="cart-dummyjson__list">
                <li className="cart-dummyjson__item">{id}</li>
                <li className="cart-dummyjson__item">User Id: {userId}</li>
                <li className="cart-dummyjson__item">Total: {total}</li>
                <li className="cart-dummyjson__item">Discounted total: {discountedTotal}</li>
                <li className="cart-dummyjson__item">Total products: {totalProducts}</li>
                <li className="cart-dummyjson__item">Total quantity: {totalQuantity}</li>
                <li className="cart-dummyjson__item">
                    Products:
                    <ul className="cart-dummyjson__list">
                        {products.map(product => (
                            <li className="cart-dummyjson__item" key={product.id}>
                                <ul className="cart-dummyjson__list">
                                    <li className="cart-dummyjson__item">id: {product.id}</li>
                                    <li className="cart-dummyjson__item">title: {product.title}</li>
                                    <li className="cart-dummyjson__item">price: {product.price}</li>
                                    <li className="cart-dummyjson__item">quantity: {product.quantity}</li>
                                    <li className="cart-dummyjson__item">total: {product.total}</li>
                                    <li className="cart-dummyjson__item">discount percentage: {product.discountPercentage}</li>
                                    <li className="cart-dummyjson__item">discounted total: {product.discountedTotal}</li>
                                    <li className="cart-dummyjson__item">
                                        <img src={product.thumbnail} alt={product.title}/>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}