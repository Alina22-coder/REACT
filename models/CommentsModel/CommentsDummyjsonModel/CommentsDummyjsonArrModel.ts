import type {UserCommentsDummyjsonArrModel} from "./UserCommentsDummyjsonArrModel.ts";

export interface CommentsDummyjsonArrModel {
    id: number,
    body: string,
    postId: number,
    likes: number,
    user: UserCommentsDummyjsonArrModel
}


