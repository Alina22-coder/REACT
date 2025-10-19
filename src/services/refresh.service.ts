import axiosInstance from "./api.service.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

//створюємо асинхронну функцію, яка оновлює токени користувача
export const refresh = async () => {
    // отримуємо об'єкт користувача з токенами з localStorage
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    /*робимо постовий запит за посиланням на /refresh, передаємо refreshToken - дістаємо з LocalStorage, expiresInMins, отримуємо у відповідь оновлений об'єкт з токеном*/
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {refreshToken: iUserWithTokens.refreshToken,expiresInMins: 1})
    //впроваджуємо новий accessToken
    iUserWithTokens.accessToken = accessToken;
    //впроваджуємо новий refreshToken
    iUserWithTokens.refreshToken = refreshToken;
    // зберігаємо оновлений об'єкт користувача назад у localStorage
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}