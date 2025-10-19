import type {IProduct} from "../models/IProduct.ts";
import type {BaseResponseModelType} from "../models/BaseResponseModelType.ts";
import axiosInstance from "./api.service.ts";

//створюємо асинхронну функцію, яка завантажує продукти для авторизованого користувача
export const loadAuthProducts = async ():Promise<IProduct[]> => {
    //робимо get запит, сервер повертає відповідь
    const {data: {products}} = await axiosInstance.get<BaseResponseModelType>('/products');
    //повертаємо масив продуктів або порожній масив
    return products ?? []
}