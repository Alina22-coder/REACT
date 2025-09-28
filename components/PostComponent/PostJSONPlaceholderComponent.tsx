import type {FC} from "react";
import type {PostsJsonplaceholderModel} from "../../models/PostsModel/PostsJsonplaceholderModel/PostsJsonplaceholderModel.ts";

type PostJSONPlaceholderPropType = {
    postJsonplaceholder:PostsJsonplaceholderModel
}

export const PostJSONPlaceholderComponent:FC<PostJSONPlaceholderPropType> = ({postJsonplaceholder:{id, userId, title, body}}) => {
    return (
        <div className="post-jsonplaceholder__wrap">
            <ul className="post-jsonplaceholder__list">
                <li className="post-jsonplaceholder__item">{id}</li>
                <li className="post-jsonplaceholder__item">User Id: {userId}</li>
                <li className="post-jsonplaceholder__item">Title: {title}</li>
                <li className="post-jsonplaceholder__item">Body: {body}</li>
            </ul>
        </div>
    )
}