import type {UserCommentModel} from "./UserCommentModel.ts";

export interface CommentModel {
    id:number;
    body:string;
    postId:number;
    likes:number;
    user:UserCommentModel;
}