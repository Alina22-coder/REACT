import {CommentsDummyjsonArrModel} from "./CommentsDummyjsonArrModel";

export interface CommentsDummyjsonModel {
    posts: CommentsDummyjsonArrModel[],
    total: number,
    skip: number,
    limit: number
}