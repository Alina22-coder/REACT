import type {FC} from "react";
import type {CommentsDummyjsonArrModel} from "../../models/CommentsModel/CommentsDummyjsonModel/CommentsDummyjsonArrModel";

type CommentDummyJsonPropType ={
    commentDummy:CommentsDummyjsonArrModel
}

export const CommentDummyJsonComponent:FC<CommentDummyJsonPropType> = ({commentDummy:{id,title,body,tags, reactions,views, userId }}) => {
    return (
        <div className="comment-dummyjson__wrap">
            <ul className="comment-dummyjson__list">
                <li className="comment-dummyjson__item">{id}</li>
                <li className="comment-dummyjson__item">Title: {title}</li>
                <li className="comment-dummyjson__item">Body: {body}</li>
                <li className="comment-dummyjson__item">Tags: {tags.join(", ")}</li>
                <li className="comment-dummyjson__item">
                    Reactions:
                    <ul className="comment-dummyjson__item">
                        <li className="comment-dummyjson__item">likes: {reactions.likes}</li>
                        <li className="comment-dummyjson__item">dislikes: {reactions.dislikes}</li>
                    </ul>
                </li>
                <li className="comment-dummyjson__item">Views: {views}</li>
                <li className="comment-dummyjson__item">User Id: {userId}</li>
            </ul>
        </div>
    )
}