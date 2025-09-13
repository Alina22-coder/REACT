import type {CommentModel} from "../models/comments-model.ts";

const commentUrl = import.meta.env.VITE_API_COMMENT_URL + "/comments";


export const loadComment = async():Promise<CommentModel[]> => {
    return await fetch(commentUrl)
        .then(value => value.json());
}