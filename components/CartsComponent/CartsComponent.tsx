import {useEffect, useState} from "react";
import type {CartArrModel} from "../../models/CartsModel/CartArrModel.ts";
import {CartComponent} from "../CartComponent/CartComponent.tsx";
import {useParams} from "react-router-dom";
import {loadCartsUsersDummyjson} from "../../serviсe/api.serviсe.ts";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<CartArrModel[]>([]);

    useEffect(() => {
        if (id) {
            loadCartsUsersDummyjson.getCartsOfUser(id)
                .then(carts => setCarts(carts))
        }
    }, [id]);

    return (
        <div>
            {
                carts && carts.length > 0 ? (carts.map(cart => <CartComponent key={cart.id} cart={cart}/>)) : (<p className='cart-dummyjson__text'>Cart with id 'user' not found</p>)
            }
        </div>
    )
}