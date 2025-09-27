import type {UsersJsonplaceholderModel} from "../models/UsersModel/UsersJsonplaceholderModel/UsersJsonplaceholderModel.ts";
import type {UsersDummyjsonArrModel} from "../models/UsersModel/UsersDummyjsonModel/UsersDummyjsonArrModel.ts";

const usersJsonplaceholderUrl = import.meta.env.VITE_API_BASE_URL + '/users';
export const loadUsersJsonplaceholder = async ():Promise<UsersJsonplaceholderModel[]> => {
    const responseUser = await fetch(usersJsonplaceholderUrl);
    return await responseUser.json();
}

const usersDummyjsonUrl = import.meta.env.VITE_API_BASE_DUMMYJSON_URL + '/users';
export const loadUsersDummyjson = async ():Promise<UsersDummyjsonArrModel[]> => {
    const responseUserDummyjson = await fetch(usersDummyjsonUrl);
    const responseUserDummy = await responseUserDummyjson.json();
    return responseUserDummy.users;

}