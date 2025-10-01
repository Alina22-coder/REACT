import type {FC} from "react";
import type {CommentsDummyjsonArrModel} from "../../models/CommentsModel/CommentsDummyjsonModel/CommentsDummyjsonArrModel";

type CommentDummyJsonPropType ={
    commentDummy:CommentsDummyjsonArrModel
}

export const CommentDummyJsonComponent:FC<CommentDummyJsonPropType> = ({commentDummy:{id, body, postId,likes,user }}) => {
    return (
        <div className="comment-dummyjson__wrap">
            <ul className="comment-dummyjson__list">
                <li className="comment-dummyjson__item">{id}</li>
                <li className="comment-dummyjson__item">Body: {body}</li>
                <li className="comment-dummyjson__item">Post Id: {postId}</li>
                <li className="comment-dummyjson__item">Likes: {likes}</li>
                <li className="comment-dummyjson__item">
                    User:
                    <ul className="comment-dummyjson__list">
                        <li className="comment-dummyjson__item">Id:{user.id}</li>
                        <li className="comment-dummyjson__item">Name: {user.username}</li>
                        <li className="comment-dummyjson__item">Full name: {user.fullname}</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}