import type {ReactionsCommentsDummyjsonArrModel} from "./ReactionsCommentsDummyjsonArrModel.ts";

export interface CommentsDummyjsonArrModel {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: ReactionsCommentsDummyjsonArrModel,
    views: number,
    userId: number
}

