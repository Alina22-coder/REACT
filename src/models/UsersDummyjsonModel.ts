import type {UsersDummyjsonArrModel} from "./UsersDummyjsonArrModel.ts";

export interface UsersDummyjsonModel {
    users: UsersDummyjsonArrModel[];
    total: number;
    skip:number;
    limit:number;
}





