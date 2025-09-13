import type {FC} from "react";
import type {CommentModel} from "../../models/comments-model.ts";
import "../CommentComponent/CommentComponent.css"


type CommentProps = {
    comment: CommentModel;
}


export const CommentComponent:FC<CommentProps> = ({comment:{id, name, email, body}}) => {
    return (
        <ul className='comment__info'>
            <li>{id} - {body}</li>
            <li>Name: {name}</li>
            <li>Email: {email}</li>
        </ul>
    );
};