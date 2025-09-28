import {useEffect, useState} from "react";
import type {CommentsJsonplaceholderModel} from "../../models/CommentsModel/CommentsJsonplaceholderModel/CommentsJsonplaceholderModel.ts";
import {loadCommentsJsonplaceholder} from "../../serviсe/api.serviсe.ts";
import {CommentJSONPlaceholderComponent} from "../CommentComponent/CommentJSONPlaceholderComponent.tsx";


export const CommentsJSONPlaceholderComponent = () => {
    const [commentsJsonplaceholder, setCommentsJsonplaceholder] = useState<CommentsJsonplaceholderModel[]>([]);
    useEffect(() => {
        loadCommentsJsonplaceholder()
            .then(commentsJsonplaceholder => {
                console.log(commentsJsonplaceholder);
                setCommentsJsonplaceholder((commentsJsonplaceholder))
            })
    }, []);

    return (
        <div className="comment-jsonplaceholder-component">
            {
                commentsJsonplaceholder.map(commentJsonplaceholder => (<CommentJSONPlaceholderComponent key={commentJsonplaceholder.id} commentJsonplaceholder={commentJsonplaceholder}/>))
            }
        </div>
    )
}