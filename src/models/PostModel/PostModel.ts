import type {ReactionsPostModel} from "./ReactionsPostModel.ts";

export interface PostModel {
    id:number;
    title:string;
    body:string;
    tags:string[];
    reactions:ReactionsPostModel;
    views:string;
    userId:number
}



