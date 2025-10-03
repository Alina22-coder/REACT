import type {UsersDummyjsonArrModel} from "../models/UsersDummyjsonArrModel.ts";

const usersDummyjsonUrl = import.meta.env.VITE_API_BASE_DUMMYJSON_URL;
export const loadUsersDummyjson = async (pg:string):Promise<UsersDummyjsonArrModel[]> => {
    if(+pg > 0){
        const limit = 30;
        const skip = limit * (+pg) - limit;

        const responseUserDummyjson = await fetch(usersDummyjsonUrl + '/users' + '?skip=' + skip);
        const data = await responseUserDummyjson.json();

        return data.users;

    } else {
        return [];
    }
}