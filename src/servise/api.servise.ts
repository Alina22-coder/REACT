import type {PostModel} from "../models/PostModel/PostModel.ts";
import type {PostResponseDummyjsonModel} from "../models/PostModel/PostResponseDummyjson.ts";
import type {TodoModel} from "../models/TodoModel/TodoModel.ts";
import type {TodoResponseDummyjsonModel} from "../models/TodoModel/TodoResponseDummyjson.ts";
import type {CommentModel} from "../models/CommentModel/CommentModel.ts";
import type {CommentResponseDummyjsonModel} from "../models/CommentModel/CommentResponseDummyjson.ts";


const postUrl = import.meta.env.VITE_API_BASE_URL + '/posts';
export const loadPosts = async ():Promise<PostModel[]> => {
   const response:PostResponseDummyjsonModel = await fetch(postUrl)
        .then(value => value.json());

    return response.posts;
}



const todoUrl = import.meta.env.VITE_API_BASE_URL + '/todos';
export const loadTodos = async ():Promise<TodoModel[]> => {
    const responseTodo:TodoResponseDummyjsonModel = await fetch(todoUrl)
        .then(value => value.json());

    return responseTodo.todos;
}



const commentUrl = import.meta.env.VITE_API_BASE_URL + '/comments';
export const loadComments = async ():Promise<CommentModel[]> => {
    const responseComment:CommentResponseDummyjsonModel = await fetch(commentUrl)
        .then(value => value.json());

    return responseComment.comments;
}