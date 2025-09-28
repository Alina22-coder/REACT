import {PostsDummyjsonArrModel} from "./PostsDummyjsonArrModel";

export interface PostsDummyjsonModel {
    posts: PostsDummyjsonArrModel[],
    total: number,
    skip: number,
    limit: number,
}