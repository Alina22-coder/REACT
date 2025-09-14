import type {FC} from "react";
import type {CommentModel} from "../../models/CommentModel/CommentModel.ts";
import "../CommentComponent/CommentComponent.css"

type CommentProp = {
    comment:CommentModel
}

export const CommentComponent:FC<CommentProp> = ({comment:{id, body, postId, likes, user}}) => {
    return (
        <div className="comment__wrap">
            <ul className="comment__list">
                <li className="comment__item">id: {id}</li>
                <li className="comment__item">{body}</li>
                <li className="comment__item">postId: {postId}</li>
                <li className="comment__item">Likes: {likes}</li>
                <li className="comment__item">User: {user.id} - {user.username} - {user.fullName}</li>
            </ul>
        </div>
    );
};