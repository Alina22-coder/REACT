import type {IPostModel} from "../models/posts-model.ts";

const postsUrl = import.meta.env.VITE_API_POST_URL + "/posts";

export const loadPosts = async ():Promise<IPostModel[]> => {
    return await fetch(postsUrl)
        .then(value => value.json())
}