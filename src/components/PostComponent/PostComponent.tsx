import type {FC} from "react";
import type {PostModel} from "../../models/PostModel/PostModel.ts";
import "../PostComponent/PostComponent.css"

type PostProp = {
    post:PostModel
}


export const PostComponent:FC<PostProp> = ({post:{id, userId, body, tags, reactions, views}}) => {
    return (
        <div className="post__wrap">
            <ul className="post__list">
                <li className="post__item">id: {id}</li>
                <li className="post__item">userId: {userId}</li>
                <li className="post__item">{body}</li>
                <li className="post__item">Tags: {tags.join(", ")}</li>
                <li className="post__item">Likes: {reactions.likes}</li>
                <li className="post__item">Dislikes: {reactions.dislikes}</li>
                <li className="post__item">Views: {views}</li>
            </ul>

        </div>
    );
};