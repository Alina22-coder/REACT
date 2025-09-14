import {useEffect, useState} from "react";
import type {CommentModel} from "../../models/CommentModel/CommentModel.ts";
import {loadComments} from "../../servise/api.servise.ts";
import {CommentComponent} from "../CommentComponent/CommentComponent.tsx";


export const CommentsComponent = () => {
    const [comments, setComments] = useState<CommentModel[]>([]);

    useEffect(() => {
        loadComments()
            .then(comments => setComments(comments));
    }, []);


    return (
        <div className="comments">
            <h2 className="comment__title">COMMENTS</h2>
            <div className="comment__wrapper">
                {
                    comments.map(comment => (<CommentComponent key={comment.id} comment={comment}/>))
                }
            </div>
        </div>
    );
};