import type {FC} from "react";
import type {PostsDummyjsonArrModel} from "../../models/PostsModel/PostsDummyjsonModel/PostsDummyjsonArrModel";

type PostDummyJsonPropType = {
    postDummyjson: PostsDummyjsonArrModel
}

export const PostDummyJsonComponent:FC<PostDummyJsonPropType> = ({postDummyjson:{id, title, body, tags, reactions, views, userId}}) => {
    return(
        <div className="post-dummyjson__wrap">
            <ul className="post-dummyjson__list">
                <li className="post-dummyjson__item">{id}</li>
                <li className="post-dummyjson__item">Title: {title}</li>
                <li className="post-dummyjson__item">Body:{body}</li>
                <li className="post-dummyjson__item">Tags: {tags.join(", ")}</li>
                <li className="post-dummyjson__item">
                    Reactions:
                    <ul className="post-dummyjson__list">
                        <li className="post-dummyjson__item">likes: {reactions.likes}</li>
                        <li className="post-dummyjson__item">dislikes: {reactions.dislikes}</li>
                    </ul>
                </li>
                <li className="post-dummyjson__item">Views: {views}</li>
                <li className="post-dummyjson__item">User Id: {userId}</li>
            </ul>
        </div>
    )

}