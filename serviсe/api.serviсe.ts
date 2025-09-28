import type {UsersJsonplaceholderModel} from "../models/UsersModel/UsersJsonplaceholderModel/UsersJsonplaceholderModel.ts";
import type {UsersDummyjsonArrModel} from "../models/UsersModel/UsersDummyjsonModel/UsersDummyjsonArrModel.ts";
import type {PostsJsonplaceholderModel} from "../models/PostsModel/PostsJsonplaceholderModel/PostsJsonplaceholderModel.ts";
import type {PostsDummyjsonArrModel} from "../models/PostsModel/PostsDummyjsonModel/PostsDummyjsonArrModel.ts";
import type {CommentsJsonplaceholderModel} from "../models/CommentsModel/CommentsJsonplaceholderModel/CommentsJsonplaceholderModel.ts";
import type {CommentsDummyjsonArrModel} from "../models/CommentsModel/CommentsDummyjsonModel/CommentsDummyjsonArrModel.ts";


// --------------------------------------------------USERS--------------------------------------------------
const usersJsonplaceholderUrl = import.meta.env.VITE_API_BASE_URL + '/users';
export const loadUsersJsonplaceholder = async ():Promise<UsersJsonplaceholderModel[]> => {
    const responseUser = await fetch(usersJsonplaceholderUrl);
    console.log("FETCH URL:", usersJsonplaceholderUrl, "STATUS:", responseUser.status);
    return await responseUser.json();
}

const usersDummyjsonUrl = import.meta.env.VITE_API_BASE_DUMMYJSON_URL + '/users';
export const loadUsersDummyjson = async ():Promise<UsersDummyjsonArrModel[]> => {
    const responseUserDummyjson = await fetch(usersDummyjsonUrl);
    console.log("FETCH URL:", usersDummyjsonUrl, "STATUS:", responseUserDummyjson.status);
    const responseUserDummy = await responseUserDummyjson.json();
    return responseUserDummy.users;

}


// --------------------------------------------------POSTS--------------------------------------------------
const postsJsonplaceholderUrl = import.meta.env.VITE_API_BASE_URL + '/posts';
export const loadPostsJsonplaceholder = async ():Promise<PostsJsonplaceholderModel[]> => {
    const responsePost = await fetch(postsJsonplaceholderUrl);
    console.log("FETCH URL:", postsJsonplaceholderUrl, "STATUS:", responsePost.status);
    return await responsePost.json();
}

const postsDummyjsonUrl = import.meta.env.VITE_API_BASE_DUMMYJSON_URL + '/posts';
export const loadPostsDummyjson = async ():Promise<PostsDummyjsonArrModel[]> => {
    const responsePostDummyjson = await fetch(postsDummyjsonUrl);
    console.log("FETCH URL:", postsDummyjsonUrl, "STATUS:", responsePostDummyjson.status);
    const responsePostDummy = await responsePostDummyjson.json();
    return responsePostDummy.posts;

}

// --------------------------------------------------COMMENTS--------------------------------------------------
const commentsJsonplaceholderUrl = import.meta.env.VITE_API_BASE_URL + '/comments';
export const loadCommentsJsonplaceholder = async ():Promise<CommentsJsonplaceholderModel[]> => {
    const responseComment = await fetch(commentsJsonplaceholderUrl);
    console.log("FETCH URL:", commentsJsonplaceholderUrl, "STATUS:", responseComment.status);
    return await responseComment.json();
}

const commentsDummyjsonUrl = import.meta.env.VITE_API_BASE_DUMMYJSON_URL + '/comments';
export const loadCommentsDummyjson = async ():Promise<CommentsDummyjsonArrModel[]> => {
    const responseCommentDummyjson = await fetch(commentsDummyjsonUrl);
    console.log("FETCH URL:", commentsDummyjsonUrl, "STATUS:", responseCommentDummyjson.status);
    const responseCommentDummy = await responseCommentDummyjson.json();
    return responseCommentDummy.comments;

}