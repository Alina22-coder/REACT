import {useEffect, useState} from "react";
import type {CommentsDummyjsonArrModel} from "../../models/CommentsModel/CommentsDummyjsonModel/CommentsDummyjsonArrModel.ts";
import {loadCommentsDummyjson} from "../../serviсe/api.serviсe.ts";
import {CommentDummyJsonComponent} from "../CommentComponent/CommentDummyJsonComponent.tsx";

export const CommentsDummyJsonComponent = () => {
    const [commentsDummy, setCommentsDummy] = useState<CommentsDummyjsonArrModel[]>([]);

    useEffect(() => {
        loadCommentsDummyjson()
            .then(commentsDummy => setCommentsDummy(commentsDummy))
    }, []);

    return (
        <div className="comment-dummyjson-component">
            {
                commentsDummy.map(commentDummy => (<CommentDummyJsonComponent key={commentDummy.id} commentDummy={commentDummy}/>))
            }
        </div>
    )
}