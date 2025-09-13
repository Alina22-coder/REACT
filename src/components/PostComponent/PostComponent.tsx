import type {FC} from "react";
import type {IPostModel} from "../../models/posts-model.ts";
import "../PostComponent/PostComponent.css"

type PropType = {
    post: IPostModel
}

export const PostComponent: FC<PropType> = ({post:{id, title, body}}) => {
    return (
        <div>
            <p>{id} - {title}</p>
            <p>{body}</p>
        </div>
    );
};