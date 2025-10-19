import axios from "axios";
import {retriveLocalStorage} from "./helpers.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";

//створюємо власний axios для роботи з api
const axiosInstance = axios.create({
    //базова адреса для всіх запитів
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})
export default axiosInstance;

// додаємо "інтерсептор" для перехоплення всіх запитів перед їх відправкою
axiosInstance.interceptors.request.use((requestObject) => {
    // перевіряємо, чи метод запиту GET
    if(requestObject.method?.toUpperCase() === "GET") {
        // додаємо заголовок Authorization із токеном з локального сховища
        // retriveLocalStorage<IUserWithTokens>('user') повертає об'єкт користувача з токеном
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    // повертаємо модифікований об'єкт запиту
    return requestObject;
})

