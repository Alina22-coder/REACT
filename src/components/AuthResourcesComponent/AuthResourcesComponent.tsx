import {useEffect, useState} from "react";
import {loadAuthProducts} from "../../services/products.service.ts";
import {refresh} from "../../services/refresh.service.ts";
import type {IProduct} from "../../models/IProduct.ts";
import {ProductComponent} from "../ProductComponent/ProductComponent.tsx";

// експортуємо компонент, щоб його можна було використовувати в інших файлах
export const AuthResourcesComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    //використовуємо хук, який виконує функцію один раз після першого рендеру компонента
    useEffect(() => {
        // викликаємо функцію, яка підвантажує продукти з захищеного/аутентифікованого API
        loadAuthProducts()
            // якщо запит успішний, виводимо отримані продукти у консоль
            .then(products => {
                console.log(products)
                setProducts(products)
            })
            // якщо запит не вдалий, обробляємо помилку
            .catch(reason => {
                console.log(reason)
                 // Викликаємо функцію для оновлення токена
                refresh()
                    // після оновлення токена повторно підвантажуємо продукти
                    .then(() => loadAuthProducts())
                    .then(value => console.log(value));
        })
    }, []);//порожній масив означає, що ефект виконається лише один

    return (
        <div className='products__container'>
            {products.map((product) => (<ProductComponent key={product.id} product={product} />))}
        </div>
    );
};