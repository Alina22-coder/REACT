import type {PostModel} from "./PostModel.ts";

export interface PostResponseDummyjsonModel {
    posts: PostModel[],
    total:number,
    skip:number,
    limit:number
}