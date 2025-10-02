import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CartComponent} from "../CartComponent/CartComponent.tsx";
import type {CartArrModel} from "../../models/CartsModel/CartArrModel.ts";
import {loadCartsUsersDummyjson} from "../../serviсe/api.serviсe.ts";

export const CartsComponent = () => {
    const {id} =  useParams();
    const [carts, setCarts] = useState<CartArrModel[]>([])

    useEffect(() => {
        if(id) {
            loadCartsUsersDummyjson.getCartsOfUser(id)
                .then(carts => {
                   console.log(carts);
                    setCarts(carts)
                })
        }

    }, [id]);

    return (
        <div className="cart-dummyjson-component">
            {
                carts && carts.length > 0 ? (carts?.map(cart => <CartComponent key={cart.id} cart={cart}/>)) : (<p className='cart-dummyjson__text'>Cart with id 'user' not found</p>)
            }
        </div>
    )
}