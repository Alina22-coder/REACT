import type {FC} from "react";
import type {CommentsJsonplaceholderModel} from "../../models/CommentsModel/CommentsJsonplaceholderModel/CommentsJsonplaceholderModel";

type CommentJSONPlaceholderPropType = {
    commentJsonplaceholder: CommentsJsonplaceholderModel
}

export const CommentJSONPlaceholderComponent:FC<CommentJSONPlaceholderPropType> = ({commentJsonplaceholder:{postId, id, name, email, body}}) => {
    return (
        <div className="comment-jsonplaceholder__wrap">
            <ul className="comment-jsonplaceholder__list">
                <li className="comment-jsonplaceholder__item">{id}</li>
                <li className="comment-jsonplaceholder__item">Post Id: {postId}</li>
                <li className="comment-jsonplaceholder__item">Name: {name}</li>
                <li className="comment-jsonplaceholder__item">
                    <a className="comment-jsonplaceholder__link" href={`mailto:${email}`}> Email: <span>{email}</span></a>
                </li>
                <li className="comment-jsonplaceholder__item">Body: {body}</li>
            </ul>
        </div>
    )
}