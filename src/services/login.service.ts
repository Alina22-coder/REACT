import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import axiosInstance from "./api.service.ts";

// створюємо тип, який описує дані, що передаються для логіну
type LoginDataType = {
    username: string;
    password: string;
    expiresInMins:number
}

//створюємо асинхронну функцію яка приймає об'єкт з username, password, expiresInMins
export const login = async ({username,password,expiresInMins}:LoginDataType):Promise<IUserWithTokens> => {
    /*робимо post запит, що несе в собі модель даних користувача username, password, expiresInMins на посилання /login, сервер повертає відповідь всередині
     якої будуть зберігатися користувачі з токенами*/
    const {data:userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username,password,expiresInMins});
    console.log(userWithTokens);
    // зберігаємо користувача з токеном в localStorage у вигляді JSON-рядка
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}