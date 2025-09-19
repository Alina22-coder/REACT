import {useEffect,useState} from "react";
import type {ProductModel} from "../../models/ProductModel.ts";
import {loadProducts} from "../../servise/api.servise.ts";
import {ProductComponent} from "../ProductComponent/ProductComponent.tsx";


export const ProductsComponent = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        loadProducts()
            .then(products => setProducts(products));

    }, []);


    return (
        <div className="products">
            {
                products.map(product => (<ProductComponent key={product.id} product={product} />))
            }
        </div>
    );
};